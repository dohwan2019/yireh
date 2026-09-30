/*
 * 이레 영어 · 초6 문제 파일
 * general = 문제 목록. 새 문제는 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
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
    {"t":"word","w":"recycle","p":"v","m":"재활용하다"},
    {"t":"word","w":"scientist","p":"n","m":"과학자"},
    {"t":"word","w":"solve","p":"v","m":"해결하다"},
    {"t":"word","w":"dream","p":"n","m":"꿈"},
    {"t":"word","w":"careful","p":"a","m":"조심하는"},
    {"t":"cloze","s":"I'm going ___ visit my uncle.","a":"to","d":["for","at","in","on"],"e":"be going to + 동사원형: ‘~할 예정이다’"},
    {"t":"cloze","s":"You ___ not run in the hallway.","a":"must","d":["am","does","is","has"],"e":"must not + 동사원형: ‘~해서는 안 된다’"},
    {"t":"cloze","s":"Which is ___, a bus or a bike?","a":"faster","d":["fast","fastest","more fast","most fast"],"e":"둘 중 어느 것이 더 ~한지 물을 때는 비교급을 써요."},
    {"t":"cloze","s":"I have ___ seen a whale.","a":"never","d":["ever","yet","no","none"],"e":"have never + 과거분사: ‘한 번도 ~한 적이 없다’"},
    {"t":"cloze","s":"She ___ to Busan last year.","a":"moved","d":["moves","move","moving","will move"],"e":"last year(작년)가 있으므로 과거형 moved예요."}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"rainy","p":"a","m":"비가 오는"},{"w":"climb","p":"v","m":"오르다"},{"w":"shy","p":"a","m":"수줍은"},{"w":"ancient","p":"a","m":"고대의"},{"w":"prepare","p":"v","m":"준비하다"},{"w":"disappointed","p":"a","m":"실망한"},{"w":"influence","p":"n","m":"영향"},{"w":"abandon","p":"v","m":"포기하다, 버리다"},{"w":"compile","p":"v","m":"편찬하다"},{"w":"disguise","p":"v","m":"위장하다"},{"w":"ignore","p":"v","m":"무시하다"},{"w":"motivate","p":"v","m":"동기를 부여하다"},{"w":"substitute","p":"v","m":"대체하다"},{"w":"deliberate","p":"a","m":"의도적인"},{"w":"obsolete","p":"a","m":"구식의"},{"w":"vivid","p":"a","m":"생생한"},{"w":"prospect","p":"n","m":"전망"},{"w":"assume","p":"v","m":"가정하다"},{"w":"demonstrate","p":"v","m":"입증하다"},{"w":"exceed","p":"v","m":"초과하다"},{"w":"justify","p":"v","m":"정당화하다"},{"w":"reconcile","p":"v","m":"화해시키다"},{"w":"authentic","p":"a","m":"진짜의"},{"w":"inevitable","p":"a","m":"불가피한"},{"w":"spontaneous","p":"a","m":"자발적인"},{"w":"incentive","p":"n","m":"유인책"},{"w":"acquire","p":"v","m":"습득하다"},{"w":"conform","p":"v","m":"순응하다"},{"w":"emerge","p":"v","m":"나타나다"},{"w":"impose","p":"v","m":"부과하다"},{"w":"overcome","p":"v","m":"극복하다"},{"w":"vary","p":"v","m":"달라지다"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[],"expr":[]}}
};
