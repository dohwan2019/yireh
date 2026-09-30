/*
 * 이레 영어 · 중3 문제 파일
 * s1 = 1학기, s2 = 2학기. 새 문제는 해당 학기 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  s1: [
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
    {"t":"word","w":"attitude","p":"n","m":"태도"},
    {"t":"word","w":"positive","p":"a","m":"긍정적인"},
    {"t":"word","w":"compare","p":"v","m":"비교하다"},
    {"t":"word","w":"gradually","p":"ad","m":"점차"},
    {"t":"word","w":"relationship","p":"n","m":"관계"},
    {"t":"cloze","s":"___ I want is a long vacation.","a":"What","d":["That","Which","Who","Whose"],"e":"선행사를 포함한 관계대명사 what(~하는 것)이 주어 역할을 해요."},
    {"t":"cloze","s":"The man ___ a red cap is my teacher.","a":"wearing","d":["wore","wears","worn","to wear"],"e":"능동·진행의 의미로 명사를 뒤에서 꾸밀 때는 현재분사(-ing)를 써요."},
    {"t":"cloze","s":"Do you know where ___?","a":"she lives","d":["does she live","lives she","she live","did she live"],"e":"간접의문문은 「의문사 + 주어 + 동사」 어순이에요."},
    {"t":"cloze","s":"I have been ___ for two hours.","a":"studying","d":["study","to study","studies","be studying"],"e":"현재완료진행형은 have been + -ing로 계속 진행 중인 일을 나타내요."},
    {"t":"cloze","s":"I remember the day ___ we first met.","a":"when","d":["where","which","who","what"],"e":"시간을 나타내는 선행사(the day) 뒤에는 관계부사 when을 써요."}
  ],
  s2: [
    {"t":"word","w":"survive","p":"v","m":"살아남다"},
    {"t":"word","w":"independent","p":"a","m":"독립적인"},
    {"t":"word","w":"evidence","p":"n","m":"증거"},
    {"t":"word","w":"admire","p":"v","m":"존경하다"},
    {"t":"word","w":"suggest","p":"v","m":"제안하다"},
    {"t":"cloze","s":"If I ___ you, I would study harder.","a":"were","d":["am","be","will be","have been"],"e":"가정법 과거에서 be동사는 주어와 관계없이 were를 써요."},
    {"t":"cloze","s":"The book ___ cover is red is mine.","a":"whose","d":["which","who","that","what"],"e":"뒤의 cover와 소유 관계이므로 whose예요."},
    {"t":"cloze","s":"I don't know ___ he will come or not.","a":"whether","d":["what","which","who","that"],"e":"‘~인지 아닌지’는 whether ~ or not이에요."},
    {"t":"cloze","s":"She made me ___ the dishes.","a":"wash","d":["to wash","washing","washed","washes"],"e":"사역동사 make + 목적어 + 동사원형"},
    {"t":"cloze","s":"It was so hot ___ we went swimming.","a":"that","d":["which","what","as","than"],"e":"so + 형용사 + that: ‘너무 ~해서 …했다’"},
    {"t":"word","w":"equality","p":"n","m":"평등"},
    {"t":"word","w":"reflect","p":"v","m":"반영하다"},
    {"t":"word","w":"rarely","p":"ad","m":"좀처럼 ~않는"},
    {"t":"word","w":"ancestor","p":"n","m":"조상"},
    {"t":"word","w":"efficient","p":"a","m":"효율적인"},
    {"t":"cloze","s":"If I ___ a lot of money, I would buy a big house.","a":"had","d":["have","has","will have","having"],"e":"가정법 과거: If + 주어 + 동사 과거형, 주어 + would + 동사원형."},
    {"t":"cloze","s":"When I arrived at the station, the train ___ already left.","a":"had","d":["has","have","was","is"],"e":"과거(arrived)보다 먼저 일어난 일은 과거완료(had + 과거분사)로 나타내요."},
    {"t":"cloze","s":"The box is too heavy ___ me to carry.","a":"for","d":["of","to","with","by"],"e":"too ~ to 구문에서 to부정사의 의미상 주어는 for + 목적격으로 나타내요."},
    {"t":"cloze","s":"___ tired, she went to bed early.","a":"Feeling","d":["Felt","Feel","Feels","To feel"],"e":"분사구문: 접속사와 주어를 생략하고 동사를 -ing로 바꿔요(= Because she felt tired)."},
    {"t":"cloze","s":"She was ___ tired that she fell asleep.","a":"so","d":["such","too","very","enough"],"e":"so + 형용사 + that ~: 너무 …해서 ~하다."}
  ],
  more: {"s1":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"milk","p":"n","m":"우유"},{"w":"banana","p":"n","m":"바나나"},{"w":"sit","p":"v","m":"앉다"},{"w":"tree","p":"n","m":"나무"},{"w":"monkey","p":"n","m":"원숭이"},{"w":"black","p":"a","m":"검은"},{"w":"window","p":"n","m":"창문"},{"w":"eraser","p":"n","m":"지우개"},{"w":"kitchen","p":"n","m":"부엌"},{"w":"swim","p":"v","m":"수영하다"},{"w":"tired","p":"a","m":"피곤한"},{"w":"borrow","p":"v","m":"빌리다"},{"w":"excited","p":"a","m":"신이 난"},{"w":"healthy","p":"a","m":"건강한"},{"w":"honest","p":"a","m":"정직한"},{"w":"decide","p":"v","m":"결정하다"},{"w":"exciting","p":"a","m":"신나는"},{"w":"disappear","p":"v","m":"사라지다"},{"w":"accompany","p":"v","m":"동반하다"},{"w":"compile","p":"v","m":"편찬하다"},{"w":"detect","p":"v","m":"감지하다"},{"w":"expand","p":"v","m":"확장하다"},{"w":"isolate","p":"v","m":"고립시키다"},{"w":"prevail","p":"v","m":"우세하다"},{"w":"withdraw","p":"v","m":"철회하다"},{"w":"durable","p":"a","m":"내구성 있는"},{"w":"accelerate","p":"v","m":"가속하다"},{"w":"commence","p":"v","m":"시작하다"},{"w":"deprive","p":"v","m":"빼앗다"},{"w":"exceed","p":"v","m":"초과하다"},{"w":"interpret","p":"v","m":"해석하다"},{"w":"persist","p":"v","m":"지속하다"},{"w":"utilize","p":"v","m":"활용하다"},{"w":"distinct","p":"a","m":"뚜렷한"},{"w":"mutual","p":"a","m":"상호의"},{"w":"coincide","p":"v","m":"동시에 일어나다"},{"w":"deny","p":"v","m":"부인하다"},{"w":"evolve","p":"v","m":"진화하다"},{"w":"inspire","p":"v","m":"영감을 주다"}],"expr":[]},"s2":{"word":[{"w":"cow","p":"n","m":"소"},{"w":"bag","p":"n","m":"가방"},{"w":"bed","p":"n","m":"침대"},{"w":"two","p":"n","m":"둘"},{"w":"bread","p":"n","m":"빵"},{"w":"four","p":"n","m":"넷"},{"w":"stand","p":"v","m":"서다"},{"w":"brother","p":"n","m":"남자 형제"},{"w":"snow","p":"n","m":"눈"},{"w":"hot","p":"a","m":"더운"},{"w":"elephant","p":"n","m":"코끼리"},{"w":"foot","p":"n","m":"발"},{"w":"long","p":"a","m":"긴"},{"w":"sleep","p":"v","m":"자다"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"grandfather","p":"n","m":"할아버지"},{"w":"sock","p":"n","m":"양말"},{"w":"strong","p":"a","m":"힘센"},{"w":"sometimes","p":"ad","m":"가끔"},{"w":"dinner","p":"n","m":"저녁 식사"},{"w":"wear","p":"v","m":"입다"},{"w":"subway","p":"n","m":"지하철"},{"w":"practice","p":"v","m":"연습하다"},{"w":"history","p":"n","m":"역사"},{"w":"worry","p":"v","m":"걱정하다"},{"w":"recycle","p":"v","m":"재활용하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"chance","p":"n","m":"기회"},{"w":"curious","p":"a","m":"호기심 많은"},{"w":"communicate","p":"v","m":"의사소통하다"},{"w":"simple","p":"a","m":"간단한"},{"w":"lazy","p":"a","m":"게으른"},{"w":"disappointed","p":"a","m":"실망한"},{"w":"effort","p":"n","m":"노력"},{"w":"patient","p":"a","m":"참을성 있는"},{"w":"complain","p":"v","m":"불평하다"},{"w":"reluctant","p":"a","m":"꺼리는"},{"w":"subsequent","p":"a","m":"이후의"},{"w":"bias","p":"n","m":"편견"},{"w":"hazard","p":"n","m":"위험 요소"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]}}
};
