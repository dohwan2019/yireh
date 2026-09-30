/*
 * 이레 영어 · 중2 문제 파일
 * s1 = 1학기, s2 = 2학기. 새 문제는 해당 학기 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  s1: [
    {"t":"word","w":"pollution","p":"n","m":"오염"},
    {"t":"word","w":"opportunity","p":"n","m":"기회"},
    {"t":"word","w":"recommend","p":"v","m":"추천하다"},
    {"t":"word","w":"volunteer","p":"v","m":"자원봉사하다"},
    {"t":"word","w":"confident","p":"a","m":"자신감 있는"},
    {"t":"cloze","s":"I have ___ to Jeju Island twice.","a":"been","d":["go","went","going","be"],"e":"have been to: ‘~에 가 본 적이 있다’(경험)"},
    {"t":"cloze","s":"The window was ___ by Tom.","a":"broken","d":["break","broke","breaking","breaks"],"e":"수동태는 be동사 + 과거분사예요."},
    {"t":"cloze","s":"I don't know what ___ next.","a":"to do","d":["do","doing","did","done"],"e":"의문사 + to부정사: ‘무엇을 ~해야 할지’"},
    {"t":"cloze","s":"If it ___ tomorrow, we will stay home.","a":"rains","d":["rain","rained","will rain","raining"],"e":"조건을 나타내는 if절에서는 미래 대신 현재형을 써요."},
    {"t":"cloze","s":"She enjoys ___ books.","a":"reading","d":["read","to read","reads","readed"],"e":"enjoy는 동명사를 목적어로 취해요."},
    {"t":"word","w":"disappear","p":"v","m":"사라지다"},
    {"t":"word","w":"audience","p":"n","m":"관객"},
    {"t":"word","w":"local","p":"a","m":"지역의"},
    {"t":"word","w":"invention","p":"n","m":"발명품"},
    {"t":"word","w":"breathe","p":"v","m":"숨 쉬다"},
    {"t":"cloze","s":"This soup smells ___.","a":"good","d":["nicely","deliciously","goodly","to good"],"e":"감각동사(smell, look, taste 등) 뒤에는 부사가 아니라 형용사가 와요."},
    {"t":"cloze","s":"Have you ever ___ a panda?","a":"seen","d":["see","saw","seeing","to see"],"e":"현재완료(경험)는 have + 과거분사. see의 과거분사는 seen이에요."},
    {"t":"cloze","s":"My mom bought a new bike ___ me.","a":"for","d":["to","of","at","with"],"e":"수여동사 buy를 3형식으로 쓰면 간접목적어 앞에 for를 붙여요."},
    {"t":"cloze","s":"I stayed home ___ I had a bad cold.","a":"because","d":["but","so","although","or"],"e":"이유를 나타낼 때는 접속사 because(~ 때문에)를 써요."},
    {"t":"cloze","s":"I hope ___ you again soon.","a":"to see","d":["seeing","see","saw","to seeing"],"e":"hope는 to부정사를 목적어로 취하는 동사예요."}
  ],
  s2: [
    {"t":"word","w":"disappointed","p":"a","m":"실망한"},
    {"t":"word","w":"necessary","p":"a","m":"필요한"},
    {"t":"word","w":"participate","p":"v","m":"참가하다"},
    {"t":"word","w":"effort","p":"n","m":"노력"},
    {"t":"word","w":"prevent","p":"v","m":"예방하다"},
    {"t":"cloze","s":"This book is ___ than that one.","a":"more interesting","d":["interestinger","most interesting","interesting","much interesting"],"e":"긴 형용사의 비교급은 more를 앞에 붙여요."},
    {"t":"cloze","s":"I have lived here ___ five years.","a":"for","d":["since","during","at","in"],"e":"현재완료와 함께 기간을 나타낼 때는 for를 써요."},
    {"t":"cloze","s":"He asked me ___ the door.","a":"to open","d":["open","opening","opened","opens"],"e":"ask + 목적어 + to부정사: ‘~에게 …해 달라고 부탁하다’"},
    {"t":"cloze","s":"This song ___ by many people.","a":"is loved","d":["loves","loving","is loving","love"],"e":"노래가 ‘사랑받는’ 것이므로 수동태 is loved예요."},
    {"t":"cloze","s":"It's too cold ___ swim.","a":"to","d":["for","that","so","and"],"e":"too + 형용사 + to부정사: ‘너무 ~해서 …할 수 없다’"},
    {"t":"word","w":"achieve","p":"v","m":"이루다"},
    {"t":"word","w":"patient","p":"a","m":"참을성 있는"},
    {"t":"word","w":"purpose","p":"n","m":"목적"},
    {"t":"word","w":"harmful","p":"a","m":"해로운"},
    {"t":"word","w":"complain","p":"v","m":"불평하다"},
    {"t":"cloze","s":"Mt. Everest is the ___ mountain in the world.","a":"highest","d":["higher","high","most high","more higher"],"e":"the + 최상급 + in ~: ~에서 가장 …한. high의 최상급은 highest예요."},
    {"t":"cloze","s":"This bridge ___ in 1990.","a":"was built","d":["built","is built","was building","has built"],"e":"다리는 지어지는 대상이므로 수동태, 1990년은 과거라 was built를 써요."},
    {"t":"cloze","s":"Would you mind ___ the window?","a":"opening","d":["open","to open","opened","to opening"],"e":"mind는 동명사(-ing)를 목적어로 취하는 동사예요."},
    {"t":"cloze","s":"She has already ___ her homework.","a":"finished","d":["finish","finishing","to finish","finishes"],"e":"현재완료(완료)는 have/has + 과거분사. already와 자주 함께 써요."},
    {"t":"cloze","s":"The news made me ___.","a":"happy","d":["happily","happiness","to happy","being happy"],"e":"make + 목적어 + 형용사(목적격 보어): ~를 …하게 만들다."}
  ],
  more: {"s1":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"milk","p":"n","m":"우유"},{"w":"banana","p":"n","m":"바나나"},{"w":"sit","p":"v","m":"앉다"},{"w":"tree","p":"n","m":"나무"},{"w":"monkey","p":"n","m":"원숭이"},{"w":"black","p":"a","m":"검은"},{"w":"window","p":"n","m":"창문"},{"w":"eraser","p":"n","m":"지우개"},{"w":"kitchen","p":"n","m":"부엌"},{"w":"swim","p":"v","m":"수영하다"},{"w":"tired","p":"a","m":"피곤한"},{"w":"borrow","p":"v","m":"빌리다"},{"w":"excited","p":"a","m":"신이 난"},{"w":"healthy","p":"a","m":"건강한"},{"w":"honest","p":"a","m":"정직한"},{"w":"decide","p":"v","m":"결정하다"},{"w":"exciting","p":"a","m":"신나는"},{"w":"positive","p":"a","m":"긍정적인"},{"w":"adapt","p":"v","m":"적응하다"},{"w":"conceal","p":"v","m":"숨기다"},{"w":"disguise","p":"v","m":"위장하다"},{"w":"frustrate","p":"v","m":"좌절시키다"},{"w":"linger","p":"v","m":"오래 머무르다"},{"w":"pursue","p":"v","m":"추구하다"},{"w":"adequate","p":"a","m":"적절한"},{"w":"explicit","p":"a","m":"명시적인"},{"w":"accomplish","p":"v","m":"성취하다"},{"w":"complement","p":"v","m":"보완하다"},{"w":"deteriorate","p":"v","m":"악화되다"},{"w":"exploit","p":"v","m":"착취하다"},{"w":"justify","p":"v","m":"정당화하다"},{"w":"prohibit","p":"v","m":"금지하다"},{"w":"abundant","p":"a","m":"풍부한"},{"w":"enormous","p":"a","m":"거대한"},{"w":"accommodate","p":"v","m":"수용하다"},{"w":"compensate","p":"v","m":"보상하다"},{"w":"derive","p":"v","m":"끌어내다"},{"w":"exhaust","p":"v","m":"고갈시키다"},{"w":"intervene","p":"v","m":"개입하다"}],"expr":[]},"s2":{"word":[{"w":"cow","p":"n","m":"소"},{"w":"bag","p":"n","m":"가방"},{"w":"bed","p":"n","m":"침대"},{"w":"two","p":"n","m":"둘"},{"w":"bread","p":"n","m":"빵"},{"w":"four","p":"n","m":"넷"},{"w":"stand","p":"v","m":"서다"},{"w":"brother","p":"n","m":"남자 형제"},{"w":"snow","p":"n","m":"눈"},{"w":"hot","p":"a","m":"더운"},{"w":"elephant","p":"n","m":"코끼리"},{"w":"foot","p":"n","m":"발"},{"w":"long","p":"a","m":"긴"},{"w":"sleep","p":"v","m":"자다"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"grandfather","p":"n","m":"할아버지"},{"w":"sock","p":"n","m":"양말"},{"w":"strong","p":"a","m":"힘센"},{"w":"sometimes","p":"ad","m":"가끔"},{"w":"dinner","p":"n","m":"저녁 식사"},{"w":"wear","p":"v","m":"입다"},{"w":"subway","p":"n","m":"지하철"},{"w":"practice","p":"v","m":"연습하다"},{"w":"history","p":"n","m":"역사"},{"w":"worry","p":"v","m":"걱정하다"},{"w":"recycle","p":"v","m":"재활용하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"chance","p":"n","m":"기회"},{"w":"curious","p":"a","m":"호기심 많은"},{"w":"communicate","p":"v","m":"의사소통하다"},{"w":"simple","p":"a","m":"간단한"},{"w":"lazy","p":"a","m":"게으른"},{"w":"survive","p":"v","m":"살아남다"},{"w":"admire","p":"v","m":"존경하다"},{"w":"reflect","p":"v","m":"반영하다"},{"w":"efficient","p":"a","m":"효율적인"},{"w":"reluctant","p":"a","m":"꺼리는"},{"w":"subsequent","p":"a","m":"이후의"},{"w":"bias","p":"n","m":"편견"},{"w":"hazard","p":"n","m":"위험 요소"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]}}
};
