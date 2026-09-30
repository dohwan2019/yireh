/*
 * 이레 영어 · 초3 문제 파일
 * general = 문제 목록. 새 문제는 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
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
    {"t":"word","w":"dance","p":"v","m":"춤추다"},
    {"t":"word","w":"cook","p":"v","m":"요리하다"},
    {"t":"word","w":"grandmother","p":"n","m":"할머니"},
    {"t":"word","w":"orange","p":"n","m":"오렌지"},
    {"t":"word","w":"umbrella","p":"n","m":"우산"},
    {"t":"cloze","s":"I ___ a dog.","a":"have","d":["has","having","am","is"],"e":"주어가 I일 때는 have를 써요."},
    {"t":"cloze","s":"He ___ my friend.","a":"is","d":["am","are","be","do"],"e":"주어가 he일 때 be동사는 is예요."},
    {"t":"cloze","s":"___ is your name?","a":"What","d":["Who","Where","When","How"],"e":"이름을 물을 때는 What을 써요."},
    {"t":"cloze","s":"These are my ___.","a":"books","d":["book","a book","bookes","booking"],"e":"These are 뒤에는 복수 명사가 와요."},
    {"t":"cloze","s":"Can you swim? Yes, I ___.","a":"can","d":["do","am","is","are"],"e":"Can으로 물으면 can으로 대답해요."}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"library","p":"n","m":"도서관"},{"w":"sometimes","p":"ad","m":"가끔"},{"w":"borrow","p":"v","m":"빌리다"},{"w":"environment","p":"n","m":"환경"},{"w":"scientist","p":"n","m":"과학자"},{"w":"advice","p":"n","m":"조언"},{"w":"simple","p":"a","m":"간단한"},{"w":"necessary","p":"a","m":"필요한"},{"w":"prefer","p":"v","m":"선호하다"},{"w":"accompany","p":"v","m":"동반하다"},{"w":"conceal","p":"v","m":"숨기다"},{"w":"donate","p":"v","m":"기부하다"},{"w":"implement","p":"v","m":"실행하다"},{"w":"occupy","p":"v","m":"차지하다"},{"w":"undermine","p":"v","m":"약화시키다"},{"w":"durable","p":"a","m":"내구성 있는"},{"w":"plausible","p":"a","m":"그럴듯한"},{"w":"bias","p":"n","m":"편견"},{"w":"sequence","p":"n","m":"순서"},{"w":"cite","p":"v","m":"인용하다"},{"w":"deprive","p":"v","m":"빼앗다"},{"w":"exploit","p":"v","m":"착취하다"},{"w":"manipulate","p":"v","m":"조작하다"},{"w":"resolve","p":"v","m":"해결하다"},{"w":"comprehensive","p":"a","m":"포괄적인"},{"w":"legitimate","p":"a","m":"합법적인"},{"w":"subtle","p":"a","m":"미묘한"},{"w":"obligation","p":"n","m":"의무"},{"w":"affect","p":"v","m":"영향을 미치다"},{"w":"contradict","p":"v","m":"모순되다"},{"w":"endure","p":"v","m":"견디다"},{"w":"inspire","p":"v","m":"영감을 주다"},{"w":"persuade","p":"v","m":"설득하다"},{"w":"accurate","p":"a","m":"정확한"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[],"expr":[]}}
};
