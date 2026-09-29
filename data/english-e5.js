/*
 * 이레 영어 · 초5 문제 파일
 * general = 일반 과정, bible = 성경 과정. 새 문제는 각 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
    {"t":"word","w":"museum","p":"n","m":"박물관"},
    {"t":"word","w":"delicious","p":"a","m":"맛있는"},
    {"t":"word","w":"dangerous","p":"a","m":"위험한"},
    {"t":"word","w":"favorite","p":"a","m":"가장 좋아하는"},
    {"t":"word","w":"borrow","p":"v","m":"빌리다"},
    {"t":"word","w":"visit","p":"v","m":"방문하다"},
    {"t":"cloze","s":"I ___ to the park yesterday.","a":"went","d":["go","goes","going","will go"],"e":"yesterday(어제)가 있으므로 과거형 went예요."},
    {"t":"cloze","s":"She is ___ than me.","a":"taller","d":["tall","tallest","more tall","most tall"],"e":"than(~보다) 앞에는 비교급을 써요."},
    {"t":"cloze","s":"What are you ___ now?","a":"doing","d":["do","does","did","done"],"e":"are you ~ing: 지금 하고 있는 일을 물을 때 써요."},
    {"t":"cloze","s":"I will ___ my grandma tomorrow.","a":"visit","d":["visited","visits","visiting","to visit"],"e":"will 뒤에는 동사원형이 와요."},
    {"t":"word","w":"shy","p":"a","m":"수줍은"},
    {"t":"word","w":"science","p":"n","m":"과학"},
    {"t":"word","w":"practice","p":"v","m":"연습하다"},
    {"t":"word","w":"restaurant","p":"n","m":"식당"},
    {"t":"word","w":"arrive","p":"v","m":"도착하다"},
    {"t":"cloze","s":"Did you ___ your homework?","a":"do","d":["did","does","doing","done"],"e":"Did 뒤에는 동사원형이 와요."},
    {"t":"cloze","s":"There isn't ___ milk in the cup.","a":"any","d":["some","many","a","few"],"e":"부정문에서 ‘조금도’는 any를 써요."},
    {"t":"cloze","s":"This bag is ___ than that one.","a":"heavier","d":["heavy","heaviest","more heavy","heavyer"],"e":"heavy의 비교급은 y를 i로 바꾸고 -er을 붙인 heavier예요."},
    {"t":"cloze","s":"I was ___ TV at 9 last night.","a":"watching","d":["watch","watched","watches","to watch"],"e":"과거에 하고 있던 일은 was + -ing(과거진행형)로 나타내요."},
    {"t":"cloze","s":"Let's ___ soccer after school.","a":"play","d":["plays","playing","played","to play"],"e":"Let's 뒤에는 동사원형이 와요."}
  ],
  bible: [
    {"t":"word","w":"temple","p":"n","m":"성전"},
    {"t":"word","w":"wilderness","p":"n","m":"광야"},
    {"t":"word","w":"harvest","p":"n","m":"추수"},
    {"t":"word","w":"servant","p":"n","m":"종"},
    {"t":"word","w":"courage","p":"n","m":"용기"},
    {"t":"word","w":"peace","p":"n","m":"평화"},
    {"t":"cloze","s":"___ your father and your mother.","a":"Honor","d":["Close","Paint","Sell","Count"],"ko":"네 아버지와 어머니를 공경하라.","r":"출애굽기 20:12"},
    {"t":"cloze","s":"Give thanks to Yahweh, for he is ___.","a":"good","d":["here","old","late","tired"],"ko":"여호와께 감사하라. 그는 선하시다.","r":"시편 136:1"},
    {"t":"cloze","s":"Blessed are the ___, for they shall be called children of God.","a":"peacemakers","d":["teachers","farmers","builders","singers"],"ko":"평화를 이루는 사람은 복이 있다. 그들은 하나님의 자녀라 불릴 것이다.","r":"마태복음 5:9"},
    {"t":"cloze","s":"When I am ___, I will put my trust in you.","a":"afraid","d":["happy","hungry","tired","busy"],"ko":"내가 두려울 때 주를 의지하겠습니다.","r":"시편 56:3"},
    {"t":"word","w":"honest","p":"a","m":"정직한"},
    {"t":"word","w":"obedient","p":"a","m":"순종하는"},
    {"t":"word","w":"generous","p":"a","m":"너그러운"},
    {"t":"word","w":"pure","p":"a","m":"깨끗한"},
    {"t":"word","w":"forgiveness","p":"n","m":"용서"},
    {"t":"word","w":"trust","p":"v","m":"신뢰하다"},
    {"t":"cloze","s":"Blessed are the ___ in heart, for they shall see God.","a":"pure","d":["rich","strong","busy","tall"],"ko":"마음이 깨끗한 사람은 복이 있다. 그들이 하나님을 볼 것이다.","r":"마태복음 5:8"},
    {"t":"cloze","s":"In all your ways acknowledge him, and he will make your paths ___.","a":"straight","d":["long","dark","narrow","wide"],"ko":"네 모든 길에서 그를 인정하라. 그가 네 길을 곧게 하실 것이다.","r":"잠언 3:6"},
    {"t":"cloze","s":"Oh taste and ___ that Yahweh is good.","a":"see","d":["hear","feel","smell","say"],"ko":"여호와의 선하심을 맛보아 알라.","r":"시편 34:8"},
    {"t":"cloze","s":"In the beginning was the ___.","a":"Word","d":["Light","King","Life","Truth"],"ko":"태초에 말씀이 계셨고, 말씀이 하나님과 함께 계셨다.","r":"요한복음 1:1"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"rainy","p":"a","m":"비가 오는"},{"w":"climb","p":"v","m":"오르다"},{"w":"recycle","p":"v","m":"재활용하다"},{"w":"ancient","p":"a","m":"고대의"},{"w":"prepare","p":"v","m":"준비하다"},{"w":"disappointed","p":"a","m":"실망한"},{"w":"influence","p":"n","m":"영향"},{"w":"abandon","p":"v","m":"포기하다, 버리다"},{"w":"compile","p":"v","m":"편찬하다"},{"w":"disguise","p":"v","m":"위장하다"},{"w":"ignore","p":"v","m":"무시하다"},{"w":"motivate","p":"v","m":"동기를 부여하다"},{"w":"substitute","p":"v","m":"대체하다"},{"w":"deliberate","p":"a","m":"의도적인"},{"w":"obsolete","p":"a","m":"구식의"},{"w":"vivid","p":"a","m":"생생한"},{"w":"prospect","p":"n","m":"전망"},{"w":"assume","p":"v","m":"가정하다"},{"w":"demonstrate","p":"v","m":"입증하다"},{"w":"exceed","p":"v","m":"초과하다"},{"w":"justify","p":"v","m":"정당화하다"},{"w":"reconcile","p":"v","m":"화해시키다"},{"w":"authentic","p":"a","m":"진짜의"},{"w":"inevitable","p":"a","m":"불가피한"},{"w":"spontaneous","p":"a","m":"자발적인"},{"w":"incentive","p":"n","m":"유인책"},{"w":"acquire","p":"v","m":"습득하다"},{"w":"conform","p":"v","m":"순응하다"},{"w":"emerge","p":"v","m":"나타나다"},{"w":"impose","p":"v","m":"부과하다"},{"w":"overcome","p":"v","m":"극복하다"},{"w":"vary","p":"v","m":"달라지다"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[{"w":"God","p":"n","m":"하나님"},{"w":"pray","p":"v","m":"기도하다"},{"w":"angel","p":"n","m":"천사"},{"w":"ark","p":"n","m":"방주"},{"w":"fish","p":"n","m":"물고기"},{"w":"garden","p":"n","m":"동산"},{"w":"rock","p":"n","m":"바위"},{"w":"world","p":"n","m":"세상"},{"w":"thank","p":"v","m":"감사하다"},{"w":"cross","p":"n","m":"십자가"},{"w":"help","p":"v","m":"돕다"},{"w":"good","p":"a","m":"선한"},{"w":"Christmas","p":"n","m":"성탄절"},{"w":"friend","p":"n","m":"친구"},{"w":"believe","p":"v","m":"믿다"},{"w":"brave","p":"a","m":"용감한"},{"w":"sin","p":"n","m":"죄"},{"w":"forgive","p":"v","m":"용서하다"},{"w":"promise","p":"n","m":"약속"},{"w":"crowd","p":"n","m":"군중"},{"w":"thankful","p":"a","m":"감사하는"},{"w":"parable","p":"n","m":"비유"},{"w":"glory","p":"n","m":"영광"},{"w":"humble","p":"a","m":"겸손한"},{"w":"righteous","p":"a","m":"의로운"},{"w":"generation","p":"n","m":"세대"},{"w":"righteousness","p":"n","m":"의(義)"},{"w":"joy","p":"n","m":"기쁨"},{"w":"self-control","p":"n","m":"절제"},{"w":"faithfulness","p":"n","m":"신실함"},{"w":"obedience","p":"n","m":"순종"},{"w":"repentance","p":"n","m":"회개"},{"w":"sovereignty","p":"n","m":"주권"},{"w":"atonement","p":"n","m":"속죄"},{"w":"righteousness","p":"n","m":"의(義)"},{"w":"prophet","p":"n","m":"선지자"},{"w":"harvest","p":"n","m":"추수"},{"w":"gospel","p":"n","m":"복음"},{"w":"obey","p":"v","m":"순종하다"},{"w":"faithful","p":"a","m":"신실한"}],"expr":[{"w":"the salt of the earth","m":"믿음직하고 훌륭한 사람"},{"w":"turn the other cheek","m":"보복하지 않고 참다"},{"w":"by the skin of one's teeth","m":"간신히"},{"w":"the powers that be","m":"권력을 쥔 사람들"},{"w":"see eye to eye","m":"의견이 일치하다"},{"w":"wash one's hands of","m":"~에서 손을 떼다"},{"w":"reap what you sow","m":"뿌린 대로 거두다"},{"w":"the eleventh hour","m":"마지막 순간"},{"w":"fight the good fight","m":"옳은 일을 위해 끝까지 애쓰다"},{"w":"my brother's keeper","m":"남을 돌볼 책임이 있는 사람"},{"w":"a good Samaritan","m":"어려운 사람을 돕는 친절한 사람"},{"w":"the writing on the wall","m":"불길한 징조"},{"w":"the blind leading the blind","m":"모르는 사람이 모르는 사람을 이끄는 상황"},{"w":"fall from grace","m":"신임을 잃다"},{"w":"the apple of one's eye","m":"매우 소중한 사람"},{"w":"the prodigal son","m":"뉘우치고 돌아온 사람"},{"w":"put your house in order","m":"신변을 정리하다"},{"w":"nothing new under the sun","m":"세상에 새로운 것은 없다"},{"w":"feet of clay","m":"겉보기와 달리 숨겨진 약점"},{"w":"a leopard can't change its spots","m":"타고난 본성은 바뀌지 않는다"},{"w":"go the extra mile","m":"기대 이상으로 애쓰다"},{"w":"a drop in the bucket","m":"아주 적은 양"},{"w":"a wolf in sheep's clothing","m":"양의 탈을 쓴 위선자"},{"w":"a labor of love","m":"좋아서 하는 수고"},{"w":"cast the first stone","m":"앞장서서 남을 비난하다"},{"w":"a house divided","m":"분열된 집단"},{"w":"a thorn in the flesh","m":"계속 괴롭히는 골칫거리"},{"w":"a land of milk and honey","m":"풍요로운 땅"},{"w":"the straight and narrow","m":"바르고 정직한 삶"}]}}
};
