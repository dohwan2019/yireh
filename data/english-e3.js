/*
 * 이레 영어 · 초3 문제 파일
 * s1 = 1학기, s2 = 2학기. 새 문제는 해당 학기 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  s1: [
    {"t":"word","w":"pencil","p":"n","m":"연필"},
    {"t":"word","w":"desk","p":"n","m":"책상"},
    {"t":"word","w":"window","p":"n","m":"창문"},
    {"t":"word","w":"rabbit","p":"n","m":"토끼"},
    {"t":"word","w":"eat","p":"v","m":"먹다"},
    {"t":"word","w":"run","p":"v","m":"달리다"},
    {"t":"word","w":"sing","p":"v","m":"노래하다"},
    {"t":"cloze","s":"I ___ a student.","a":"am","d":["is","are","be","being"],"e":"주어가 I일 때 be동사는 am이에요."},
    {"t":"cloze","s":"She ___ ten years old.","a":"is","d":["am","are","be","being"],"e":"주어가 she일 때 be동사는 is예요."},
    {"t":"cloze","s":"This is ___ apple.","a":"an","d":["a","two","many","these"],"e":"모음 소리로 시작하는 apple 앞에는 an을 써요."},
    {"t":"word","w":"kite","p":"n","m":"연"},
    {"t":"word","w":"eraser","p":"n","m":"지우개"},
    {"t":"word","w":"ruler","p":"n","m":"자"},
    {"t":"word","w":"horse","p":"n","m":"말"},
    {"t":"word","w":"drink","p":"v","m":"마시다"},
    {"t":"word","w":"tall","p":"a","m":"키가 큰"},
    {"t":"word","w":"pretty","p":"a","m":"예쁜"},
    {"t":"cloze","s":"He ___ a ball.","a":"has","d":["have","having","am","are"],"e":"주어가 he일 때는 has를 써요."},
    {"t":"cloze","s":"They ___ my friends.","a":"are","d":["is","am","be","does"],"e":"주어가 they일 때 be동사는 are를 써요."},
    {"t":"cloze","s":"Do you like pizza? Yes, I ___.","a":"do","d":["am","is","are","does"],"e":"Do로 물으면 Yes, I do.로 대답해요."}
  ],
  s2: [
    {"t":"word","w":"dance","p":"v","m":"춤추다"},
    {"t":"word","w":"cook","p":"v","m":"요리하다"},
    {"t":"word","w":"grandmother","p":"n","m":"할머니"},
    {"t":"word","w":"orange","p":"n","m":"오렌지"},
    {"t":"word","w":"umbrella","p":"n","m":"우산"},
    {"t":"cloze","s":"I ___ a dog.","a":"have","d":["has","having","am","is"],"e":"주어가 I일 때는 have를 써요."},
    {"t":"cloze","s":"He ___ my friend.","a":"is","d":["am","are","be","do"],"e":"주어가 he일 때 be동사는 is예요."},
    {"t":"cloze","s":"___ is your name?","a":"What","d":["Who","Where","When","How"],"e":"이름을 물을 때는 What을 써요."},
    {"t":"cloze","s":"These are my ___.","a":"books","d":["book","a book","bookes","booking"],"e":"These are 뒤에는 복수 명사가 와요."},
    {"t":"cloze","s":"Can you swim? Yes, I ___.","a":"can","d":["do","am","is","are"],"e":"Can으로 물으면 can으로 대답해요."},
    {"t":"word","w":"grandfather","p":"n","m":"할아버지"},
    {"t":"word","w":"zoo","p":"n","m":"동물원"},
    {"t":"word","w":"glove","p":"n","m":"장갑"},
    {"t":"word","w":"sock","p":"n","m":"양말"},
    {"t":"word","w":"fly","p":"v","m":"날다"},
    {"t":"word","w":"fast","p":"a","m":"빠른"},
    {"t":"word","w":"strong","p":"a","m":"힘센"},
    {"t":"cloze","s":"___ are you? I am fine.","a":"How","d":["What","Who","Where","When"],"e":"안부를 물을 때는 How are you?라고 해요."},
    {"t":"cloze","s":"She ___ like carrots.","a":"doesn't","d":["don't","isn't","aren't","not"],"e":"주어가 she일 때 일반동사의 부정은 doesn't를 써요."},
    {"t":"cloze","s":"Don't ___ in the classroom.","a":"run","d":["running","runs","to run","ran"],"e":"Don't 뒤에는 동사원형을 써요."}
  ],
  more: {"s1":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"milk","p":"n","m":"우유"},{"w":"banana","p":"n","m":"바나나"},{"w":"sit","p":"v","m":"앉다"},{"w":"tree","p":"n","m":"나무"},{"w":"monkey","p":"n","m":"원숭이"},{"w":"black","p":"a","m":"검은"},{"w":"library","p":"n","m":"도서관"},{"w":"bathroom","p":"n","m":"욕실"},{"w":"museum","p":"n","m":"박물관"},{"w":"hobby","p":"n","m":"취미"},{"w":"environment","p":"n","m":"환경"},{"w":"planet","p":"n","m":"행성"},{"w":"culture","p":"n","m":"문화"},{"w":"village","p":"n","m":"마을"},{"w":"opportunity","p":"n","m":"기회"},{"w":"local","p":"a","m":"지역의"},{"w":"prefer","p":"v","m":"선호하다"},{"w":"abandon","p":"v","m":"포기하다, 버리다"},{"w":"collapse","p":"v","m":"붕괴하다"},{"w":"depict","p":"v","m":"묘사하다"},{"w":"exaggerate","p":"v","m":"과장하다"},{"w":"integrate","p":"v","m":"통합하다"},{"w":"perceive","p":"v","m":"인식하다"},{"w":"undermine","p":"v","m":"약화시키다"},{"w":"deliberate","p":"a","m":"의도적인"},{"w":"monotonous","p":"a","m":"단조로운"},{"w":"cite","p":"v","m":"인용하다"},{"w":"demonstrate","p":"v","m":"입증하다"},{"w":"ensure","p":"v","m":"보장하다"},{"w":"inhibit","p":"v","m":"억제하다"},{"w":"offend","p":"v","m":"기분을 상하게 하다"},{"w":"surround","p":"v","m":"둘러싸다"},{"w":"contemporary","p":"a","m":"동시대의"},{"w":"legitimate","p":"a","m":"합법적인"},{"w":"attribute","p":"v","m":"(~의) 탓으로 돌리다"},{"w":"cultivate","p":"v","m":"경작하다"},{"w":"endure","p":"v","m":"견디다"},{"w":"impose","p":"v","m":"부과하다"},{"w":"nurture","p":"v","m":"양육하다"}],"expr":[]},"s2":{"word":[{"w":"cow","p":"n","m":"소"},{"w":"bag","p":"n","m":"가방"},{"w":"bed","p":"n","m":"침대"},{"w":"two","p":"n","m":"둘"},{"w":"bread","p":"n","m":"빵"},{"w":"four","p":"n","m":"넷"},{"w":"stand","p":"v","m":"서다"},{"w":"brother","p":"n","m":"남자 형제"},{"w":"snow","p":"n","m":"눈"},{"w":"hot","p":"a","m":"더운"},{"w":"elephant","p":"n","m":"코끼리"},{"w":"foot","p":"n","m":"발"},{"w":"long","p":"a","m":"긴"},{"w":"sleep","p":"v","m":"자다"},{"w":"sometimes","p":"ad","m":"가끔"},{"w":"dinner","p":"n","m":"저녁 식사"},{"w":"wear","p":"v","m":"입다"},{"w":"subway","p":"n","m":"지하철"},{"w":"practice","p":"v","m":"연습하다"},{"w":"history","p":"n","m":"역사"},{"w":"worry","p":"v","m":"걱정하다"},{"w":"recycle","p":"v","m":"재활용하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"chance","p":"n","m":"기회"},{"w":"curious","p":"a","m":"호기심 많은"},{"w":"communicate","p":"v","m":"의사소통하다"},{"w":"simple","p":"a","m":"간단한"},{"w":"lazy","p":"a","m":"게으른"},{"w":"disappointed","p":"a","m":"실망한"},{"w":"effort","p":"n","m":"노력"},{"w":"patient","p":"a","m":"참을성 있는"},{"w":"complain","p":"v","m":"불평하다"},{"w":"evidence","p":"n","m":"증거"},{"w":"equality","p":"n","m":"평등"},{"w":"ancestor","p":"n","m":"조상"},{"w":"plausible","p":"a","m":"그럴듯한"},{"w":"sophisticated","p":"a","m":"정교한"},{"w":"vivid","p":"a","m":"생생한"},{"w":"curiosity","p":"n","m":"호기심"},{"w":"phenomenon","p":"n","m":"현상"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]}}
};
