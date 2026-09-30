/*
 * 이레 영어 · 중1 문제 파일
 * general = 문제 목록. 새 문제는 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
    {"t":"word","w":"culture","p":"n","m":"문화"},
    {"t":"word","w":"experience","p":"n","m":"경험"},
    {"t":"word","w":"ancient","p":"a","m":"고대의"},
    {"t":"word","w":"advice","p":"n","m":"조언"},
    {"t":"word","w":"decide","p":"v","m":"결정하다"},
    {"t":"word","w":"improve","p":"v","m":"개선하다"},
    {"t":"cloze","s":"She ___ to school every morning.","a":"walks","d":["walk","walking","to walk","be walk"],"e":"3인칭 단수 주어의 현재형은 동사에 -s를 붙여요."},
    {"t":"cloze","s":"___ you like pizza?","a":"Do","d":["Are","Is","Does","Be"],"e":"주어가 you인 일반동사 의문문은 Do로 시작해요."},
    {"t":"cloze","s":"They ___ watching TV now.","a":"are","d":["is","am","do","be"],"e":"현재진행형은 be동사 + -ing. 주어 they에는 are를 써요."},
    {"t":"cloze","s":"I ___ busy yesterday.","a":"was","d":["am","is","are","be"],"e":"yesterday가 있으므로 과거형. 주어 I에는 was를 써요."},
    {"t":"word","w":"nervous","p":"a","m":"긴장한"},
    {"t":"word","w":"communicate","p":"v","m":"의사소통하다"},
    {"t":"word","w":"tradition","p":"n","m":"전통"},
    {"t":"word","w":"prepare","p":"v","m":"준비하다"},
    {"t":"word","w":"simple","p":"a","m":"간단한"},
    {"t":"cloze","s":"There ___ a lot of water in the bottle.","a":"is","d":["are","be","were","am"],"e":"water는 셀 수 없는 명사라서 단수 동사 is를 써요."},
    {"t":"cloze","s":"I ___ going to study tonight.","a":"am","d":["is","are","be","do"],"e":"be going to에서 주어 I에는 am을 써요."},
    {"t":"cloze","s":"He can speak English very ___.","a":"well","d":["good","better","best","goodly"],"e":"동사 speak를 꾸미는 부사 well이에요."},
    {"t":"cloze","s":"My sister ___ a letter now.","a":"is writing","d":["writes","write","wrote","writing"],"e":"now(지금)가 있으므로 현재진행형 is writing이에요."},
    {"t":"cloze","s":"How ___ apples do you have?","a":"many","d":["much","long","old","far"],"e":"셀 수 있는 명사의 개수는 How many로 물어요."}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"rainy","p":"a","m":"비가 오는"},{"w":"climb","p":"v","m":"오르다"},{"w":"shy","p":"a","m":"수줍은"},{"w":"invent","p":"v","m":"발명하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"disappointed","p":"a","m":"실망한"},{"w":"influence","p":"n","m":"영향"},{"w":"abandon","p":"v","m":"포기하다, 버리다"},{"w":"compile","p":"v","m":"편찬하다"},{"w":"disguise","p":"v","m":"위장하다"},{"w":"ignore","p":"v","m":"무시하다"},{"w":"motivate","p":"v","m":"동기를 부여하다"},{"w":"substitute","p":"v","m":"대체하다"},{"w":"deliberate","p":"a","m":"의도적인"},{"w":"obsolete","p":"a","m":"구식의"},{"w":"vivid","p":"a","m":"생생한"},{"w":"prospect","p":"n","m":"전망"},{"w":"assume","p":"v","m":"가정하다"},{"w":"demonstrate","p":"v","m":"입증하다"},{"w":"exceed","p":"v","m":"초과하다"},{"w":"justify","p":"v","m":"정당화하다"},{"w":"reconcile","p":"v","m":"화해시키다"},{"w":"authentic","p":"a","m":"진짜의"},{"w":"inevitable","p":"a","m":"불가피한"},{"w":"spontaneous","p":"a","m":"자발적인"},{"w":"incentive","p":"n","m":"유인책"},{"w":"acquire","p":"v","m":"습득하다"},{"w":"conform","p":"v","m":"순응하다"},{"w":"emerge","p":"v","m":"나타나다"},{"w":"impose","p":"v","m":"부과하다"},{"w":"overcome","p":"v","m":"극복하다"},{"w":"vary","p":"v","m":"달라지다"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[],"expr":[]}}
};
