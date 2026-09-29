/*
 * 이레 영어 · 중2 문제 파일
 * general = 일반 과정, bible = 성경 과정. 새 문제는 각 목록의 끝에 추가하세요.
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
  bible: [
    {"t":"word","w":"joy","p":"n","m":"기쁨"},
    {"t":"word","w":"kindness","p":"n","m":"친절"},
    {"t":"word","w":"goodness","p":"n","m":"선함"},
    {"t":"word","w":"self-control","p":"n","m":"절제"},
    {"t":"word","w":"patience","p":"n","m":"인내"},
    {"t":"word","w":"gentleness","p":"n","m":"온유"},
    {"t":"cloze","s":"Every Scripture is God-breathed and ___ for teaching.","a":"profitable","d":["profit","profitably","profits","profited"],"e":"be동사 is 뒤에서 God-breathed와 나란히 쓰인 형용사예요.","ko":"모든 성경은 하나님의 감동으로 된 것으로 가르치기에 유익하다.","r":"디모데후서 3:16"},
    {"t":"cloze","s":"You shall love the Lord your God with all your ___, with all your soul, and with all your mind.","a":"heart","d":["money","time","friends","words"],"ko":"마음을 다하고 목숨을 다하고 뜻을 다하여 주 너의 하나님을 사랑하라.","r":"마태복음 22:37"},
    {"t":"cloze","s":"Commit your deeds to Yahweh, and your plans shall ___.","a":"succeed","d":["success","successful","successfully","succeeded"],"e":"shall 뒤에는 동사원형이 와요.","ko":"네가 하는 일을 여호와께 맡기면 네 계획이 이루어질 것이다.","r":"잠언 16:3"},
    {"t":"cloze","s":"I have ___ your word in my heart, that I might not sin against you.","a":"hidden","d":["hide","hid","hiding","hides"],"e":"have + 과거분사(현재완료)라서 hidden이에요.","ko":"주께 죄짓지 않으려고 주의 말씀을 내 마음에 두었습니다.","r":"시편 119:11"},
    {"t":"word","w":"faithfulness","p":"n","m":"신실함"},
    {"t":"word","w":"humility","p":"n","m":"겸손"},
    {"t":"word","w":"compassion","p":"n","m":"긍휼"},
    {"t":"word","w":"obedience","p":"n","m":"순종"},
    {"t":"word","w":"thanksgiving","p":"n","m":"감사"},
    {"t":"word","w":"worship","p":"n","m":"예배"},
    {"t":"cloze","s":"Don't be overcome by evil, but overcome evil with ___.","a":"good","d":["goods","well","better","best"],"ko":"악에게 지지 말고 선으로 악을 이기라.","r":"로마서 12:21"},
    {"t":"cloze","s":"If we ___ our sins, he is faithful and righteous to forgive us the sins.","a":"confess","d":["confesses","confessed","confessing","to confess"],"e":"조건절의 주어 we에 맞는 현재형 confess예요.","ko":"우리가 죄를 고백하면 그는 신실하시고 의로우셔서 우리 죄를 용서하신다.","r":"요한일서 1:9"},
    {"t":"cloze","s":"The grass withers, the flower fades; but the word of our God ___ forever.","a":"stands","d":["stand","standing","stood","to stand"],"e":"주어 the word가 3인칭 단수라서 stands예요.","ko":"풀은 마르고 꽃은 시들지만 우리 하나님의 말씀은 영원히 서 있다.","r":"이사야 40:8"},
    {"t":"cloze","s":"let's run with perseverance the ___ that is set before us","a":"race","d":["road","prize","game","goal"],"ko":"우리 앞에 놓인 경주를 인내로 달려가자.","r":"히브리서 12:1"}
  ],
  more: {"general":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"sun","p":"n","m":"해"},{"w":"car","p":"n","m":"자동차"},{"w":"father","p":"n","m":"아버지"},{"w":"happy","p":"a","m":"행복한"},{"w":"green","p":"a","m":"초록색의"},{"w":"window","p":"n","m":"창문"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"rainy","p":"a","m":"비가 오는"},{"w":"climb","p":"v","m":"오르다"},{"w":"shy","p":"a","m":"수줍은"},{"w":"invent","p":"v","m":"발명하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"improve","p":"v","m":"개선하다"},{"w":"responsible","p":"a","m":"책임감 있는"},{"w":"suggest","p":"v","m":"제안하다"},{"w":"collapse","p":"v","m":"붕괴하다"},{"w":"detect","p":"v","m":"감지하다"},{"w":"frustrate","p":"v","m":"좌절시키다"},{"w":"mediate","p":"v","m":"중재하다"},{"w":"retain","p":"v","m":"보유하다"},{"w":"consistent","p":"a","m":"일관된"},{"w":"monotonous","p":"a","m":"단조로운"},{"w":"temporary","p":"a","m":"일시적인"},{"w":"phenomenon","p":"n","m":"현상"},{"w":"alter","p":"v","m":"바꾸다"},{"w":"convey","p":"v","m":"전달하다"},{"w":"ensure","p":"v","m":"보장하다"},{"w":"interpret","p":"v","m":"해석하다"},{"w":"prohibit","p":"v","m":"금지하다"},{"w":"adjacent","p":"a","m":"인접한"},{"w":"fundamental","p":"a","m":"근본적인"},{"w":"skeptical","p":"a","m":"회의적인"},{"w":"deficiency","p":"n","m":"결핍"},{"w":"accommodate","p":"v","m":"수용하다"},{"w":"compromise","p":"v","m":"타협하다"},{"w":"dominate","p":"v","m":"지배하다"},{"w":"imitate","p":"v","m":"모방하다"},{"w":"nurture","p":"v","m":"양육하다"},{"w":"undergo","p":"v","m":"겪다"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[{"w":"God","p":"n","m":"하나님"},{"w":"pray","p":"v","m":"기도하다"},{"w":"angel","p":"n","m":"천사"},{"w":"ark","p":"n","m":"방주"},{"w":"fish","p":"n","m":"물고기"},{"w":"garden","p":"n","m":"동산"},{"w":"rock","p":"n","m":"바위"},{"w":"world","p":"n","m":"세상"},{"w":"thank","p":"v","m":"감사하다"},{"w":"cross","p":"n","m":"십자가"},{"w":"help","p":"v","m":"돕다"},{"w":"good","p":"a","m":"선한"},{"w":"Christmas","p":"n","m":"성탄절"},{"w":"friend","p":"n","m":"친구"},{"w":"believe","p":"v","m":"믿다"},{"w":"brave","p":"a","m":"용감한"},{"w":"sin","p":"n","m":"죄"},{"w":"forgive","p":"v","m":"용서하다"},{"w":"promise","p":"n","m":"약속"},{"w":"crowd","p":"n","m":"군중"},{"w":"thankful","p":"a","m":"감사하는"},{"w":"temple","p":"n","m":"성전"},{"w":"servant","p":"n","m":"종"},{"w":"honest","p":"a","m":"정직한"},{"w":"pure","p":"a","m":"깨끗한"},{"w":"parable","p":"n","m":"비유"},{"w":"glory","p":"n","m":"영광"},{"w":"humble","p":"a","m":"겸손한"},{"w":"righteous","p":"a","m":"의로운"},{"w":"generation","p":"n","m":"세대"},{"w":"righteousness","p":"n","m":"의(義)"},{"w":"repentance","p":"n","m":"회개"},{"w":"sovereignty","p":"n","m":"주권"},{"w":"atonement","p":"n","m":"속죄"},{"w":"righteousness","p":"n","m":"의(義)"},{"w":"prophet","p":"n","m":"선지자"},{"w":"harvest","p":"n","m":"추수"},{"w":"gospel","p":"n","m":"복음"},{"w":"obey","p":"v","m":"순종하다"},{"w":"faithful","p":"a","m":"신실한"}],"expr":[{"w":"the salt of the earth","m":"믿음직하고 훌륭한 사람"},{"w":"turn the other cheek","m":"보복하지 않고 참다"},{"w":"by the skin of one's teeth","m":"간신히"},{"w":"the powers that be","m":"권력을 쥔 사람들"},{"w":"see eye to eye","m":"의견이 일치하다"},{"w":"wash one's hands of","m":"~에서 손을 떼다"},{"w":"reap what you sow","m":"뿌린 대로 거두다"},{"w":"the eleventh hour","m":"마지막 순간"},{"w":"fight the good fight","m":"옳은 일을 위해 끝까지 애쓰다"},{"w":"my brother's keeper","m":"남을 돌볼 책임이 있는 사람"},{"w":"a good Samaritan","m":"어려운 사람을 돕는 친절한 사람"},{"w":"the writing on the wall","m":"불길한 징조"},{"w":"the blind leading the blind","m":"모르는 사람이 모르는 사람을 이끄는 상황"},{"w":"fall from grace","m":"신임을 잃다"},{"w":"the apple of one's eye","m":"매우 소중한 사람"},{"w":"the prodigal son","m":"뉘우치고 돌아온 사람"},{"w":"put your house in order","m":"신변을 정리하다"},{"w":"nothing new under the sun","m":"세상에 새로운 것은 없다"},{"w":"feet of clay","m":"겉보기와 달리 숨겨진 약점"},{"w":"a leopard can't change its spots","m":"타고난 본성은 바뀌지 않는다"},{"w":"go the extra mile","m":"기대 이상으로 애쓰다"},{"w":"a drop in the bucket","m":"아주 적은 양"},{"w":"a wolf in sheep's clothing","m":"양의 탈을 쓴 위선자"},{"w":"a labor of love","m":"좋아서 하는 수고"},{"w":"cast the first stone","m":"앞장서서 남을 비난하다"},{"w":"a house divided","m":"분열된 집단"},{"w":"a thorn in the flesh","m":"계속 괴롭히는 골칫거리"},{"w":"a land of milk and honey","m":"풍요로운 땅"},{"w":"the straight and narrow","m":"바르고 정직한 삶"}]}}
};
