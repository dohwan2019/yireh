/*
 * 이레 영어 · 초4 문제 파일
 * general = 문제 목록. 새 문제는 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
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
    {"t":"word","w":"breakfast","p":"n","m":"아침 식사"},
    {"t":"word","w":"ride","p":"v","m":"타다"},
    {"t":"word","w":"sometimes","p":"ad","m":"가끔"},
    {"t":"word","w":"near","p":"a","m":"가까운"},
    {"t":"word","w":"climb","p":"v","m":"오르다"},
    {"t":"cloze","s":"She doesn't ___ milk.","a":"like","d":["likes","liked","liking","to like"],"e":"doesn't 뒤에는 동사원형이 와요."},
    {"t":"cloze","s":"Where ___ you from?","a":"are","d":["is","am","do","does"],"e":"주어가 you일 때 be동사는 are예요."},
    {"t":"cloze","s":"I am ___ a book now.","a":"reading","d":["read","reads","to read","readed"],"e":"지금 하고 있는 일은 am + -ing로 나타내요."},
    {"t":"cloze","s":"It is ___ today.","a":"sunny","d":["sun","suns","sunning","sunned"],"e":"날씨를 나타내는 형용사 sunny(화창한)를 써요."},
    {"t":"cloze","s":"He ___ up at seven every day.","a":"gets","d":["get","getting","to get","be get"],"e":"주어가 he이고 매일 하는 일이므로 gets예요."}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"borrow","p":"v","m":"빌리다"},{"w":"environment","p":"n","m":"환경"},{"w":"scientist","p":"n","m":"과학자"},{"w":"advice","p":"n","m":"조언"},{"w":"simple","p":"a","m":"간단한"},{"w":"necessary","p":"a","m":"필요한"},{"w":"prefer","p":"v","m":"선호하다"},{"w":"accompany","p":"v","m":"동반하다"},{"w":"conceal","p":"v","m":"숨기다"},{"w":"donate","p":"v","m":"기부하다"},{"w":"implement","p":"v","m":"실행하다"},{"w":"occupy","p":"v","m":"차지하다"},{"w":"undermine","p":"v","m":"약화시키다"},{"w":"durable","p":"a","m":"내구성 있는"},{"w":"plausible","p":"a","m":"그럴듯한"},{"w":"bias","p":"n","m":"편견"},{"w":"sequence","p":"n","m":"순서"},{"w":"cite","p":"v","m":"인용하다"},{"w":"deprive","p":"v","m":"빼앗다"},{"w":"exploit","p":"v","m":"착취하다"},{"w":"manipulate","p":"v","m":"조작하다"},{"w":"resolve","p":"v","m":"해결하다"},{"w":"comprehensive","p":"a","m":"포괄적인"},{"w":"legitimate","p":"a","m":"합법적인"},{"w":"subtle","p":"a","m":"미묘한"},{"w":"obligation","p":"n","m":"의무"},{"w":"affect","p":"v","m":"영향을 미치다"},{"w":"contradict","p":"v","m":"모순되다"},{"w":"endure","p":"v","m":"견디다"},{"w":"inspire","p":"v","m":"영감을 주다"},{"w":"persuade","p":"v","m":"설득하다"},{"w":"accurate","p":"a","m":"정확한"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[],"expr":[]}}
};
