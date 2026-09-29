/*
 * 이레 영어 · 중1 문제 파일
 * general = 일반 과정, bible = 성경 과정. 새 문제는 각 목록의 끝에 추가하세요.
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
  bible: [
    {"t":"word","w":"wisdom","p":"n","m":"지혜"},
    {"t":"word","w":"knowledge","p":"n","m":"지식"},
    {"t":"word","w":"generation","p":"n","m":"세대"},
    {"t":"word","w":"creation","p":"n","m":"창조"},
    {"t":"cloze","s":"God created man in his own ___.","a":"image","d":["house","world","garden","name"],"ko":"하나님이 자기 형상대로 사람을 창조하셨다.","r":"창세기 1:27"},
    {"t":"cloze","s":"The fear of Yahweh is the ___ of knowledge.","a":"beginning","d":["end","middle","price","enemy"],"ko":"여호와를 경외하는 것이 지식의 시작이다.","r":"잠언 1:7"},
    {"t":"cloze","s":"But seek ___ God's Kingdom and his righteousness.","a":"first","d":["last","never","later","rarely"],"ko":"먼저 하나님의 나라와 그의 의를 구하라.","r":"마태복음 6:33"},
    {"t":"cloze","s":"for all have ___, and fall short of the glory of God;","a":"sinned","d":["sin","sinning","sins","to sin"],"e":"have + 과거분사(현재완료)라서 sinned예요.","ko":"모든 사람이 죄를 지어 하나님의 영광에 이르지 못한다.","r":"로마서 3:23"},
    {"t":"cloze","s":"as for me and my house, we will ___ Yahweh.","a":"serve","d":["served","serving","serves","to serve"],"e":"will 뒤에는 동사원형이 와요.","ko":"나와 내 집은 여호와를 섬기겠다.","r":"여호수아 24:15"},
    {"t":"cloze","s":"Don't you be afraid, for I am ___ you.","a":"with","d":["from","against","without","behind"],"ko":"두려워하지 마라. 내가 너와 함께 있다.","r":"이사야 41:10"},
    {"t":"word","w":"covenant","p":"n","m":"언약"},
    {"t":"word","w":"righteousness","p":"n","m":"의(義)"},
    {"t":"word","w":"temptation","p":"n","m":"유혹"},
    {"t":"word","w":"testimony","p":"n","m":"증언"},
    {"t":"cloze","s":"Let's not be weary in ___ good.","a":"doing","d":["do","did","does","done"],"e":"전치사 in 뒤에는 동명사 doing이 와요.","ko":"선을 행하다가 지치지 말자.","r":"갈라디아서 6:9"},
    {"t":"cloze","s":"In nothing be ___.","a":"anxious","d":["anxiety","anxiously","anxiousness","anxieties"],"e":"be 뒤에는 형용사 anxious가 와요.","ko":"아무것도 염려하지 마라.","r":"빌립보서 4:6"},
    {"t":"cloze","s":"whatever you do, do all to the ___ of God.","a":"glory","d":["glorious","glorify","glorified","gloriously"],"e":"the와 of 사이에는 명사 glory가 와요.","ko":"무엇을 하든지 하나님의 영광을 위하여 하라.","r":"고린도전서 10:31"},
    {"t":"cloze","s":"Train up a child in the way he should go, and when he is ___ he will not depart from it.","a":"old","d":["young","tired","rich","alone"],"ko":"아이가 가야 할 길을 가르쳐라. 그러면 늙어서도 그 길을 떠나지 않을 것이다.","r":"잠언 22:6"},
    {"t":"cloze","s":"let every man be swift to hear, ___ to speak, and slow to anger;","a":"slow","d":["quick","ready","happy","free"],"ko":"듣기는 빨리 하고, 말하기는 더디 하며, 성내기도 더디 하라.","r":"야고보서 1:19"},
    {"t":"cloze","s":"let your light ___ before men","a":"shine","d":["shines","shining","shone","to shine"],"e":"let + 목적어 + 동사원형","ko":"너희 빛을 사람들 앞에 비추라.","r":"마태복음 5:16"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"rainy","p":"a","m":"비가 오는"},{"w":"climb","p":"v","m":"오르다"},{"w":"shy","p":"a","m":"수줍은"},{"w":"invent","p":"v","m":"발명하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"disappointed","p":"a","m":"실망한"},{"w":"influence","p":"n","m":"영향"},{"w":"abandon","p":"v","m":"포기하다, 버리다"},{"w":"compile","p":"v","m":"편찬하다"},{"w":"disguise","p":"v","m":"위장하다"},{"w":"ignore","p":"v","m":"무시하다"},{"w":"motivate","p":"v","m":"동기를 부여하다"},{"w":"substitute","p":"v","m":"대체하다"},{"w":"deliberate","p":"a","m":"의도적인"},{"w":"obsolete","p":"a","m":"구식의"},{"w":"vivid","p":"a","m":"생생한"},{"w":"prospect","p":"n","m":"전망"},{"w":"assume","p":"v","m":"가정하다"},{"w":"demonstrate","p":"v","m":"입증하다"},{"w":"exceed","p":"v","m":"초과하다"},{"w":"justify","p":"v","m":"정당화하다"},{"w":"reconcile","p":"v","m":"화해시키다"},{"w":"authentic","p":"a","m":"진짜의"},{"w":"inevitable","p":"a","m":"불가피한"},{"w":"spontaneous","p":"a","m":"자발적인"},{"w":"incentive","p":"n","m":"유인책"},{"w":"acquire","p":"v","m":"습득하다"},{"w":"conform","p":"v","m":"순응하다"},{"w":"emerge","p":"v","m":"나타나다"},{"w":"impose","p":"v","m":"부과하다"},{"w":"overcome","p":"v","m":"극복하다"},{"w":"vary","p":"v","m":"달라지다"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[{"w":"God","p":"n","m":"하나님"},{"w":"church","p":"n","m":"교회"},{"w":"sheep","p":"n","m":"양"},{"w":"fish","p":"n","m":"물고기"},{"w":"boat","p":"n","m":"배"},{"w":"light","p":"n","m":"빛"},{"w":"thank","p":"v","m":"감사하다"},{"w":"hope","p":"n","m":"소망"},{"w":"kind","p":"a","m":"친절한"},{"w":"Christmas","p":"n","m":"성탄절"},{"w":"save","p":"v","m":"구원하다"},{"w":"praise","p":"v","m":"찬양하다"},{"w":"sin","p":"n","m":"죄"},{"w":"obey","p":"v","m":"순종하다"},{"w":"disciple","p":"n","m":"제자"},{"w":"thankful","p":"a","m":"감사하는"},{"w":"wilderness","p":"n","m":"광야"},{"w":"peace","p":"n","m":"평화"},{"w":"pure","p":"a","m":"깨끗한"},{"w":"resurrection","p":"n","m":"부활"},{"w":"eternal","p":"a","m":"영원한"},{"w":"righteous","p":"a","m":"의로운"},{"w":"self-control","p":"n","m":"절제"},{"w":"humility","p":"n","m":"겸손"},{"w":"worship","p":"n","m":"예배"},{"w":"sovereignty","p":"n","m":"주권"},{"w":"reconciliation","p":"n","m":"화해"},{"w":"altar","p":"n","m":"제단"},{"w":"harvest","p":"n","m":"추수"},{"w":"repent","p":"v","m":"회개하다"},{"w":"tempt","p":"v","m":"유혹하다"},{"w":"grace","p":"n","m":"은혜"},{"w":"disciple","p":"n","m":"제자"},{"w":"blessing","p":"n","m":"복"},{"w":"praise","p":"v","m":"찬양하다"},{"w":"righteous","p":"a","m":"의로운"},{"w":"sacrifice","p":"n","m":"제물"},{"w":"flock","p":"n","m":"양 떼"},{"w":"servant","p":"n","m":"종"},{"w":"heal","p":"v","m":"고치다"}],"expr":[{"w":"the salt of the earth","m":"믿음직하고 훌륭한 사람"},{"w":"turn the other cheek","m":"보복하지 않고 참다"},{"w":"by the skin of one's teeth","m":"간신히"},{"w":"the powers that be","m":"권력을 쥔 사람들"},{"w":"see eye to eye","m":"의견이 일치하다"},{"w":"wash one's hands of","m":"~에서 손을 떼다"},{"w":"reap what you sow","m":"뿌린 대로 거두다"},{"w":"the eleventh hour","m":"마지막 순간"},{"w":"fight the good fight","m":"옳은 일을 위해 끝까지 애쓰다"},{"w":"my brother's keeper","m":"남을 돌볼 책임이 있는 사람"},{"w":"a good Samaritan","m":"어려운 사람을 돕는 친절한 사람"},{"w":"the writing on the wall","m":"불길한 징조"},{"w":"the blind leading the blind","m":"모르는 사람이 모르는 사람을 이끄는 상황"},{"w":"fall from grace","m":"신임을 잃다"},{"w":"the apple of one's eye","m":"매우 소중한 사람"},{"w":"the prodigal son","m":"뉘우치고 돌아온 사람"},{"w":"put your house in order","m":"신변을 정리하다"},{"w":"nothing new under the sun","m":"세상에 새로운 것은 없다"},{"w":"feet of clay","m":"겉보기와 달리 숨겨진 약점"},{"w":"a leopard can't change its spots","m":"타고난 본성은 바뀌지 않는다"},{"w":"go the extra mile","m":"기대 이상으로 애쓰다"},{"w":"a drop in the bucket","m":"아주 적은 양"},{"w":"a wolf in sheep's clothing","m":"양의 탈을 쓴 위선자"},{"w":"a labor of love","m":"좋아서 하는 수고"},{"w":"cast the first stone","m":"앞장서서 남을 비난하다"},{"w":"a house divided","m":"분열된 집단"},{"w":"a thorn in the flesh","m":"계속 괴롭히는 골칫거리"},{"w":"a land of milk and honey","m":"풍요로운 땅"},{"w":"the straight and narrow","m":"바르고 정직한 삶"}]}}
};
