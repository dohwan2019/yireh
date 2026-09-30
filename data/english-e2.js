/*
 * 이레 영어 · 초2 문제 파일
 * s1 = 1학기, s2 = 2학기. 새 문제는 해당 학기 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  s1: [
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
    {"t":"word","w":"monkey","p":"n","m":"원숭이"},
    {"t":"word","w":"tiger","p":"n","m":"호랑이"},
    {"t":"word","w":"juice","p":"n","m":"주스"},
    {"t":"word","w":"head","p":"n","m":"머리"},
    {"t":"word","w":"leg","p":"n","m":"다리"},
    {"t":"word","w":"five","p":"n","m":"다섯"},
    {"t":"word","w":"black","p":"a","m":"검은"},
    {"t":"word","w":"walk","p":"v","m":"걷다"},
    {"t":"word","w":"friend","p":"n","m":"친구"},
    {"t":"word","w":"open","p":"v","m":"열다"}
  ],
  s2: [
    {"t":"word","w":"sister","p":"n","m":"여자 형제"},
    {"t":"word","w":"brother","p":"n","m":"남자 형제"},
    {"t":"word","w":"teacher","p":"n","m":"선생님"},
    {"t":"word","w":"rain","p":"n","m":"비"},
    {"t":"word","w":"snow","p":"n","m":"눈"},
    {"t":"word","w":"green","p":"a","m":"초록색의"},
    {"t":"word","w":"cold","p":"a","m":"추운"},
    {"t":"word","w":"hot","p":"a","m":"더운"},
    {"t":"word","w":"sad","p":"a","m":"슬픈"},
    {"t":"word","w":"jump","p":"v","m":"뛰다"},
    {"t":"word","w":"elephant","p":"n","m":"코끼리"},
    {"t":"word","w":"candy","p":"n","m":"사탕"},
    {"t":"word","w":"ear","p":"n","m":"귀"},
    {"t":"word","w":"foot","p":"n","m":"발"},
    {"t":"word","w":"six","p":"n","m":"여섯"},
    {"t":"word","w":"wind","p":"n","m":"바람"},
    {"t":"word","w":"long","p":"a","m":"긴"},
    {"t":"word","w":"clean","p":"a","m":"깨끗한"},
    {"t":"word","w":"close","p":"v","m":"닫다"},
    {"t":"word","w":"sleep","p":"v","m":"자다"}
  ],
  more: {"s1":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"milk","p":"n","m":"우유"},{"w":"banana","p":"n","m":"바나나"},{"w":"sit","p":"v","m":"앉다"},{"w":"eat","p":"v","m":"먹다"},{"w":"horse","p":"n","m":"말"},{"w":"library","p":"n","m":"도서관"},{"w":"bathroom","p":"n","m":"욕실"},{"w":"museum","p":"n","m":"박물관"},{"w":"hobby","p":"n","m":"취미"},{"w":"environment","p":"n","m":"환경"},{"w":"planet","p":"n","m":"행성"},{"w":"culture","p":"n","m":"문화"},{"w":"village","p":"n","m":"마을"},{"w":"opportunity","p":"n","m":"기회"},{"w":"local","p":"a","m":"지역의"},{"w":"prefer","p":"v","m":"선호하다"},{"w":"abandon","p":"v","m":"포기하다, 버리다"},{"w":"collapse","p":"v","m":"붕괴하다"},{"w":"depict","p":"v","m":"묘사하다"},{"w":"exaggerate","p":"v","m":"과장하다"},{"w":"integrate","p":"v","m":"통합하다"},{"w":"perceive","p":"v","m":"인식하다"},{"w":"undermine","p":"v","m":"약화시키다"},{"w":"deliberate","p":"a","m":"의도적인"},{"w":"monotonous","p":"a","m":"단조로운"},{"w":"cite","p":"v","m":"인용하다"},{"w":"demonstrate","p":"v","m":"입증하다"},{"w":"ensure","p":"v","m":"보장하다"},{"w":"inhibit","p":"v","m":"억제하다"},{"w":"offend","p":"v","m":"기분을 상하게 하다"},{"w":"surround","p":"v","m":"둘러싸다"},{"w":"contemporary","p":"a","m":"동시대의"},{"w":"legitimate","p":"a","m":"합법적인"},{"w":"attribute","p":"v","m":"(~의) 탓으로 돌리다"},{"w":"cultivate","p":"v","m":"경작하다"},{"w":"endure","p":"v","m":"견디다"},{"w":"impose","p":"v","m":"부과하다"},{"w":"nurture","p":"v","m":"양육하다"},{"w":"stimulate","p":"v","m":"자극하다"}],"expr":[]},"s2":{"word":[{"w":"cow","p":"n","m":"소"},{"w":"bag","p":"n","m":"가방"},{"w":"bed","p":"n","m":"침대"},{"w":"two","p":"n","m":"둘"},{"w":"bread","p":"n","m":"빵"},{"w":"four","p":"n","m":"넷"},{"w":"stand","p":"v","m":"서다"},{"w":"cook","p":"v","m":"요리하다"},{"w":"umbrella","p":"n","m":"우산"},{"w":"glove","p":"n","m":"장갑"},{"w":"fast","p":"a","m":"빠른"},{"w":"ride","p":"v","m":"타다"},{"w":"climb","p":"v","m":"오르다"},{"w":"early","p":"ad","m":"일찍"},{"w":"busy","p":"a","m":"바쁜"},{"w":"science","p":"n","m":"과학"},{"w":"arrive","p":"v","m":"도착하다"},{"w":"festival","p":"n","m":"축제"},{"w":"polite","p":"a","m":"예의 바른"},{"w":"solve","p":"v","m":"해결하다"},{"w":"habit","p":"n","m":"습관"},{"w":"disappear","p":"v","m":"사라지다"},{"w":"nervous","p":"a","m":"긴장한"},{"w":"prepare","p":"v","m":"준비하다"},{"w":"explain","p":"v","m":"설명하다"},{"w":"neighbor","p":"n","m":"이웃"},{"w":"participate","p":"v","m":"참가하다"},{"w":"achieve","p":"v","m":"이루다"},{"w":"harmful","p":"a","m":"해로운"},{"w":"independent","p":"a","m":"독립적인"},{"w":"suggest","p":"v","m":"제안하다"},{"w":"rarely","p":"ad","m":"좀처럼 ~않는"},{"w":"obsolete","p":"a","m":"구식의"},{"w":"scarce","p":"a","m":"부족한"},{"w":"temporary","p":"a","m":"일시적인"},{"w":"circumstance","p":"n","m":"상황"},{"w":"notion","p":"n","m":"개념"},{"w":"sequence","p":"n","m":"순서"},{"w":"potential","p":"a","m":"잠재적인"},{"w":"spontaneous","p":"a","m":"자발적인"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]}}
};
