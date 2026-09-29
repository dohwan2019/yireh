/*
 * 이레 영어 · 초4 문제 파일
 * general = 일반 과정, bible = 성경 과정. 새 문제는 각 목록의 끝에 추가하세요.
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
  bible: [
    {"t":"word","w":"miracle","p":"n","m":"기적"},
    {"t":"word","w":"prophet","p":"n","m":"선지자"},
    {"t":"word","w":"forgive","p":"v","m":"용서하다"},
    {"t":"word","w":"obey","p":"v","m":"순종하다"},
    {"t":"word","w":"holy","p":"a","m":"거룩한"},
    {"t":"word","w":"promise","p":"n","m":"약속"},
    {"t":"word","w":"rainbow","p":"n","m":"무지개"},
    {"t":"cloze","s":"Children, ___ your parents in the Lord, for this is right.","a":"obey","d":["sell","draw","wash","lose"],"ko":"자녀들아, 주 안에서 부모에게 순종하라. 이것이 옳다.","r":"에베소서 6:1"},
    {"t":"cloze","s":"A friend ___ at all times.","a":"loves","d":["love","loving","to love","lovely"],"e":"주어 a friend가 3인칭 단수라서 loves예요.","ko":"친구는 언제나 사랑한다.","r":"잠언 17:17"},
    {"t":"cloze","s":"Rejoice in the Lord ___!","a":"always","d":["today","alone","quickly","slowly"],"ko":"주 안에서 항상 기뻐하라.","r":"빌립보서 4:4"},
    {"t":"word","w":"disciple","p":"n","m":"제자"},
    {"t":"word","w":"crowd","p":"n","m":"군중"},
    {"t":"word","w":"wise","p":"a","m":"지혜로운"},
    {"t":"word","w":"foolish","p":"a","m":"어리석은"},
    {"t":"word","w":"thankful","p":"a","m":"감사하는"},
    {"t":"word","w":"heal","p":"v","m":"고치다"},
    {"t":"word","w":"lost","p":"a","m":"잃어버린"},
    {"t":"cloze","s":"Jesus increased in ___ and stature, and in favor with God and men.","a":"wisdom","d":["money","power","fame","size"],"ko":"예수님은 지혜와 키가 자라고 하나님과 사람에게 더욱 사랑받으셨다.","r":"누가복음 2:52"},
    {"t":"cloze","s":"whatever you desire for men to do to you, you shall also ___ to them","a":"do","d":["say","give","show","send"],"ko":"남에게 대접받고 싶은 대로 너희도 남을 대접하라.","r":"마태복음 7:12"},
    {"t":"cloze","s":"A ___ answer turns away wrath.","a":"gentle","d":["loud","quick","long","funny"],"ko":"부드러운 대답은 분노를 가라앉힌다.","r":"잠언 15:1"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"borrow","p":"v","m":"빌리다"},{"w":"environment","p":"n","m":"환경"},{"w":"scientist","p":"n","m":"과학자"},{"w":"advice","p":"n","m":"조언"},{"w":"simple","p":"a","m":"간단한"},{"w":"necessary","p":"a","m":"필요한"},{"w":"prefer","p":"v","m":"선호하다"},{"w":"accompany","p":"v","m":"동반하다"},{"w":"conceal","p":"v","m":"숨기다"},{"w":"donate","p":"v","m":"기부하다"},{"w":"implement","p":"v","m":"실행하다"},{"w":"occupy","p":"v","m":"차지하다"},{"w":"undermine","p":"v","m":"약화시키다"},{"w":"durable","p":"a","m":"내구성 있는"},{"w":"plausible","p":"a","m":"그럴듯한"},{"w":"bias","p":"n","m":"편견"},{"w":"sequence","p":"n","m":"순서"},{"w":"cite","p":"v","m":"인용하다"},{"w":"deprive","p":"v","m":"빼앗다"},{"w":"exploit","p":"v","m":"착취하다"},{"w":"manipulate","p":"v","m":"조작하다"},{"w":"resolve","p":"v","m":"해결하다"},{"w":"comprehensive","p":"a","m":"포괄적인"},{"w":"legitimate","p":"a","m":"합법적인"},{"w":"subtle","p":"a","m":"미묘한"},{"w":"obligation","p":"n","m":"의무"},{"w":"affect","p":"v","m":"영향을 미치다"},{"w":"contradict","p":"v","m":"모순되다"},{"w":"endure","p":"v","m":"견디다"},{"w":"inspire","p":"v","m":"영감을 주다"},{"w":"persuade","p":"v","m":"설득하다"},{"w":"accurate","p":"a","m":"정확한"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[{"w":"God","p":"n","m":"하나님"},{"w":"pray","p":"v","m":"기도하다"},{"w":"angel","p":"n","m":"천사"},{"w":"ark","p":"n","m":"방주"},{"w":"fish","p":"n","m":"물고기"},{"w":"garden","p":"n","m":"동산"},{"w":"rock","p":"n","m":"바위"},{"w":"world","p":"n","m":"세상"},{"w":"thank","p":"v","m":"감사하다"},{"w":"cross","p":"n","m":"십자가"},{"w":"help","p":"v","m":"돕다"},{"w":"good","p":"a","m":"선한"},{"w":"Christmas","p":"n","m":"성탄절"},{"w":"friend","p":"n","m":"친구"},{"w":"believe","p":"v","m":"믿다"},{"w":"brave","p":"a","m":"용감한"},{"w":"sin","p":"n","m":"죄"},{"w":"harvest","p":"n","m":"추수"},{"w":"peace","p":"n","m":"평화"},{"w":"generous","p":"a","m":"너그러운"},{"w":"trust","p":"v","m":"신뢰하다"},{"w":"commandment","p":"n","m":"계명"},{"w":"eternal","p":"a","m":"영원한"},{"w":"grace","p":"n","m":"은혜"},{"w":"knowledge","p":"n","m":"지식"},{"w":"covenant","p":"n","m":"언약"},{"w":"testimony","p":"n","m":"증언"},{"w":"goodness","p":"n","m":"선함"},{"w":"gentleness","p":"n","m":"온유"},{"w":"compassion","p":"n","m":"긍휼"},{"w":"worship","p":"n","m":"예배"},{"w":"providence","p":"n","m":"섭리"},{"w":"sanctification","p":"n","m":"성화"},{"w":"covenant","p":"n","m":"언약"},{"w":"altar","p":"n","m":"제단"},{"w":"wilderness","p":"n","m":"광야"},{"w":"multitude","p":"n","m":"무리"},{"w":"worship","p":"v","m":"예배하다"},{"w":"tempt","p":"v","m":"유혹하다"},{"w":"almighty","p":"a","m":"전능한"}],"expr":[{"w":"the salt of the earth","m":"믿음직하고 훌륭한 사람"},{"w":"turn the other cheek","m":"보복하지 않고 참다"},{"w":"by the skin of one's teeth","m":"간신히"},{"w":"the powers that be","m":"권력을 쥔 사람들"},{"w":"see eye to eye","m":"의견이 일치하다"},{"w":"wash one's hands of","m":"~에서 손을 떼다"},{"w":"reap what you sow","m":"뿌린 대로 거두다"},{"w":"the eleventh hour","m":"마지막 순간"},{"w":"fight the good fight","m":"옳은 일을 위해 끝까지 애쓰다"},{"w":"my brother's keeper","m":"남을 돌볼 책임이 있는 사람"},{"w":"a good Samaritan","m":"어려운 사람을 돕는 친절한 사람"},{"w":"the writing on the wall","m":"불길한 징조"},{"w":"the blind leading the blind","m":"모르는 사람이 모르는 사람을 이끄는 상황"},{"w":"fall from grace","m":"신임을 잃다"},{"w":"the apple of one's eye","m":"매우 소중한 사람"},{"w":"the prodigal son","m":"뉘우치고 돌아온 사람"},{"w":"put your house in order","m":"신변을 정리하다"},{"w":"nothing new under the sun","m":"세상에 새로운 것은 없다"},{"w":"feet of clay","m":"겉보기와 달리 숨겨진 약점"},{"w":"a leopard can't change its spots","m":"타고난 본성은 바뀌지 않는다"},{"w":"go the extra mile","m":"기대 이상으로 애쓰다"},{"w":"a drop in the bucket","m":"아주 적은 양"},{"w":"a wolf in sheep's clothing","m":"양의 탈을 쓴 위선자"},{"w":"a labor of love","m":"좋아서 하는 수고"},{"w":"cast the first stone","m":"앞장서서 남을 비난하다"},{"w":"a house divided","m":"분열된 집단"},{"w":"a thorn in the flesh","m":"계속 괴롭히는 골칫거리"},{"w":"a land of milk and honey","m":"풍요로운 땅"},{"w":"the straight and narrow","m":"바르고 정직한 삶"}]}}
};
