/*
 * 이레 영어 · 중3 문제 파일
 * general = 문제 목록. 새 문제는 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
    {"t":"word","w":"consider","p":"v","m":"고려하다"},
    {"t":"word","w":"responsible","p":"a","m":"책임감 있는"},
    {"t":"word","w":"influence","p":"n","m":"영향"},
    {"t":"word","w":"prefer","p":"v","m":"선호하다"},
    {"t":"cloze","s":"The boy ___ is singing is my brother.","a":"who","d":["which","what","whose","where"],"e":"사람 선행사 the boy를 받는 주격 관계대명사 who"},
    {"t":"cloze","s":"I wish I ___ fly.","a":"could","d":["can","will","may","shall"],"e":"I wish + 가정법 과거: 이룰 수 없는 소망은 과거형 could를 써요."},
    {"t":"cloze","s":"It is hard ___ me to wake up early.","a":"for","d":["of","to","with","by"],"e":"to부정사의 의미상 주어는 보통 for + 목적격이에요."},
    {"t":"cloze","s":"He has lived here ___ 2020.","a":"since","d":["for","during","at","in"],"e":"현재완료와 함께 시작 시점을 나타낼 때는 since"},
    {"t":"cloze","s":"This is the house ___ I was born.","a":"where","d":["which","what","who","whose"],"e":"장소 선행사 뒤에 완전한 문장이 오므로 관계부사 where"},
    {"t":"cloze","s":"Having ___ lunch, I went out.","a":"eaten","d":["eat","ate","eating","eats"],"e":"완료 분사구문 Having + 과거분사: 먼저 한 일을 나타내요."},
    {"t":"word","w":"survive","p":"v","m":"살아남다"},
    {"t":"word","w":"independent","p":"a","m":"독립적인"},
    {"t":"word","w":"evidence","p":"n","m":"증거"},
    {"t":"word","w":"admire","p":"v","m":"존경하다"},
    {"t":"word","w":"suggest","p":"v","m":"제안하다"},
    {"t":"cloze","s":"If I ___ you, I would study harder.","a":"were","d":["am","be","will be","have been"],"e":"가정법 과거에서 be동사는 주어와 관계없이 were를 써요."},
    {"t":"cloze","s":"The book ___ cover is red is mine.","a":"whose","d":["which","who","that","what"],"e":"뒤의 cover와 소유 관계이므로 whose예요."},
    {"t":"cloze","s":"I don't know ___ he will come or not.","a":"whether","d":["what","which","who","that"],"e":"‘~인지 아닌지’는 whether ~ or not이에요."},
    {"t":"cloze","s":"She made me ___ the dishes.","a":"wash","d":["to wash","washing","washed","washes"],"e":"사역동사 make + 목적어 + 동사원형"},
    {"t":"cloze","s":"It was so hot ___ we went swimming.","a":"that","d":["which","what","as","than"],"e":"so + 형용사 + that: ‘너무 ~해서 …했다’"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"rainy","p":"a","m":"비가 오는"},{"w":"climb","p":"v","m":"오르다"},{"w":"shy","p":"a","m":"수줍은"},{"w":"invent","p":"v","m":"발명하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"improve","p":"v","m":"개선하다"},{"w":"opportunity","p":"n","m":"기회"},{"w":"effort","p":"n","m":"노력"},{"w":"cease","p":"v","m":"중단하다"},{"w":"depict","p":"v","m":"묘사하다"},{"w":"expand","p":"v","m":"확장하다"},{"w":"linger","p":"v","m":"오래 머무르다"},{"w":"reside","p":"v","m":"거주하다"},{"w":"benevolent","p":"a","m":"자비로운"},{"w":"intense","p":"a","m":"강렬한"},{"w":"subsequent","p":"a","m":"이후의"},{"w":"notion","p":"n","m":"개념"},{"w":"advocate","p":"v","m":"옹호하다"},{"w":"contaminate","p":"v","m":"오염시키다"},{"w":"encounter","p":"v","m":"마주치다"},{"w":"inhibit","p":"v","m":"억제하다"},{"w":"persist","p":"v","m":"지속하다"},{"w":"abundant","p":"a","m":"풍부한"},{"w":"extinct","p":"a","m":"멸종된"},{"w":"remarkable","p":"a","m":"주목할 만한"},{"w":"consequence","p":"n","m":"결과"},{"w":"nevertheless","p":"ad","m":"그럼에도 불구하고"},{"w":"compensate","p":"v","m":"보상하다"},{"w":"devote","p":"v","m":"헌신하다"},{"w":"hesitate","p":"v","m":"망설이다"},{"w":"minimize","p":"v","m":"최소화하다"},{"w":"stimulate","p":"v","m":"자극하다"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[],"expr":[]}}
};
