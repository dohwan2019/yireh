/*
 * 이레 영어 · 초3 문제 파일
 * general = 일반 과정, bible = 성경 과정. 새 문제는 각 목록의 끝에 추가하세요.
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
  bible: [
    {"t":"word","w":"shepherd","p":"n","m":"목자"},
    {"t":"word","w":"Christmas","p":"n","m":"성탄절"},
    {"t":"word","w":"Easter","p":"n","m":"부활절"},
    {"t":"word","w":"heart","p":"n","m":"마음"},
    {"t":"word","w":"friend","p":"n","m":"친구"},
    {"t":"word","w":"save","p":"v","m":"구원하다"},
    {"t":"word","w":"prayer","p":"n","m":"기도"},
    {"t":"cloze","s":"God said, \"Let there be ___,\" and there was light.","a":"light","d":["water","trees","fish","stars"],"ko":"하나님이 “빛이 있으라” 하시니 빛이 있었다.","r":"창세기 1:3"},
    {"t":"cloze","s":"This is the ___ that Yahweh has made.","a":"day","d":["house","song","road","tree"],"ko":"이날은 여호와께서 만드신 날이다.","r":"시편 118:24"},
    {"t":"cloze","s":"We love him, because he first ___ us.","a":"loved","d":["saw","made","called","helped"],"ko":"그가 먼저 우리를 사랑하셨기 때문에 우리도 그를 사랑한다.","r":"요한일서 4:19"},
    {"t":"word","w":"believe","p":"v","m":"믿다"},
    {"t":"word","w":"follow","p":"v","m":"따르다"},
    {"t":"word","w":"praise","p":"v","m":"찬양하다"},
    {"t":"word","w":"brave","p":"a","m":"용감한"},
    {"t":"word","w":"strong","p":"a","m":"강한"},
    {"t":"word","w":"voice","p":"n","m":"목소리"},
    {"t":"word","w":"sin","p":"n","m":"죄"},
    {"t":"cloze","s":"God saw everything that he had made, and, behold, it was very ___.","a":"good","d":["bad","small","old","dark"],"ko":"하나님이 만드신 모든 것을 보시니 매우 좋았다.","r":"창세기 1:31"},
    {"t":"cloze","s":"Let everything that has breath ___ Yah!","a":"praise","d":["see","hear","call","find"],"ko":"숨 쉬는 모든 것은 여호와를 찬양하라!","r":"시편 150:6"},
    {"t":"cloze","s":"I am with you ___, even to the end of the age.","a":"always","d":["today","alone","sometimes","never"],"ko":"내가 세상 끝날까지 항상 너희와 함께 있겠다.","r":"마태복음 28:20"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"library","p":"n","m":"도서관"},{"w":"sometimes","p":"ad","m":"가끔"},{"w":"borrow","p":"v","m":"빌리다"},{"w":"environment","p":"n","m":"환경"},{"w":"scientist","p":"n","m":"과학자"},{"w":"advice","p":"n","m":"조언"},{"w":"simple","p":"a","m":"간단한"},{"w":"necessary","p":"a","m":"필요한"},{"w":"prefer","p":"v","m":"선호하다"},{"w":"accompany","p":"v","m":"동반하다"},{"w":"conceal","p":"v","m":"숨기다"},{"w":"donate","p":"v","m":"기부하다"},{"w":"implement","p":"v","m":"실행하다"},{"w":"occupy","p":"v","m":"차지하다"},{"w":"undermine","p":"v","m":"약화시키다"},{"w":"durable","p":"a","m":"내구성 있는"},{"w":"plausible","p":"a","m":"그럴듯한"},{"w":"bias","p":"n","m":"편견"},{"w":"sequence","p":"n","m":"순서"},{"w":"cite","p":"v","m":"인용하다"},{"w":"deprive","p":"v","m":"빼앗다"},{"w":"exploit","p":"v","m":"착취하다"},{"w":"manipulate","p":"v","m":"조작하다"},{"w":"resolve","p":"v","m":"해결하다"},{"w":"comprehensive","p":"a","m":"포괄적인"},{"w":"legitimate","p":"a","m":"합법적인"},{"w":"subtle","p":"a","m":"미묘한"},{"w":"obligation","p":"n","m":"의무"},{"w":"affect","p":"v","m":"영향을 미치다"},{"w":"contradict","p":"v","m":"모순되다"},{"w":"endure","p":"v","m":"견디다"},{"w":"inspire","p":"v","m":"영감을 주다"},{"w":"persuade","p":"v","m":"설득하다"},{"w":"accurate","p":"a","m":"정확한"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[{"w":"God","p":"n","m":"하나님"},{"w":"pray","p":"v","m":"기도하다"},{"w":"angel","p":"n","m":"천사"},{"w":"ark","p":"n","m":"방주"},{"w":"fish","p":"n","m":"물고기"},{"w":"garden","p":"n","m":"동산"},{"w":"rock","p":"n","m":"바위"},{"w":"world","p":"n","m":"세상"},{"w":"thank","p":"v","m":"감사하다"},{"w":"cross","p":"n","m":"십자가"},{"w":"help","p":"v","m":"돕다"},{"w":"good","p":"a","m":"선한"},{"w":"prophet","p":"n","m":"선지자"},{"w":"holy","p":"a","m":"거룩한"},{"w":"disciple","p":"n","m":"제자"},{"w":"foolish","p":"a","m":"어리석은"},{"w":"lost","p":"a","m":"잃어버린"},{"w":"harvest","p":"n","m":"추수"},{"w":"peace","p":"n","m":"평화"},{"w":"generous","p":"a","m":"너그러운"},{"w":"trust","p":"v","m":"신뢰하다"},{"w":"commandment","p":"n","m":"계명"},{"w":"eternal","p":"a","m":"영원한"},{"w":"grace","p":"n","m":"은혜"},{"w":"knowledge","p":"n","m":"지식"},{"w":"covenant","p":"n","m":"언약"},{"w":"testimony","p":"n","m":"증언"},{"w":"goodness","p":"n","m":"선함"},{"w":"gentleness","p":"n","m":"온유"},{"w":"compassion","p":"n","m":"긍휼"},{"w":"worship","p":"n","m":"예배"},{"w":"providence","p":"n","m":"섭리"},{"w":"sanctification","p":"n","m":"성화"},{"w":"covenant","p":"n","m":"언약"},{"w":"altar","p":"n","m":"제단"},{"w":"wilderness","p":"n","m":"광야"},{"w":"multitude","p":"n","m":"무리"},{"w":"worship","p":"v","m":"예배하다"},{"w":"tempt","p":"v","m":"유혹하다"},{"w":"almighty","p":"a","m":"전능한"}],"expr":[{"w":"the salt of the earth","m":"믿음직하고 훌륭한 사람"},{"w":"turn the other cheek","m":"보복하지 않고 참다"},{"w":"by the skin of one's teeth","m":"간신히"},{"w":"the powers that be","m":"권력을 쥔 사람들"},{"w":"see eye to eye","m":"의견이 일치하다"},{"w":"wash one's hands of","m":"~에서 손을 떼다"},{"w":"reap what you sow","m":"뿌린 대로 거두다"},{"w":"the eleventh hour","m":"마지막 순간"},{"w":"fight the good fight","m":"옳은 일을 위해 끝까지 애쓰다"},{"w":"my brother's keeper","m":"남을 돌볼 책임이 있는 사람"},{"w":"a good Samaritan","m":"어려운 사람을 돕는 친절한 사람"},{"w":"the writing on the wall","m":"불길한 징조"},{"w":"the blind leading the blind","m":"모르는 사람이 모르는 사람을 이끄는 상황"},{"w":"fall from grace","m":"신임을 잃다"},{"w":"the apple of one's eye","m":"매우 소중한 사람"},{"w":"the prodigal son","m":"뉘우치고 돌아온 사람"},{"w":"put your house in order","m":"신변을 정리하다"},{"w":"nothing new under the sun","m":"세상에 새로운 것은 없다"},{"w":"feet of clay","m":"겉보기와 달리 숨겨진 약점"},{"w":"a leopard can't change its spots","m":"타고난 본성은 바뀌지 않는다"},{"w":"go the extra mile","m":"기대 이상으로 애쓰다"},{"w":"a drop in the bucket","m":"아주 적은 양"},{"w":"a wolf in sheep's clothing","m":"양의 탈을 쓴 위선자"},{"w":"a labor of love","m":"좋아서 하는 수고"},{"w":"cast the first stone","m":"앞장서서 남을 비난하다"},{"w":"a house divided","m":"분열된 집단"},{"w":"a thorn in the flesh","m":"계속 괴롭히는 골칫거리"},{"w":"a land of milk and honey","m":"풍요로운 땅"},{"w":"the straight and narrow","m":"바르고 정직한 삶"}]}}
};
