/*
 * 이레 영어 · 초6 문제 파일
 * general = 일반 과정, bible = 성경 과정. 새 문제는 각 목록의 끝에 추가하세요.
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
  bible: [
    {"t":"word","w":"parable","p":"n","m":"비유"},
    {"t":"word","w":"resurrection","p":"n","m":"부활"},
    {"t":"word","w":"commandment","p":"n","m":"계명"},
    {"t":"word","w":"glory","p":"n","m":"영광"},
    {"t":"cloze","s":"For nothing spoken by God is ___.","a":"impossible","d":["possible","important","difficult","simple"],"ko":"하나님이 하신 말씀은 하나도 불가능한 것이 없다.","r":"누가복음 1:37"},
    {"t":"cloze","s":"A new commandment I give to you, that you ___ one another.","a":"love","d":["forget","blame","leave","hide"],"ko":"새 계명을 너희에게 준다. 서로 사랑하라.","r":"요한복음 13:34"},
    {"t":"cloze","s":"Children, obey your parents in all things, for this ___ the Lord.","a":"pleases","d":["please","pleased","pleasing","pleasure"],"e":"주어 this가 3인칭 단수라서 pleases예요.","ko":"자녀들아, 모든 일에 부모에게 순종하라. 이것이 주님을 기쁘시게 한다.","r":"골로새서 3:20"},
    {"t":"cloze","s":"Allow the little ___, and don't forbid them to come to me.","a":"children","d":["child","childs","childish","childhood"],"e":"child의 복수형은 children이에요.","ko":"어린아이들이 내게 오는 것을 막지 말고 허락하라.","r":"마태복음 19:14"},
    {"t":"cloze","s":"casting all your worries on him, because he ___ for you.","a":"cares","d":["care","caring","to care","careful"],"e":"주어 he가 3인칭 단수라서 cares예요.","ko":"너희 염려를 다 주께 맡기라. 그가 너희를 돌보신다.","r":"베드로전서 5:7"},
    {"t":"cloze","s":"I am fearfully and ___ made.","a":"wonderfully","d":["wonderful","wonder","wondered","wonders"],"e":"과거분사 made를 꾸미므로 부사 wonderfully예요.","ko":"나는 놀랍고 신기하게 지음 받았다.","r":"시편 139:14"},
    {"t":"word","w":"kingdom","p":"n","m":"나라"},
    {"t":"word","w":"eternal","p":"a","m":"영원한"},
    {"t":"word","w":"humble","p":"a","m":"겸손한"},
    {"t":"word","w":"blessing","p":"n","m":"복"},
    {"t":"word","w":"grace","p":"n","m":"은혜"},
    {"t":"word","w":"righteous","p":"a","m":"의로운"},
    {"t":"cloze","s":"the free ___ of God is eternal life in Christ Jesus our Lord.","a":"gift","d":["price","word","law","name"],"ko":"하나님의 선물은 우리 주 그리스도 예수 안에 있는 영원한 생명이다.","r":"로마서 6:23"},
    {"t":"cloze","s":"I am the ___ and the life.","a":"resurrection","d":["beginning","door","vine","light"],"ko":"나는 부활이요 생명이다.","r":"요한복음 11:25"},
    {"t":"cloze","s":"Praise Yahweh, my soul, and don't ___ all his benefits;","a":"forget","d":["forgets","forgot","forgetting","forgotten"],"e":"don't 뒤에는 동사원형이 와요.","ko":"내 영혼아, 여호와를 찬양하고 그의 모든 은혜를 잊지 마라.","r":"시편 103:2"},
    {"t":"cloze","s":"As you would like people to do to you, do exactly so to ___.","a":"them","d":["they","their","theirs","themselves"],"e":"전치사 to 뒤에는 목적격 them이 와요.","ko":"남에게 대접받고 싶은 대로 너희도 그렇게 하라.","r":"누가복음 6:31"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"rainy","p":"a","m":"비가 오는"},{"w":"climb","p":"v","m":"오르다"},{"w":"shy","p":"a","m":"수줍은"},{"w":"ancient","p":"a","m":"고대의"},{"w":"prepare","p":"v","m":"준비하다"},{"w":"disappointed","p":"a","m":"실망한"},{"w":"influence","p":"n","m":"영향"},{"w":"abandon","p":"v","m":"포기하다, 버리다"},{"w":"compile","p":"v","m":"편찬하다"},{"w":"disguise","p":"v","m":"위장하다"},{"w":"ignore","p":"v","m":"무시하다"},{"w":"motivate","p":"v","m":"동기를 부여하다"},{"w":"substitute","p":"v","m":"대체하다"},{"w":"deliberate","p":"a","m":"의도적인"},{"w":"obsolete","p":"a","m":"구식의"},{"w":"vivid","p":"a","m":"생생한"},{"w":"prospect","p":"n","m":"전망"},{"w":"assume","p":"v","m":"가정하다"},{"w":"demonstrate","p":"v","m":"입증하다"},{"w":"exceed","p":"v","m":"초과하다"},{"w":"justify","p":"v","m":"정당화하다"},{"w":"reconcile","p":"v","m":"화해시키다"},{"w":"authentic","p":"a","m":"진짜의"},{"w":"inevitable","p":"a","m":"불가피한"},{"w":"spontaneous","p":"a","m":"자발적인"},{"w":"incentive","p":"n","m":"유인책"},{"w":"acquire","p":"v","m":"습득하다"},{"w":"conform","p":"v","m":"순응하다"},{"w":"emerge","p":"v","m":"나타나다"},{"w":"impose","p":"v","m":"부과하다"},{"w":"overcome","p":"v","m":"극복하다"},{"w":"vary","p":"v","m":"달라지다"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[{"w":"God","p":"n","m":"하나님"},{"w":"pray","p":"v","m":"기도하다"},{"w":"angel","p":"n","m":"천사"},{"w":"ark","p":"n","m":"방주"},{"w":"fish","p":"n","m":"물고기"},{"w":"garden","p":"n","m":"동산"},{"w":"rock","p":"n","m":"바위"},{"w":"world","p":"n","m":"세상"},{"w":"thank","p":"v","m":"감사하다"},{"w":"cross","p":"n","m":"십자가"},{"w":"help","p":"v","m":"돕다"},{"w":"good","p":"a","m":"선한"},{"w":"Christmas","p":"n","m":"성탄절"},{"w":"friend","p":"n","m":"친구"},{"w":"believe","p":"v","m":"믿다"},{"w":"brave","p":"a","m":"용감한"},{"w":"sin","p":"n","m":"죄"},{"w":"forgive","p":"v","m":"용서하다"},{"w":"promise","p":"n","m":"약속"},{"w":"crowd","p":"n","m":"군중"},{"w":"thankful","p":"a","m":"감사하는"},{"w":"temple","p":"n","m":"성전"},{"w":"servant","p":"n","m":"종"},{"w":"honest","p":"a","m":"정직한"},{"w":"pure","p":"a","m":"깨끗한"},{"w":"wisdom","p":"n","m":"지혜"},{"w":"creation","p":"n","m":"창조"},{"w":"temptation","p":"n","m":"유혹"},{"w":"kindness","p":"n","m":"친절"},{"w":"patience","p":"n","m":"인내"},{"w":"humility","p":"n","m":"겸손"},{"w":"thanksgiving","p":"n","m":"감사"},{"w":"redemption","p":"n","m":"속량"},{"w":"justification","p":"n","m":"칭의"},{"w":"reconciliation","p":"n","m":"화해"},{"w":"hope","p":"n","m":"소망"},{"w":"parable","p":"n","m":"비유"},{"w":"kingdom","p":"n","m":"나라"},{"w":"repent","p":"v","m":"회개하다"},{"w":"rejoice","p":"v","m":"기뻐하다"}],"expr":[{"w":"the salt of the earth","m":"믿음직하고 훌륭한 사람"},{"w":"turn the other cheek","m":"보복하지 않고 참다"},{"w":"by the skin of one's teeth","m":"간신히"},{"w":"the powers that be","m":"권력을 쥔 사람들"},{"w":"see eye to eye","m":"의견이 일치하다"},{"w":"wash one's hands of","m":"~에서 손을 떼다"},{"w":"reap what you sow","m":"뿌린 대로 거두다"},{"w":"the eleventh hour","m":"마지막 순간"},{"w":"fight the good fight","m":"옳은 일을 위해 끝까지 애쓰다"},{"w":"my brother's keeper","m":"남을 돌볼 책임이 있는 사람"},{"w":"a good Samaritan","m":"어려운 사람을 돕는 친절한 사람"},{"w":"the writing on the wall","m":"불길한 징조"},{"w":"the blind leading the blind","m":"모르는 사람이 모르는 사람을 이끄는 상황"},{"w":"fall from grace","m":"신임을 잃다"},{"w":"the apple of one's eye","m":"매우 소중한 사람"},{"w":"the prodigal son","m":"뉘우치고 돌아온 사람"},{"w":"put your house in order","m":"신변을 정리하다"},{"w":"nothing new under the sun","m":"세상에 새로운 것은 없다"},{"w":"feet of clay","m":"겉보기와 달리 숨겨진 약점"},{"w":"a leopard can't change its spots","m":"타고난 본성은 바뀌지 않는다"},{"w":"go the extra mile","m":"기대 이상으로 애쓰다"},{"w":"a drop in the bucket","m":"아주 적은 양"},{"w":"a wolf in sheep's clothing","m":"양의 탈을 쓴 위선자"},{"w":"a labor of love","m":"좋아서 하는 수고"},{"w":"cast the first stone","m":"앞장서서 남을 비난하다"},{"w":"a house divided","m":"분열된 집단"},{"w":"a thorn in the flesh","m":"계속 괴롭히는 골칫거리"},{"w":"a land of milk and honey","m":"풍요로운 땅"},{"w":"the straight and narrow","m":"바르고 정직한 삶"}]}}
};
