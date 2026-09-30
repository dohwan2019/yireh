/*
 * 이레 영어 · 초2 문제 파일
 * general = 문제 목록. 새 문제는 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
    {"t":"word","w":"mother","p":"n","m":"어머니"},
    {"t":"word","w":"father","p":"n","m":"아버지"},
    {"t":"word","w":"school","p":"n","m":"학교"},
    {"t":"word","w":"water","p":"n","m":"물"},
    {"t":"word","w":"tree","p":"n","m":"나무"},
    {"t":"word","w":"flower","p":"n","m":"꽃"},
    {"t":"word","w":"big","p":"a","m":"큰"},
    {"t":"word","w":"small","p":"a","m":"작은"},
    {"t":"word","w":"happy","p":"a","m":"행복한"},
    {"t":"word","w":"blue","p":"a","m":"파란"},
    {"t":"word","w":"sister","p":"n","m":"여자 형제"},
    {"t":"word","w":"brother","p":"n","m":"남자 형제"},
    {"t":"word","w":"teacher","p":"n","m":"선생님"},
    {"t":"word","w":"rain","p":"n","m":"비"},
    {"t":"word","w":"snow","p":"n","m":"눈"},
    {"t":"word","w":"green","p":"a","m":"초록색의"},
    {"t":"word","w":"cold","p":"a","m":"추운"},
    {"t":"word","w":"hot","p":"a","m":"더운"},
    {"t":"word","w":"sad","p":"a","m":"슬픈"},
    {"t":"word","w":"jump","p":"v","m":"뛰다"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"desk","p":"n","m":"책상"},{"w":"cook","p":"v","m":"요리하다"},{"w":"weather","p":"n","m":"날씨"},{"w":"near","p":"a","m":"가까운"},{"w":"visit","p":"v","m":"방문하다"},{"w":"future","p":"n","m":"미래"},{"w":"solve","p":"v","m":"해결하다"},{"w":"decide","p":"v","m":"결정하다"},{"w":"pollution","p":"n","m":"오염"},{"w":"participate","p":"v","m":"참가하다"},{"w":"survive","p":"v","m":"살아남다"},{"w":"adapt","p":"v","m":"적응하다"},{"w":"conserve","p":"v","m":"보존하다"},{"w":"emphasize","p":"v","m":"강조하다"},{"w":"infer","p":"v","m":"추론하다"},{"w":"perceive","p":"v","m":"인식하다"},{"w":"withdraw","p":"v","m":"철회하다"},{"w":"explicit","p":"a","m":"명시적인"},{"w":"reluctant","p":"a","m":"꺼리는"},{"w":"circumstance","p":"n","m":"상황"},{"w":"likewise","p":"ad","m":"마찬가지로"},{"w":"commence","p":"v","m":"시작하다"},{"w":"deteriorate","p":"v","m":"악화되다"},{"w":"generate","p":"v","m":"생성하다"},{"w":"migrate","p":"v","m":"이주하다"},{"w":"reveal","p":"v","m":"드러내다"},{"w":"contemporary","p":"a","m":"동시대의"},{"w":"mutual","p":"a","m":"상호의"},{"w":"transparent","p":"a","m":"투명한"},{"w":"property","p":"n","m":"재산"},{"w":"anticipate","p":"v","m":"예상하다"},{"w":"cultivate","p":"v","m":"경작하다"},{"w":"evolve","p":"v","m":"진화하다"},{"w":"intervene","p":"v","m":"개입하다"},{"w":"prompt","p":"v","m":"촉발하다"},{"w":"ambiguous","p":"a","m":"모호한"},{"w":"hostile","p":"a","m":"적대적인"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[],"expr":[]}}
};
