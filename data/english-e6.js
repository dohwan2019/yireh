/*
 * 이레 영어 · 초6 문제 파일
 * s1 = 1학기, s2 = 2학기. 새 문제는 해당 학기 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  s1: [
    {"t":"word","w":"environment","p":"n","m":"환경"},
    {"t":"word","w":"future","p":"n","m":"미래"},
    {"t":"word","w":"invent","p":"v","m":"발명하다"},
    {"t":"word","w":"protect","p":"v","m":"보호하다"},
    {"t":"word","w":"healthy","p":"a","m":"건강한"},
    {"t":"word","w":"famous","p":"a","m":"유명한"},
    {"t":"cloze","s":"This is the ___ building in our city.","a":"tallest","d":["taller","tall","most tall","more tall"],"e":"the + 최상급: ‘가장 ~한’"},
    {"t":"cloze","s":"How ___ is this bag? It's 10 dollars.","a":"much","d":["many","old","long","tall"],"e":"가격을 물을 때는 How much를 써요."},
    {"t":"cloze","s":"I want ___ a doctor.","a":"to be","d":["be","being","am","is"],"e":"want 뒤에는 to부정사가 와요."},
    {"t":"cloze","s":"He ___ his homework already.","a":"has finished","d":["finish","finishing","have finished","finishes"],"e":"already(이미)와 함께 현재완료 has finished를 써요. 주어가 he라서 has예요."},
    {"t":"word","w":"planet","p":"n","m":"행성"},
    {"t":"word","w":"pollution","p":"n","m":"오염"},
    {"t":"word","w":"discover","p":"v","m":"발견하다"},
    {"t":"word","w":"exercise","p":"v","m":"운동하다"},
    {"t":"word","w":"honest","p":"a","m":"정직한"},
    {"t":"word","w":"brave","p":"a","m":"용감한"},
    {"t":"cloze","s":"This book is ___ interesting than that one.","a":"more","d":["most","very","many","so"],"e":"긴 형용사의 비교급은 more + 형용사 + than으로 나타내요."},
    {"t":"cloze","s":"If it rains tomorrow, I ___ stay home.","a":"will","d":["am","did","was","does"],"e":"미래의 일은 will + 동사원형으로 나타내요."},
    {"t":"cloze","s":"He ___ the race yesterday.","a":"won","d":["win","wins","winning","will win"],"e":"yesterday(어제)가 있으므로 과거형 won을 써요."},
    {"t":"cloze","s":"I enjoy ___ books.","a":"reading","d":["read","reads","to read","readed"],"e":"enjoy 뒤에는 동사-ing를 써요."}
  ],
  s2: [
    {"t":"word","w":"recycle","p":"v","m":"재활용하다"},
    {"t":"word","w":"scientist","p":"n","m":"과학자"},
    {"t":"word","w":"solve","p":"v","m":"해결하다"},
    {"t":"word","w":"dream","p":"n","m":"꿈"},
    {"t":"word","w":"careful","p":"a","m":"조심하는"},
    {"t":"cloze","s":"I'm going ___ visit my uncle.","a":"to","d":["for","at","in","on"],"e":"be going to + 동사원형: ‘~할 예정이다’"},
    {"t":"cloze","s":"You ___ not run in the hallway.","a":"must","d":["am","does","is","has"],"e":"must not + 동사원형: ‘~해서는 안 된다’"},
    {"t":"cloze","s":"Which is ___, a bus or a bike?","a":"faster","d":["fast","fastest","more fast","most fast"],"e":"둘 중 어느 것이 더 ~한지 물을 때는 비교급을 써요."},
    {"t":"cloze","s":"I have ___ seen a whale.","a":"never","d":["ever","yet","no","none"],"e":"have never + 과거분사: ‘한 번도 ~한 적이 없다’"},
    {"t":"cloze","s":"She ___ to Busan last year.","a":"moved","d":["moves","move","moving","will move"],"e":"last year(작년)가 있으므로 과거형 moved예요."},
    {"t":"word","w":"habit","p":"n","m":"습관"},
    {"t":"word","w":"chance","p":"n","m":"기회"},
    {"t":"word","w":"reduce","p":"v","m":"줄이다"},
    {"t":"word","w":"disappear","p":"v","m":"사라지다"},
    {"t":"word","w":"curious","p":"a","m":"호기심 많은"},
    {"t":"word","w":"wise","p":"a","m":"현명한"},
    {"t":"cloze","s":"My sister ___ this picture last year.","a":"painted","d":["paint","paints","painting","will paint"],"e":"last year(작년)가 있으므로 과거형 painted를 써요."},
    {"t":"cloze","s":"I don't know ___ to swim.","a":"how","d":["what","who","which","whose"],"e":"\"~하는 방법\"은 how to + 동사원형으로 나타내요."},
    {"t":"cloze","s":"We need ___ water.","a":"to save","d":["save","saves","saved","to saving"],"e":"need 뒤에는 to + 동사원형이 와요."},
    {"t":"cloze","s":"You look tired. ___ don't you take a rest?","a":"Why","d":["What","How","Who","Where"],"e":"\"~하는 게 어때?\"라고 제안할 때 Why don't you ~?를 써요."}
  ],
  more: {"s1":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"milk","p":"n","m":"우유"},{"w":"banana","p":"n","m":"바나나"},{"w":"sit","p":"v","m":"앉다"},{"w":"tree","p":"n","m":"나무"},{"w":"monkey","p":"n","m":"원숭이"},{"w":"black","p":"a","m":"검은"},{"w":"window","p":"n","m":"창문"},{"w":"eraser","p":"n","m":"지우개"},{"w":"kitchen","p":"n","m":"부엌"},{"w":"swim","p":"v","m":"수영하다"},{"w":"tired","p":"a","m":"피곤한"},{"w":"borrow","p":"v","m":"빌리다"},{"w":"excited","p":"a","m":"신이 난"},{"w":"decide","p":"v","m":"결정하다"},{"w":"exciting","p":"a","m":"신나는"},{"w":"disappear","p":"v","m":"사라지다"},{"w":"responsible","p":"a","m":"책임감 있는"},{"w":"gradually","p":"ad","m":"점차"},{"w":"assess","p":"v","m":"평가하다"},{"w":"contribute","p":"v","m":"기여하다"},{"w":"emphasize","p":"v","m":"강조하다"},{"w":"implement","p":"v","m":"실행하다"},{"w":"motivate","p":"v","m":"동기를 부여하다"},{"w":"retain","p":"v","m":"보유하다"},{"w":"benevolent","p":"a","m":"자비로운"},{"w":"identical","p":"a","m":"동일한"},{"w":"alter","p":"v","m":"바꾸다"},{"w":"contaminate","p":"v","m":"오염시키다"},{"w":"eliminate","p":"v","m":"제거하다"},{"w":"illuminate","p":"v","m":"조명하다"},{"w":"migrate","p":"v","m":"이주하다"},{"w":"resolve","p":"v","m":"해결하다"},{"w":"authentic","p":"a","m":"진짜의"},{"w":"fundamental","p":"a","m":"근본적인"},{"w":"affect","p":"v","m":"영향을 미치다"},{"w":"conform","p":"v","m":"순응하다"},{"w":"dominate","p":"v","m":"지배하다"},{"w":"hesitate","p":"v","m":"망설이다"},{"w":"maximize","p":"v","m":"극대화하다"}],"expr":[]},"s2":{"word":[{"w":"cow","p":"n","m":"소"},{"w":"bag","p":"n","m":"가방"},{"w":"bed","p":"n","m":"침대"},{"w":"two","p":"n","m":"둘"},{"w":"bread","p":"n","m":"빵"},{"w":"four","p":"n","m":"넷"},{"w":"stand","p":"v","m":"서다"},{"w":"brother","p":"n","m":"남자 형제"},{"w":"snow","p":"n","m":"눈"},{"w":"hot","p":"a","m":"더운"},{"w":"elephant","p":"n","m":"코끼리"},{"w":"foot","p":"n","m":"발"},{"w":"long","p":"a","m":"긴"},{"w":"sleep","p":"v","m":"자다"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"grandfather","p":"n","m":"할아버지"},{"w":"sock","p":"n","m":"양말"},{"w":"strong","p":"a","m":"힘센"},{"w":"sometimes","p":"ad","m":"가끔"},{"w":"dinner","p":"n","m":"저녁 식사"},{"w":"wear","p":"v","m":"입다"},{"w":"subway","p":"n","m":"지하철"},{"w":"practice","p":"v","m":"연습하다"},{"w":"history","p":"n","m":"역사"},{"w":"worry","p":"v","m":"걱정하다"},{"w":"nervous","p":"a","m":"긴장한"},{"w":"prepare","p":"v","m":"준비하다"},{"w":"explain","p":"v","m":"설명하다"},{"w":"neighbor","p":"n","m":"이웃"},{"w":"participate","p":"v","m":"참가하다"},{"w":"achieve","p":"v","m":"이루다"},{"w":"harmful","p":"a","m":"해로운"},{"w":"independent","p":"a","m":"독립적인"},{"w":"suggest","p":"v","m":"제안하다"},{"w":"rarely","p":"ad","m":"좀처럼 ~않는"},{"w":"obsolete","p":"a","m":"구식의"},{"w":"scarce","p":"a","m":"부족한"},{"w":"temporary","p":"a","m":"일시적인"},{"w":"circumstance","p":"n","m":"상황"},{"w":"notion","p":"n","m":"개념"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]}}
};
