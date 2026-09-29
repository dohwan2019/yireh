/*
 * 이레 퀴즈 프로그램 (모든 학년 페이지가 함께 씀)
 * 학년 페이지가 window.QUIZ_CONFIG와 window.QUIZ_DATA를 먼저 정해 두고 이 파일을 불러옵니다.
 *   QUIZ_CONFIG = { subject:'math'|'english', grade:'e1'…'h3', title, period:'week'|'day', math:bool, speech:bool }
 *   QUIZ_DATA   = { general:[문제…], bible:[문제…] }
 * 문제 종류(t):
 *   mc     5지선다        { q, c:[보기5], a:정답번호(0부터), sol }
 *   short  단답형(숫자)   { q, a:숫자, sol }
 *   word   단어           { w, p:'v'|'a'|'n'|'ad', m:뜻 }      → 뜻 고르기 / 단어 고르기로 자동 출제
 *   expr   숙어·표현      { w, m:뜻, r?:출처 }
 *   cloze  빈칸 채우기    { s:'… ___ …', a:정답, d:[오답4], e?:해설, ko?:뜻, r?:출처 }
 *   공통으로 cat(분류), unit(단원), kind(유형)를 붙일 수 있습니다.
 * 새 문제는 목록 끝에 추가하세요. (순서가 바뀌면 학생의 오답노트 기록이 어긋납니다)
 */
(function () {
  const CFG = window.QUIZ_CONFIG;
  const DATA = window.QUIZ_DATA || { general: [], bible: [] };
  const GRADE_LABEL = { e1:'초1', e2:'초2', e3:'초3', e4:'초4', e5:'초5', e6:'초6', m1:'중1', m2:'중2', m3:'중3', h1:'고1', h2:'고2', h3:'고3' };
  const TRACK_LABEL = { general: '일반', bible: '성경' };
  const POS = { v: 'v.', a: 'adj.', n: 'n.', ad: 'adv.' };
  const POS_KO = { v: '동사', a: '형용사', n: '명사', ad: '부사' };
  const LABELS = ['①', '②', '③', '④', '⑤'];
  const CIRCLE = 'M50 7C79 5 95 29 93 54C90 82 61 96 38 91C15 86 4 61 9 38C14 17 35 5 60 9';
  const SLASH = 'M18 88L84 10';
  const SPEAKER = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
  const KEY = `irae-${CFG.subject}`;
  const WEEK = CFG.period === 'week';
  const PERIOD_NAME = WEEK ? '이번 주' : '오늘의';
  const $ = s => document.querySelector(s);

  // ── 날짜 (한국 시간) ──
  function kstToday() {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  }
  function toUTC(d) { const [y, m, dd] = d.split('-').map(Number); return Date.UTC(y, m - 1, dd); }
  function addDays(d, n) { return new Date(toUTC(d) + n * 864e5).toISOString().slice(0, 10); }
  function mondayOf(d) { return addDays(d, -((new Date(toUTC(d)).getUTCDay() + 6) % 7)); }
  function md(d) { const t = new Date(toUTC(d)); return `${t.getUTCMonth() + 1}월 ${t.getUTCDate()}일`; }
  function periodLabel(p) {
    if (WEEK) return `${md(p)} ~ ${md(addDays(p, 6))}`;
    return `${md(p)} (${'일월화수목금토'[new Date(toUTC(p)).getUTCDay()]})`;
  }
  const STEP = WEEK ? 7 : 1;
  const THIS_PERIOD = WEEK ? mondayOf(kstToday()) : kstToday();
  const EPOCH = WEEK ? '2025-12-29' : '2026-01-01';
  function periodIndex(p) { return Math.round((toUTC(p) - toUTC(EPOCH)) / (STEP * 864e5)); }

  // ── 날짜로 정해지는 난수 ──
  function hash(str) { let h = 2166136261; for (const ch of str) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) {
    let a = hash(String(seed));
    return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function shuffle(arr, rand) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  // 한 바퀴를 다 돌 때까지 같은 문제가 다시 나오지 않고, 바퀴마다 순서를 새로 섞음
  function pickCycle(seed, total, index, count) {
    const out = [];
    for (let k = 0; k < count; k++) {
      const pos = index * count + k;
      const order = shuffle([...Array(total).keys()], rng(`${seed}-cycle-${Math.floor(pos / total)}`));
      let cand = order.at(pos % total);
      if (out.includes(cand)) cand = order.find(i => !out.includes(i));
      out.push(cand);
    }
    return out;
  }

  // ── 저장 (학생 브라우저) ──
  function load(name, fallback) { try { return JSON.parse(localStorage.getItem(`${KEY}-${name}`)) ?? fallback; } catch { return fallback; } }
  function save(name, value) { try { localStorage.setItem(`${KEY}-${name}`, JSON.stringify(value)); } catch {} }

  // ── 상태 ──
  let track = load(`track-${CFG.grade}`, 'general');
  if (!DATA[track] || !DATA[track].length) track = DATA.general && DATA.general.length ? 'general' : 'bible';
  let tab = load(`tabsel-${CFG.grade}`, 'period');   // period | practice | wrong (마지막으로 보던 탭)
  if (!['period', 'practice', 'wrong'].includes(tab)) tab = 'period';
  let view = THIS_PERIOD;
  let deck = [], idx = 0, results = [], retrying = false;
  const memo = {};
  const pool = () => DATA[track] || [];
  const poolKey = () => `${CFG.grade}-${track}`;
  const periodSize = () => { const n = pool().length; return n >= 20 ? 10 : Math.min(n, 5); };
  save('last-grade', CFG.grade);

  function esc(s) { return String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch])); }
  function fmtChoice(c) { return CFG.math && /^[-\d.\s]+$/.test(c) ? `$${c}$` : c; }

  // ── 문제 만들기 ──
  function sameTrackAll(type) {
    // 이 학년 문제가 모자랄 때 오답 보기를 채우기 위해 같은 과정의 다른 문제를 씀
    return pool().filter(it => it.t === type);
  }
  function distract(item, type, rand, key) {
    const others = sameTrackAll(type).filter(o => o !== item && o[key] !== item[key]);
    const more = ((DATA.more || {})[track] || {})[type] || []; // 다른 학년의 같은 과정 단어·표현
    const sameP = list => list.filter(o => !item.p || o.p === item.p);
    const otherP = list => list.filter(o => item.p && o.p !== item.p);
    const picked = [];
    for (const o of [...shuffle(sameP(others), rand), ...shuffle(otherP(others), rand), ...shuffle(sameP(more), rand),
      ...shuffle(otherP(more), rand), ...shuffle(FALLBACK[type] || [], rand)]) {
      if (picked.length === 4) break;
      if (o[key] !== item[key] && !picked.some(p => p[key] === o[key])) picked.push(o);
    }
    return picked;
  }
  // 오답 보기가 4개 안 될 때 쓰는 예비 보기
  const FALLBACK = {
    word: ['사과|n', '학교|n', '달리다|v', '큰|a', '친구|n', '먹다|v', '행복한|a', '물|n'].map((x, i) => { const [m, p] = x.split('|'); return { w: ['apple', 'school', 'run', 'big', 'friend', 'eat', 'happy', 'water'][i], m, p }; }),
    expr: [{ w: 'give up', m: '포기하다' }, { w: 'look after', m: '돌보다' }, { w: 'put off', m: '미루다' }, { w: 'find out', m: '알아내다' }],
  };

  function build(item, i, rand, dirHint) {
    const src = `${poolKey()}#${i}`;
    const base = { src, cat: item.cat || (track === 'bible' ? '성경' : ''), unit: item.unit || '', kind: item.kind || '' };
    if (item.t === 'mc') {
      return { ...base, type: 'mc', q: item.q, choices: item.c.map(fmtChoice), ans: item.a, sol: item.sol, kind: base.kind || '5지선다' };
    }
    if (item.t === 'short') {
      return { ...base, type: 'short', q: item.q, ans: item.a, sol: item.sol, kind: base.kind || '단답형' };
    }
    if (item.t === 'word') {
      const opts = shuffle([item, ...distract(item, 'word', rand, 'm')], rand);
      const ans = opts.indexOf(item);
      const dir = dirHint || (rand() < 0.7 ? 'wm' : 'mw');
      if (dir === 'wm') {
        return { ...base, type: 'mc', kind: '뜻 고르기', ans, say: item.w,
          q: `다음 단어의 뜻으로 알맞은 것은?<span class="head">${esc(item.w)}${item.p ? `<span class="pos">${POS[item.p]}</span>` : ''}</span>`,
          choices: opts.map(o => esc(o.m)),
          sol: `<span class="en">${esc(item.w)}</span>${item.p ? ` (${POS_KO[item.p]})` : ''} ${esc(item.m)}` };
      }
      return { ...base, type: 'mc', kind: '단어 고르기', ans, sayAfter: item.w, sayLabel: '정답 발음 듣기', sayChoices: opts.map(o => o.w),
        q: `다음 뜻을 가진 단어는?<span class="kor">${esc(item.m)}</span>`,
        choices: opts.map(o => `<span class="en">${esc(o.w)}</span>`),
        sol: opts.map(o => `<span class="en">${esc(o.w)}</span> ${esc(o.m)}`).join(' · ') };
    }
    if (item.t === 'expr') {
      const opts = shuffle([item, ...distract(item, 'expr', rand, 'm')], rand);
      return { ...base, type: 'mc', kind: base.kind || (track === 'bible' ? '성경에서 온 표현' : '숙어'), ans: opts.indexOf(item), say: item.w,
        q: `다음 표현의 뜻으로 알맞은 것은?<span class="head">${esc(item.w)}</span>`,
        choices: opts.map(o => esc(o.m)),
        sol: `<span class="en">${esc(item.w)}</span> ${esc(item.m)}${item.r ? ` · 출처: ${esc(item.r)}` : ''}` };
    }
    // cloze
    const opts = shuffle([item.a, ...item.d], rand);
    const sentence = esc(item.s).replace('___', '<span class="blank"></span>');
    return { ...base, type: 'mc', kind: base.kind || (item.r ? '구절 빈칸' : '빈칸 채우기'), ans: opts.indexOf(item.a),
      sayAfter: item.s.replace('___', item.a), sayLabel: item.r ? '구절 듣기' : '완성 문장 듣기', sayChoices: opts,
      q: `빈칸에 들어갈 말로 알맞은 것은?${item.r ? ` <span class="ref">${esc(item.r)}</span>` : ''}<span class="sentence">${sentence}</span>`,
      choices: opts.map(o => `<span class="en">${esc(o)}</span>`),
      sol: `정답 <span class="en">${esc(item.a)}</span>. ${item.e ? esc(item.e) : ''}${item.ko ? `<span class="ko">뜻: ${esc(item.ko)}${item.r ? ` (${esc(item.r)})` : ''}</span>` : ''}` };
  }

  function periodDeck(p) {
    const items = pool();
    if (!items.length) return [];
    const rand = rng(`${KEY}-${poolKey()}-${p}`);
    return pickCycle(`${KEY}-${poolKey()}`, items.length, periodIndex(p), periodSize()).map(i => build(items.at(i), i, rand));
  }
  function practiceDeck() {
    const items = pool();
    return shuffle([...items.keys()], Math.random).slice(0, 10).map(i => build(items.at(i), i, Math.random));
  }
  function wrongDeck() {
    const wrong = new Set(load('wrong', []));
    const items = pool();
    const ids = [...items.keys()].filter(i => wrong.has(`${poolKey()}#${i}`));
    return shuffle(ids, Math.random).slice(0, 10).map(i => build(items.at(i), i, Math.random));
  }

  // ── 진행 기록 ──
  function stateKey() { return `${poolKey()}|${tab}${tab === 'period' ? `|${view}` : ''}`; }
  function deckSig() { return deck.map(q => q.src).join(','); }
  function stash() {
    memo[stateKey()] = { deck, idx, results, retrying };
    // 연습·오답노트는 뽑힌 문제까지 통째로 저장해서 새로고침해도 이어서 풀 수 있게 함
    if (tab !== 'period') save(`tab-${stateKey()}`, { deck, idx, results, retrying });
    if (tab === 'period' && !retrying) {
      const all = load('session', {});
      all[`${poolKey()}|${view}`] = { idx, results, sig: deckSig() };
      const keep = addDays(THIS_PERIOD, -60);
      for (const k of Object.keys(all)) if (k.split('|')[1] < keep) delete all[k];
      save('session', all);
    }
  }
  function doneMap() { return load('done', {}); }
  function streak() {
    const done = doneMap();
    let p = done[`${poolKey()}|${THIS_PERIOD}`] ? THIS_PERIOD : addDays(THIS_PERIOD, -STEP), n = 0;
    while (done[`${poolKey()}|${p}`]) { n++; p = addDays(p, -STEP); }
    return n;
  }

  function start(fresh = false) {
    let saved = memo[stateKey()];
    if (!fresh && !saved && tab !== 'period') {
      const s = load(`tab-${stateKey()}`, null);
      if (s && Array.isArray(s.deck) && s.deck.length) saved = s;
    }
    if (!fresh && saved && saved.deck.length) {
      ({ deck, idx, results, retrying } = saved);
    } else if (tab === 'period') {
      deck = periodDeck(view);
      const s = fresh ? null : load('session', {})[`${poolKey()}|${view}`];
      const ok = s && s.sig === deckSig();
      idx = ok ? s.idx : 0; results = ok ? s.results : []; retrying = false;
    } else {
      deck = tab === 'practice' ? practiceDeck() : wrongDeck();
      idx = 0; results = []; retrying = false;
    }
    stash();
    renderAll();
  }

  // ── 발음 듣기 ──
  const CAN_SPEAK = CFG.speech && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  function speak(text, btn) {
    if (!CAN_SPEAK) return;
    try {
      const synth = window.speechSynthesis;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = 0.9;
      const voices = synth.getVoices().filter(v => /^en(-|_|$)/i.test(v.lang));
      const v = voices.find(x => /en[-_]US/i.test(x.lang) && /google|samantha|aria|jenny|natural/i.test(x.name)) || voices.find(x => /en[-_]US/i.test(x.lang)) || voices.at(0);
      if (v) u.voice = v;
      document.querySelectorAll('.playing').forEach(b => b.classList.remove('playing'));
      btn?.classList.add('playing');
      u.onend = u.onerror = () => btn?.classList.remove('playing');
      synth.speak(u);
    } catch {}
  }
  function stopSpeech() { if (CAN_SPEAK) window.speechSynthesis.cancel(); }
  function sayButton(text, label) { return CAN_SPEAK ? `<button class="say" type="button" data-say="${esc(text)}">${SPEAKER}${label}</button>` : ''; }
  if (CAN_SPEAK) window.speechSynthesis.getVoices();

  // ── 연습장 (손으로 풀어 보기) ──
  // 문제마다 그림을 따로 기억함. 페이지를 닫으면 지워짐 (그림은 용량이 커서 저장하지 않음)
  const PENCIL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/></svg>';
  const scratchStore = new Map();
  let pad = null;
  function cssVar(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#18212E'; }
  function buildPad() {
    const back = document.createElement('div');
    back.className = 'sheet-backdrop'; back.hidden = true; back.dataset.act = 'scratch-close';
    const sheet = document.createElement('section');
    sheet.className = 'sheet'; sheet.hidden = true;
    sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-label', '연습장');
    sheet.innerHTML = `
      <div class="sheet-bar">
        <span class="title">연습장</span>
        <button class="tool" type="button" data-tool="ink" aria-pressed="true" aria-label="검은 펜"><span class="swatch"></span></button>
        <button class="tool" type="button" data-tool="red" aria-pressed="false" aria-label="빨간 펜"><span class="swatch red"></span></button>
        <button class="tool" type="button" data-tool="erase" aria-pressed="false">지우개</button>
        <button class="tool" type="button" data-act="scratch-undo">되돌리기</button>
        <button class="tool" type="button" data-act="scratch-clear">모두 지우기</button>
        <button class="tool close" type="button" data-act="scratch-close">닫기</button>
      </div>
      <div class="sheet-q"></div>
      <div class="pad-wrap"><canvas class="pad"></canvas><p class="pad-hint">손가락이나 펜으로 풀어 보세요</p></div>`;
    document.body.append(back, sheet);
    const canvas = sheet.querySelector('canvas');
    pad = { back, sheet, canvas, ctx: canvas.getContext('2d'), hint: sheet.querySelector('.pad-hint'), qEl: sheet.querySelector('.sheet-q'),
      strokes: [], tool: 'ink', cur: null, penSeen: false };
    const pos = e => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    canvas.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.pointerType === 'pen') pad.penSeen = true;
      if (e.pointerType === 'touch' && pad.penSeen) return; // 펜을 쓰는 중이면 손바닥 터치는 무시
      e.preventDefault();
      canvas.setPointerCapture(e.pointerId);
      pad.cur = { tool: pad.tool, pts: [pos(e)] };
      pad.strokes.push(pad.cur);
      drawStroke(pad.cur, 0);
      pad.hint.hidden = true;
    });
    canvas.addEventListener('pointermove', e => {
      if (!pad.cur) return;
      const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      const from = pad.cur.pts.length - 1;
      for (const ev of events) pad.cur.pts.push(pos(ev));
      drawStroke(pad.cur, from);
    });
    const end = () => { pad.cur = null; };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
    window.addEventListener('resize', () => { if (!pad.sheet.hidden) sizePad(); });
  }
  function drawStroke(s, from) {
    const { ctx } = pad;
    ctx.save();
    ctx.globalCompositeOperation = s.tool === 'erase' ? 'destination-out' : 'source-over';
    ctx.strokeStyle = ctx.fillStyle = s.tool === 'red' ? cssVar('--pen') : cssVar('--ink');
    ctx.lineWidth = s.tool === 'erase' ? 24 : 2.6;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const p = s.pts;
    if (p.length === 1) { ctx.beginPath(); ctx.arc(p[0][0], p[0][1], ctx.lineWidth / 2, 0, Math.PI * 2); ctx.fill(); }
    else {
      ctx.beginPath();
      ctx.moveTo(p[Math.max(0, from)][0], p[Math.max(0, from)][1]);
      for (let i = Math.max(1, from + 1); i < p.length; i++) ctx.lineTo(p[i][0], p[i][1]);
      ctx.stroke();
    }
    ctx.restore();
  }
  function redrawPad() {
    const { ctx, canvas } = pad;
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.restore();
    for (const s of pad.strokes) drawStroke(s, 0);
    pad.hint.hidden = pad.strokes.length > 0;
  }
  function sizePad() {
    const r = pad.canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    pad.canvas.width = Math.round(r.width * dpr); pad.canvas.height = Math.round(r.height * dpr);
    pad.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redrawPad();
  }
  function openScratch() {
    const q = deck.at(idx);
    if (!q) return;
    if (!pad) buildPad();
    if (!scratchStore.has(q.src)) scratchStore.set(q.src, []);
    pad.strokes = scratchStore.get(q.src);
    pad.qEl.innerHTML = `<strong>${idx + 1}.</strong> ${q.q}${q.type === 'mc' ? `<ol>${q.choices.map((c, i) => `<li>${LABELS.at(i)} ${c}</li>`).join('')}</ol>` : ''}`;
    pad.back.hidden = false; pad.sheet.hidden = false;
    document.body.classList.add('sheet-open');
    sizePad();
    typeset(pad.qEl);
    pad.sheet.querySelector('.close').focus({ preventScroll: true });
  }
  function closeScratch() {
    if (!pad || pad.sheet.hidden) return;
    pad.back.hidden = true; pad.sheet.hidden = true; pad.cur = null;
    document.body.classList.remove('sheet-open');
    const b = $('.scratch-btn'); if (b) b.focus({ preventScroll: true });
  }
  const scratchOpen = () => pad && !pad.sheet.hidden;

  // ── 화면 ──
  function mark(kind, small) {
    return `<svg class="mark${small ? ' small' : ''}" viewBox="0 0 100 100" aria-hidden="true"><path pathLength="1" d="${kind === 'ok' ? CIRCLE : SLASH}"/></svg>`;
  }
  function typeset(el) { if (CFG.math && window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([el]).catch(() => {}); }

  function renderPicker() {
    const tracks = Object.keys(TRACK_LABEL).filter(t => (DATA[t] || []).length);
    $('#picker').innerHTML = `
      <div class="pick-row"><span class="lbl">학년</span><strong>${GRADE_LABEL[CFG.grade]}</strong><a href="index.html">다른 학년 고르기</a></div>
      <div class="pick-row"><span class="lbl">과정</span>
        <div class="seg track">${tracks.map(t => `<button type="button" data-track="${t}" aria-pressed="${t === track}">${TRACK_LABEL[t]} <span class="n">${DATA[t].length}</span></button>`).join('')}</div>
      </div>`;
  }
  function renderTabs() {
    const wrong = new Set(load('wrong', []));
    const wrongN = [...pool().keys()].filter(i => wrong.has(`${poolKey()}#${i}`)).length;
    const tabs = [['period', `${PERIOD_NAME} 퀴즈`, periodSize()], ['practice', '연습', pool().length], ['wrong', '오답노트', wrongN]];
    $('#tabs').innerHTML = tabs.map(([k, name, n]) => `<button class="chip" type="button" data-tab="${k}" aria-pressed="${k === tab}">${name}<span class="n">${n}</span></button>`).join('');
  }
  function renderDay() {
    const who = `${GRADE_LABEL[CFG.grade]} · ${TRACK_LABEL[track]}`;
    if (tab === 'period') {
      const done = doneMap()[`${poolKey()}|${view}`];
      const s = streak();
      $('#day').innerHTML = `
        <button class="nav" type="button" data-act="prev" aria-label="이전">◀</button>
        <span class="date">${periodLabel(view)}</span>
        <button class="nav" type="button" data-act="next-period" aria-label="다음" ${view >= THIS_PERIOD ? 'disabled' : ''}>▶</button>
        ${done ? `<span class="badge">완료 ${done.right}/${done.total}</span>` : ''}
        ${s ? `<span class="streak">연속 ${s}${WEEK ? '주' : '일'}</span>` : ''}
        <p class="sub">${view === THIS_PERIOD ? `${who} ${PERIOD_NAME} ${deck.length}문제예요.` : `지난 ${WEEK ? '주' : '날'}의 문제예요. 놓친 ${WEEK ? '주' : '날'}를 채워 보세요.`}${pool().length < 20 ? ` 문제가 더 추가되면 한 번에 10문제씩 나와요.` : ''}</p>`;
    } else if (tab === 'practice') {
      $('#day').innerHTML = `<span class="date">${who} 연습</span><p class="sub">전체 ${pool().length}문제 중 무작위로 10문제를 골라요. 다 풀면 ‘새 10문제’로 바꿀 수 있어요.</p>`;
    } else {
      $('#day').innerHTML = `<span class="date">${who} 오답노트</span><p class="sub">틀린 문제에서 골라요. 다시 맞히면 오답노트에서 빠집니다.</p>`;
    }
  }
  function renderDots() {
    $('#dots').innerHTML = deck.map((_, i) => {
      const r = results.at(i);
      return `<span class="dot ${r ? (r.correct ? 'ok' : 'no') : (i === idx ? 'now' : '')}">${i + 1}</span>`;
    }).join('');
  }
  function renderStage() {
    renderDots();
    const stage = $('#stage');
    if (!deck.length) {
      stage.innerHTML = `<div class="card"><p class="empty">${tab === 'wrong' ? '오답노트가 비어 있어요. 문제를 풀다 틀리면 여기에 모입니다.' : '아직 이 과정에 문제가 없어요.'}</p></div>`;
      return;
    }
    stage.innerHTML = idx < deck.length ? questionHTML(deck.at(idx)) : summaryHTML();
    typeset(stage);
    // 키보드가 있는 PC에서만 입력칸에 바로 커서를 둠. 휴대폰은 자판이 문제를 가리므로 학생이 입력칸을 누를 때 열리게 함
    const inp = $('#short-answer');
    const touch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (inp && !results.at(idx) && !touch) inp.focus({ preventScroll: true });
  }
  function renderAll() { renderPicker(); renderTabs(); renderDay(); renderStage(); }

  function questionHTML(q) {
    const res = results.at(idx);
    const done = !!res;
    let body;
    if (q.type === 'mc') {
      body = `<ol class="choices">${q.choices.map((c, i) => {
        let cls = '', m = '';
        if (done) {
          if (i === q.ans) { cls = 'right'; m = mark('ok', true); }
          else if (i === res.picked) { cls = 'picked-wrong'; m = mark('no', true); }
          else cls = 'dim';
        }
        const mini = q.sayChoices && CAN_SPEAK ? `<button class="say-mini" type="button" data-say="${esc(q.sayChoices.at(i))}" aria-label="${LABELS.at(i)} 발음 듣기">${SPEAKER}</button>` : '';
        return `<li><button class="choice ${cls}" type="button" data-pick="${i}" ${done ? 'disabled' : ''}><span class="lab">${LABELS.at(i)}${m}</span><span>${c}</span></button>${mini}</li>`;
      }).join('')}</ol>`;
    } else {
      body = `<form class="short" id="short-form">
        <label for="short-answer" class="hint">답을 숫자로 입력하세요</label>
        <input id="short-answer" inputmode="decimal" autocomplete="off" ${done ? `value="${esc(res.picked)}" disabled` : ''}>
        ${done ? '' : '<button class="btn ghost" type="button" data-act="neg" aria-label="음수 부호 넣기/빼기">±</button><button class="btn" type="submit">확인</button>'}
      </form>`;
    }
    const last = idx === deck.length - 1;
    const feedback = done ? `
      <p class="verdict ${res.correct ? 'ok' : ''}" role="status">${res.correct ? '정답이에요!' : `아쉬워요. 정답은 ${q.type === 'mc' ? LABELS.at(q.ans) : q.ans}`}</p>
      <div class="sol"><span class="k">해설</span>${q.sol}</div>
      <div class="row">${q.sayAfter ? sayButton(q.sayAfter, q.sayLabel) : ''}<button class="btn" type="button" data-act="next" id="next-btn">${last ? '결과 보기' : '다음 문제 →'}</button></div>` : '';
    const meta = [q.cat ? `<span>${esc(q.cat)}</span>` : '', q.unit ? `<span>${q.cat ? '· ' : ''}${esc(q.unit)}</span>` : '',
      `<span class="tag${track === 'bible' ? ' bible' : ''}">${esc(q.kind)}</span>`].join('');
    return `<article class="card">
      <div class="qhead">
        <div class="qnum">${idx + 1}${done ? mark(res.correct ? 'ok' : 'no') : ''}</div>
        <div><div class="meta">${meta}</div><p class="qtext">${q.q}</p></div>
      </div>
      <div class="tools-row">${q.say ? sayButton(q.say, '발음 듣기') : ''}<button class="scratch-btn" type="button" data-act="scratch">${PENCIL}연습장</button></div>
      ${body}
      ${feedback}
    </article>`;
  }

  function summaryHTML() {
    const total = deck.length;
    const right = results.filter(r => r && r.correct).length;
    const wrongQs = deck.filter((_, i) => !(results.at(i) && results.at(i).correct));
    const msg = right === total ? '전부 맞혔어요!' : right / total >= 0.7 ? '잘했어요. 틀린 문제만 한 번 더 보세요.' : '해설을 읽고 다시 풀어 봐요.';
    const tail = tab === 'period' && view === THIS_PERIOD ? (WEEK ? ' 다음 주 월요일에 새 문제가 나와요.' : ' 내일 새 문제가 나와요.') : '';
    return `<article class="card">
      <div class="score"><span class="big">${right} / ${total}${mark('ok')}</span><p>${msg}${tail}</p></div>
      ${wrongQs.length ? `<ul class="wrong-list">${wrongQs.map(q => `<li><div class="meta"><span>${esc(q.kind)}</span></div>${q.type === 'short' || !q.say ? q.q + '<br>' : ''}${q.sol}</li>`).join('')}</ul>` : ''}
      <div class="row">
        ${wrongQs.length ? '<button class="btn ghost" type="button" data-act="retry-wrong">틀린 문제만 다시</button>' : ''}
        <button class="btn" type="button" data-act="restart">${tab === 'period' ? '처음부터 다시 풀기' : '새 10문제'}</button>
      </div>
    </article>`;
  }

  function answer(value) {
    const q = deck.at(idx);
    if (!q || results.at(idx)) return;
    let correct, picked;
    if (q.type === 'mc') { picked = value; correct = value === q.ans; }
    else {
      picked = String(value).trim();
      if (!picked) return;
      correct = Number(picked.replace(/,/g, '')) === q.ans;
    }
    results[idx] = { correct, picked };
    const wrong = new Set(load('wrong', []));
    correct ? wrong.delete(q.src) : wrong.add(q.src);
    save('wrong', [...wrong]);
    if (tab === 'period' && !retrying && deck.every((_, i) => results.at(i))) {
      const done = doneMap();
      done[`${poolKey()}|${view}`] = { right: results.filter(r => r.correct).length, total: deck.length };
      save('done', done);
    }
    stash();
    renderTabs(); renderDay(); renderStage();
    const nb = $('#next-btn'); if (nb) nb.focus({ preventScroll: true });
  }
  function next() { stopSpeech(); closeScratch(); idx += 1; stash(); renderStage(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  document.addEventListener('click', e => {
    const tool = e.target.closest('[data-tool]');
    if (tool && pad) {
      pad.tool = tool.dataset.tool;
      pad.sheet.querySelectorAll('[data-tool]').forEach(b => b.setAttribute('aria-pressed', String(b === tool)));
      return;
    }
    const sa = e.target.closest('[data-act]') && e.target.closest('[data-act]').dataset.act;
    if (sa === 'scratch') { openScratch(); return; }
    if (sa === 'scratch-close') { closeScratch(); return; }
    if (sa === 'scratch-undo') { if (pad) { pad.strokes.pop(); redrawPad(); } return; }
    if (sa === 'scratch-clear') { if (pad) { pad.strokes.length = 0; redrawPad(); } return; }
    const say = e.target.closest('[data-say]');
    if (say) { speak(say.dataset.say, say); return; }
    const tr = e.target.closest('[data-track]');
    if (tr) {
      if (tr.dataset.track === track) return;
      stopSpeech(); track = tr.dataset.track; save(`track-${CFG.grade}`, track); tab = 'period'; save(`tabsel-${CFG.grade}`, tab); view = THIS_PERIOD; start(); return;
    }
    const tb = e.target.closest('[data-tab]');
    if (tb) {
      if (tb.dataset.tab === tab && (tab !== 'period' || view === THIS_PERIOD)) return;
      stopSpeech(); tab = tb.dataset.tab; save(`tabsel-${CFG.grade}`, tab); view = THIS_PERIOD; start(); return;
    }
    const pick = e.target.closest('[data-pick]');
    if (pick && !pick.disabled) { answer(Number(pick.dataset.pick)); return; }
    const act = e.target.closest('[data-act]') && e.target.closest('[data-act]').dataset.act;
    if (act === 'next') next();
    if (act === 'neg') {
      // 휴대폰 숫자 키패드에는 − 키가 없는 경우가 많아서 버튼으로 부호를 바꿈
      const inp = $('#short-answer');
      if (inp) { inp.value = inp.value.startsWith('-') ? inp.value.slice(1) : '-' + inp.value; }
    }
    if (act === 'restart') start(true);
    if (act === 'prev') { view = addDays(view, -STEP); start(); }
    if (act === 'next-period' && view < THIS_PERIOD) { view = addDays(view, STEP); start(); }
    if (act === 'retry-wrong') {
      deck = deck.filter((_, i) => !(results.at(i) && results.at(i).correct));
      idx = 0; results = []; retrying = true; stash(); renderStage();
    }
  });
  document.addEventListener('submit', e => {
    if (e.target.id !== 'short-form') return;
    e.preventDefault();
    answer($('#short-answer').value);
  });
  document.addEventListener('keydown', e => {
    if (scratchOpen()) { if (e.key === 'Escape') closeScratch(); return; }
    if (e.target.tagName === 'INPUT') return;
    const q = deck.at(idx);
    if (!q) return;
    if (q.type === 'mc' && !results.at(idx) && /^[1-5]$/.test(e.key)) answer(Number(e.key) - 1);
    else if (e.key === 'Enter' && results.at(idx) && !e.target.closest('button')) next();
  });

  // 뼈대 그리기
  document.title = `${CFG.title} ${GRADE_LABEL[CFG.grade]}`;
  $('#app').innerHTML = `
    <header>
      <a class="home" href="../index.html">← 이레 처음으로</a>
      <span class="eyebrow">${CFG.eyebrow || ''}</span>
      <h1>${CFG.title} ${GRADE_LABEL[CFG.grade]}</h1>
      <p class="lead">${CFG.lead || ''}</p>
    </header>
    <section class="picker" id="picker" aria-label="학년과 과정"></section>
    <nav class="chips" id="tabs" aria-label="퀴즈 종류"></nav>
    <section class="day" id="day" aria-live="polite"></section>
    <div class="dots" id="dots" aria-hidden="true"></div>
    <main id="stage"></main>
    <footer>${CFG.footer || ''}</footer>`;
  window.IRAE_READY = () => typeset($('#stage'));
  // 점검용: 문제 하나를 만들어 보거나 과정을 바꿔 봄
  window.IRAE_DEBUG = { build: (t, i) => { const keep = track; track = t; const q = build(pool()[i], i, Math.random); track = keep; return q; }, periodDeck: (t, p) => { const keep = track; track = t; const d = periodDeck(p); track = keep; return d; } };
  start();
})();
