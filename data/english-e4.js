/*
 * 이레 영어 · 초4 문제 파일
 * s1 = 1학기, s2 = 2학기. 새 문제는 해당 학기 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  s1: [
    {"t":"word","w":"kitchen","p":"n","m":"부엌"},
    {"t":"word","w":"hospital","p":"n","m":"병원"},
    {"t":"word","w":"library","p":"n","m":"도서관"},
    {"t":"word","w":"weather","p":"n","m":"날씨"},
    {"t":"word","w":"rainy","p":"a","m":"비가 오는"},
    {"t":"word","w":"hungry","p":"a","m":"배고픈"},
    {"t":"word","w":"swim","p":"v","m":"수영하다"},
    {"t":"cloze","s":"He ___ soccer every day.","a":"plays","d":["play","playing","to play","is play"],"e":"주어가 he이고 매일 하는 일이므로 동사에 -s를 붙여요."},
    {"t":"cloze","s":"I can ___ the piano.","a":"play","d":["plays","playing","played","to play"],"e":"can 뒤에는 동사원형이 와요."},
    {"t":"cloze","s":"There ___ two cats on the bed.","a":"are","d":["is","am","be","was"],"e":"two cats는 복수이므로 are를 써요."},
    {"t":"word","w":"park","p":"n","m":"공원"},
    {"t":"word","w":"bathroom","p":"n","m":"욕실"},
    {"t":"word","w":"bakery","p":"n","m":"빵집"},
    {"t":"word","w":"windy","p":"a","m":"바람이 부는"},
    {"t":"word","w":"thirsty","p":"a","m":"목마른"},
    {"t":"word","w":"tired","p":"a","m":"피곤한"},
    {"t":"word","w":"wash","p":"v","m":"씻다"},
    {"t":"cloze","s":"___ is it today? It's Monday.","a":"What day","d":["What time","How","Who","Where"],"e":"요일을 물을 때는 What day is it today?라고 해요."},
    {"t":"cloze","s":"My birthday is ___ May.","a":"in","d":["on","at","to","of"],"e":"달(월) 앞에는 in을 써요."},
    {"t":"cloze","s":"Can I ___ your pen?","a":"use","d":["using","uses","to use","used"],"e":"Can 뒤에는 동사원형을 써요."}
  ],
  s2: [
    {"t":"word","w":"breakfast","p":"n","m":"아침 식사"},
    {"t":"word","w":"ride","p":"v","m":"타다"},
    {"t":"word","w":"sometimes","p":"ad","m":"가끔"},
    {"t":"word","w":"near","p":"a","m":"가까운"},
    {"t":"word","w":"climb","p":"v","m":"오르다"},
    {"t":"cloze","s":"She doesn't ___ milk.","a":"like","d":["likes","liked","liking","to like"],"e":"doesn't 뒤에는 동사원형이 와요."},
    {"t":"cloze","s":"Where ___ you from?","a":"are","d":["is","am","do","does"],"e":"주어가 you일 때 be동사는 are예요."},
    {"t":"cloze","s":"I am ___ a book now.","a":"reading","d":["read","reads","to read","readed"],"e":"지금 하고 있는 일은 am + -ing로 나타내요."},
    {"t":"cloze","s":"It is ___ today.","a":"sunny","d":["sun","suns","sunning","sunned"],"e":"날씨를 나타내는 형용사 sunny(화창한)를 써요."},
    {"t":"cloze","s":"He ___ up at seven every day.","a":"gets","d":["get","getting","to get","be get"],"e":"주어가 he이고 매일 하는 일이므로 gets예요."},
    {"t":"word","w":"dinner","p":"n","m":"저녁 식사"},
    {"t":"word","w":"always","p":"ad","m":"항상"},
    {"t":"word","w":"early","p":"ad","m":"일찍"},
    {"t":"word","w":"wear","p":"v","m":"입다"},
    {"t":"word","w":"catch","p":"v","m":"잡다"},
    {"t":"word","w":"busy","p":"a","m":"바쁜"},
    {"t":"word","w":"subway","p":"n","m":"지하철"},
    {"t":"cloze","s":"What time do you ___ to bed?","a":"go","d":["goes","going","went","to go"],"e":"do you 뒤에는 동사원형을 써요."},
    {"t":"cloze","s":"She is ___ a picture now.","a":"drawing","d":["draw","draws","drew","to draw"],"e":"지금 하고 있는 일은 be동사 + 동사-ing로 나타내요."},
    {"t":"cloze","s":"Whose bag is this? It's ___.","a":"mine","d":["my","me","I","myself"],"e":"\"나의 것\"은 mine이라고 해요."}
  ],
  more: {"s1":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"milk","p":"n","m":"우유"},{"w":"banana","p":"n","m":"바나나"},{"w":"sit","p":"v","m":"앉다"},{"w":"tree","p":"n","m":"나무"},{"w":"monkey","p":"n","m":"원숭이"},{"w":"black","p":"a","m":"검은"},{"w":"window","p":"n","m":"창문"},{"w":"eraser","p":"n","m":"지우개"},{"w":"museum","p":"n","m":"박물관"},{"w":"hobby","p":"n","m":"취미"},{"w":"environment","p":"n","m":"환경"},{"w":"planet","p":"n","m":"행성"},{"w":"culture","p":"n","m":"문화"},{"w":"village","p":"n","m":"마을"},{"w":"opportunity","p":"n","m":"기회"},{"w":"local","p":"a","m":"지역의"},{"w":"prefer","p":"v","m":"선호하다"},{"w":"abandon","p":"v","m":"포기하다, 버리다"},{"w":"collapse","p":"v","m":"붕괴하다"},{"w":"depict","p":"v","m":"묘사하다"},{"w":"exaggerate","p":"v","m":"과장하다"},{"w":"integrate","p":"v","m":"통합하다"},{"w":"perceive","p":"v","m":"인식하다"},{"w":"undermine","p":"v","m":"약화시키다"},{"w":"deliberate","p":"a","m":"의도적인"},{"w":"monotonous","p":"a","m":"단조로운"},{"w":"cite","p":"v","m":"인용하다"},{"w":"demonstrate","p":"v","m":"입증하다"},{"w":"ensure","p":"v","m":"보장하다"},{"w":"inhibit","p":"v","m":"억제하다"},{"w":"offend","p":"v","m":"기분을 상하게 하다"},{"w":"surround","p":"v","m":"둘러싸다"},{"w":"contemporary","p":"a","m":"동시대의"},{"w":"legitimate","p":"a","m":"합법적인"},{"w":"attribute","p":"v","m":"(~의) 탓으로 돌리다"},{"w":"cultivate","p":"v","m":"경작하다"},{"w":"endure","p":"v","m":"견디다"},{"w":"impose","p":"v","m":"부과하다"},{"w":"nurture","p":"v","m":"양육하다"}],"expr":[]},"s2":{"word":[{"w":"cow","p":"n","m":"소"},{"w":"bag","p":"n","m":"가방"},{"w":"bed","p":"n","m":"침대"},{"w":"two","p":"n","m":"둘"},{"w":"bread","p":"n","m":"빵"},{"w":"four","p":"n","m":"넷"},{"w":"stand","p":"v","m":"서다"},{"w":"brother","p":"n","m":"남자 형제"},{"w":"snow","p":"n","m":"눈"},{"w":"hot","p":"a","m":"더운"},{"w":"elephant","p":"n","m":"코끼리"},{"w":"foot","p":"n","m":"발"},{"w":"long","p":"a","m":"긴"},{"w":"sleep","p":"v","m":"자다"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"grandfather","p":"n","m":"할아버지"},{"w":"sock","p":"n","m":"양말"},{"w":"strong","p":"a","m":"힘센"},{"w":"practice","p":"v","m":"연습하다"},{"w":"history","p":"n","m":"역사"},{"w":"worry","p":"v","m":"걱정하다"},{"w":"recycle","p":"v","m":"재활용하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"chance","p":"n","m":"기회"},{"w":"curious","p":"a","m":"호기심 많은"},{"w":"communicate","p":"v","m":"의사소통하다"},{"w":"simple","p":"a","m":"간단한"},{"w":"lazy","p":"a","m":"게으른"},{"w":"disappointed","p":"a","m":"실망한"},{"w":"effort","p":"n","m":"노력"},{"w":"patient","p":"a","m":"참을성 있는"},{"w":"complain","p":"v","m":"불평하다"},{"w":"evidence","p":"n","m":"증거"},{"w":"equality","p":"n","m":"평등"},{"w":"ancestor","p":"n","m":"조상"},{"w":"plausible","p":"a","m":"그럴듯한"},{"w":"sophisticated","p":"a","m":"정교한"},{"w":"vivid","p":"a","m":"생생한"},{"w":"curiosity","p":"n","m":"호기심"},{"w":"phenomenon","p":"n","m":"현상"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]}}
};
