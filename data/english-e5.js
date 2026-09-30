/*
 * 이레 영어 · 초5 문제 파일
 * s1 = 1학기, s2 = 2학기. 새 문제는 해당 학기 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  s1: [
    {"t":"word","w":"museum","p":"n","m":"박물관"},
    {"t":"word","w":"delicious","p":"a","m":"맛있는"},
    {"t":"word","w":"dangerous","p":"a","m":"위험한"},
    {"t":"word","w":"favorite","p":"a","m":"가장 좋아하는"},
    {"t":"word","w":"borrow","p":"v","m":"빌리다"},
    {"t":"word","w":"visit","p":"v","m":"방문하다"},
    {"t":"cloze","s":"I ___ to the park yesterday.","a":"went","d":["go","goes","going","will go"],"e":"yesterday(어제)가 있으므로 과거형 went예요."},
    {"t":"cloze","s":"She is ___ than me.","a":"taller","d":["tall","tallest","more tall","most tall"],"e":"than(~보다) 앞에는 비교급을 써요."},
    {"t":"cloze","s":"What are you ___ now?","a":"doing","d":["do","does","did","done"],"e":"are you ~ing: 지금 하고 있는 일을 물을 때 써요."},
    {"t":"cloze","s":"I will ___ my grandma tomorrow.","a":"visit","d":["visited","visits","visiting","to visit"],"e":"will 뒤에는 동사원형이 와요."},
    {"t":"word","w":"hobby","p":"n","m":"취미"},
    {"t":"word","w":"fever","p":"n","m":"열"},
    {"t":"word","w":"invite","p":"v","m":"초대하다"},
    {"t":"word","w":"travel","p":"v","m":"여행하다"},
    {"t":"word","w":"excited","p":"a","m":"신이 난"},
    {"t":"word","w":"quiet","p":"a","m":"조용한"},
    {"t":"cloze","s":"I ___ a movie last Sunday.","a":"watched","d":["watch","watches","watching","will watch"],"e":"last Sunday는 과거이므로 과거형 watched를 써요."},
    {"t":"cloze","s":"You have a fever. You ___ see a doctor.","a":"should","d":["are","is","does","has"],"e":"\"~하는 게 좋겠다\"는 조언은 should + 동사원형으로 나타내요."},
    {"t":"cloze","s":"How ___ is it from here to the school?","a":"far","d":["many","old","often","big"],"e":"거리를 물을 때는 How far를 써요."},
    {"t":"cloze","s":"My brother is good ___ drawing.","a":"at","d":["in","on","to","for"],"e":"\"~을 잘하다\"는 be good at으로 나타내요."}
  ],
  s2: [
    {"t":"word","w":"shy","p":"a","m":"수줍은"},
    {"t":"word","w":"science","p":"n","m":"과학"},
    {"t":"word","w":"practice","p":"v","m":"연습하다"},
    {"t":"word","w":"restaurant","p":"n","m":"식당"},
    {"t":"word","w":"arrive","p":"v","m":"도착하다"},
    {"t":"cloze","s":"Did you ___ your homework?","a":"do","d":["did","does","doing","done"],"e":"Did 뒤에는 동사원형이 와요."},
    {"t":"cloze","s":"There isn't ___ milk in the cup.","a":"any","d":["some","many","a","few"],"e":"부정문에서 ‘조금도’는 any를 써요."},
    {"t":"cloze","s":"This bag is ___ than that one.","a":"heavier","d":["heavy","heaviest","more heavy","heavyer"],"e":"heavy의 비교급은 y를 i로 바꾸고 -er을 붙인 heavier예요."},
    {"t":"cloze","s":"I was ___ TV at 9 last night.","a":"watching","d":["watch","watched","watches","to watch"],"e":"과거에 하고 있던 일은 was + -ing(과거진행형)로 나타내요."},
    {"t":"cloze","s":"Let's ___ soccer after school.","a":"play","d":["plays","playing","played","to play"],"e":"Let's 뒤에는 동사원형이 와요."},
    {"t":"word","w":"history","p":"n","m":"역사"},
    {"t":"word","w":"subject","p":"n","m":"과목"},
    {"t":"word","w":"festival","p":"n","m":"축제"},
    {"t":"word","w":"worry","p":"v","m":"걱정하다"},
    {"t":"word","w":"lose","p":"v","m":"잃어버리다"},
    {"t":"word","w":"polite","p":"a","m":"예의 바른"},
    {"t":"cloze","s":"I ___ my bag at school yesterday.","a":"left","d":["leave","leaves","leaving","will leave"],"e":"yesterday는 과거이므로 leave의 과거형 left를 써요."},
    {"t":"cloze","s":"Why are you happy? ___ I got a present.","a":"Because","d":["So","But","And","Or"],"e":"Why로 물으면 Because로 이유를 대답해요."},
    {"t":"cloze","s":"I have ___ friends in my class.","a":"many","d":["much","a","an","every"],"e":"셀 수 있는 명사의 복수형 앞에는 many를 써요."},
    {"t":"cloze","s":"What ___ you do last weekend?","a":"did","d":["do","does","are","were"],"e":"과거의 일을 물을 때는 did를 써요."}
  ],
  more: {"s1":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"milk","p":"n","m":"우유"},{"w":"banana","p":"n","m":"바나나"},{"w":"sit","p":"v","m":"앉다"},{"w":"tree","p":"n","m":"나무"},{"w":"monkey","p":"n","m":"원숭이"},{"w":"black","p":"a","m":"검은"},{"w":"window","p":"n","m":"창문"},{"w":"eraser","p":"n","m":"지우개"},{"w":"kitchen","p":"n","m":"부엌"},{"w":"swim","p":"v","m":"수영하다"},{"w":"tired","p":"a","m":"피곤한"},{"w":"healthy","p":"a","m":"건강한"},{"w":"honest","p":"a","m":"정직한"},{"w":"decide","p":"v","m":"결정하다"},{"w":"exciting","p":"a","m":"신나는"},{"w":"disappear","p":"v","m":"사라지다"},{"w":"responsible","p":"a","m":"책임감 있는"},{"w":"gradually","p":"ad","m":"점차"},{"w":"assess","p":"v","m":"평가하다"},{"w":"contribute","p":"v","m":"기여하다"},{"w":"emphasize","p":"v","m":"강조하다"},{"w":"implement","p":"v","m":"실행하다"},{"w":"motivate","p":"v","m":"동기를 부여하다"},{"w":"retain","p":"v","m":"보유하다"},{"w":"benevolent","p":"a","m":"자비로운"},{"w":"identical","p":"a","m":"동일한"},{"w":"alter","p":"v","m":"바꾸다"},{"w":"contaminate","p":"v","m":"오염시키다"},{"w":"eliminate","p":"v","m":"제거하다"},{"w":"illuminate","p":"v","m":"조명하다"},{"w":"migrate","p":"v","m":"이주하다"},{"w":"resolve","p":"v","m":"해결하다"},{"w":"authentic","p":"a","m":"진짜의"},{"w":"fundamental","p":"a","m":"근본적인"},{"w":"affect","p":"v","m":"영향을 미치다"},{"w":"conform","p":"v","m":"순응하다"},{"w":"dominate","p":"v","m":"지배하다"},{"w":"hesitate","p":"v","m":"망설이다"},{"w":"maximize","p":"v","m":"극대화하다"}],"expr":[]},"s2":{"word":[{"w":"cow","p":"n","m":"소"},{"w":"bag","p":"n","m":"가방"},{"w":"bed","p":"n","m":"침대"},{"w":"two","p":"n","m":"둘"},{"w":"bread","p":"n","m":"빵"},{"w":"four","p":"n","m":"넷"},{"w":"stand","p":"v","m":"서다"},{"w":"brother","p":"n","m":"남자 형제"},{"w":"snow","p":"n","m":"눈"},{"w":"hot","p":"a","m":"더운"},{"w":"elephant","p":"n","m":"코끼리"},{"w":"foot","p":"n","m":"발"},{"w":"long","p":"a","m":"긴"},{"w":"sleep","p":"v","m":"자다"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"grandfather","p":"n","m":"할아버지"},{"w":"sock","p":"n","m":"양말"},{"w":"strong","p":"a","m":"힘센"},{"w":"sometimes","p":"ad","m":"가끔"},{"w":"dinner","p":"n","m":"저녁 식사"},{"w":"wear","p":"v","m":"입다"},{"w":"subway","p":"n","m":"지하철"},{"w":"solve","p":"v","m":"해결하다"},{"w":"habit","p":"n","m":"습관"},{"w":"disappear","p":"v","m":"사라지다"},{"w":"nervous","p":"a","m":"긴장한"},{"w":"prepare","p":"v","m":"준비하다"},{"w":"explain","p":"v","m":"설명하다"},{"w":"neighbor","p":"n","m":"이웃"},{"w":"participate","p":"v","m":"참가하다"},{"w":"achieve","p":"v","m":"이루다"},{"w":"harmful","p":"a","m":"해로운"},{"w":"independent","p":"a","m":"독립적인"},{"w":"suggest","p":"v","m":"제안하다"},{"w":"rarely","p":"ad","m":"좀처럼 ~않는"},{"w":"obsolete","p":"a","m":"구식의"},{"w":"scarce","p":"a","m":"부족한"},{"w":"temporary","p":"a","m":"일시적인"},{"w":"circumstance","p":"n","m":"상황"},{"w":"notion","p":"n","m":"개념"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]}}
};
