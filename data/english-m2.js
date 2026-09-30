/*
 * 이레 영어 · 중2 문제 파일
 * general = 문제 목록. 새 문제는 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
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
    {"t":"word","w":"disappointed","p":"a","m":"실망한"},
    {"t":"word","w":"necessary","p":"a","m":"필요한"},
    {"t":"word","w":"participate","p":"v","m":"참가하다"},
    {"t":"word","w":"effort","p":"n","m":"노력"},
    {"t":"word","w":"prevent","p":"v","m":"예방하다"},
    {"t":"cloze","s":"This book is ___ than that one.","a":"more interesting","d":["interestinger","most interesting","interesting","much interesting"],"e":"긴 형용사의 비교급은 more를 앞에 붙여요."},
    {"t":"cloze","s":"I have lived here ___ five years.","a":"for","d":["since","during","at","in"],"e":"현재완료와 함께 기간을 나타낼 때는 for를 써요."},
    {"t":"cloze","s":"He asked me ___ the door.","a":"to open","d":["open","opening","opened","opens"],"e":"ask + 목적어 + to부정사: ‘~에게 …해 달라고 부탁하다’"},
    {"t":"cloze","s":"This song ___ by many people.","a":"is loved","d":["loves","loving","is loving","love"],"e":"노래가 ‘사랑받는’ 것이므로 수동태 is loved예요."},
    {"t":"cloze","s":"It's too cold ___ swim.","a":"to","d":["for","that","so","and"],"e":"too + 형용사 + to부정사: ‘너무 ~해서 …할 수 없다’"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"rainy","p":"a","m":"비가 오는"},{"w":"climb","p":"v","m":"오르다"},{"w":"shy","p":"a","m":"수줍은"},{"w":"invent","p":"v","m":"발명하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"improve","p":"v","m":"개선하다"},{"w":"responsible","p":"a","m":"책임감 있는"},{"w":"suggest","p":"v","m":"제안하다"},{"w":"collapse","p":"v","m":"붕괴하다"},{"w":"detect","p":"v","m":"감지하다"},{"w":"frustrate","p":"v","m":"좌절시키다"},{"w":"mediate","p":"v","m":"중재하다"},{"w":"retain","p":"v","m":"보유하다"},{"w":"consistent","p":"a","m":"일관된"},{"w":"monotonous","p":"a","m":"단조로운"},{"w":"temporary","p":"a","m":"일시적인"},{"w":"phenomenon","p":"n","m":"현상"},{"w":"alter","p":"v","m":"바꾸다"},{"w":"convey","p":"v","m":"전달하다"},{"w":"ensure","p":"v","m":"보장하다"},{"w":"interpret","p":"v","m":"해석하다"},{"w":"prohibit","p":"v","m":"금지하다"},{"w":"adjacent","p":"a","m":"인접한"},{"w":"fundamental","p":"a","m":"근본적인"},{"w":"skeptical","p":"a","m":"회의적인"},{"w":"deficiency","p":"n","m":"결핍"},{"w":"accommodate","p":"v","m":"수용하다"},{"w":"compromise","p":"v","m":"타협하다"},{"w":"dominate","p":"v","m":"지배하다"},{"w":"imitate","p":"v","m":"모방하다"},{"w":"nurture","p":"v","m":"양육하다"},{"w":"undergo","p":"v","m":"겪다"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[],"expr":[]}}
};
