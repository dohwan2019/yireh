/*
 * 이레 영어 · 초1 문제 파일
 * general = 일반 과정, bible = 성경 과정. 새 문제는 각 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  general: [
    {"t":"word","w":"apple","p":"n","m":"사과"},
    {"t":"word","w":"cat","p":"n","m":"고양이"},
    {"t":"word","w":"dog","p":"n","m":"개"},
    {"t":"word","w":"book","p":"n","m":"책"},
    {"t":"word","w":"ball","p":"n","m":"공"},
    {"t":"word","w":"bird","p":"n","m":"새"},
    {"t":"word","w":"milk","p":"n","m":"우유"},
    {"t":"word","w":"sun","p":"n","m":"해"},
    {"t":"word","w":"red","p":"a","m":"빨간"},
    {"t":"word","w":"one","p":"n","m":"하나"}
  ],
  bible: [
    {"t":"word","w":"God","p":"n","m":"하나님"},
    {"t":"word","w":"Jesus","p":"n","m":"예수님"},
    {"t":"word","w":"love","p":"n","m":"사랑"},
    {"t":"word","w":"pray","p":"v","m":"기도하다"},
    {"t":"word","w":"church","p":"n","m":"교회"},
    {"t":"word","w":"Bible","p":"n","m":"성경"},
    {"t":"word","w":"angel","p":"n","m":"천사"},
    {"t":"word","w":"star","p":"n","m":"별"},
    {"t":"word","w":"sheep","p":"n","m":"양"},
    {"t":"word","w":"ark","p":"n","m":"방주"}
  ],
  more: {"general":{"word":[{"w":"mother","p":"n","m":"어머니"},{"w":"big","p":"a","m":"큰"},{"w":"window","p":"n","m":"창문"},{"w":"hospital","p":"n","m":"병원"},{"w":"museum","p":"n","m":"박물관"},{"w":"environment","p":"n","m":"환경"},{"w":"culture","p":"n","m":"문화"},{"w":"pollution","p":"n","m":"오염"},{"w":"responsible","p":"a","m":"책임감 있는"},{"w":"allocate","p":"v","m":"할당하다"},{"w":"conserve","p":"v","m":"보존하다"},{"w":"donate","p":"v","m":"기부하다"},{"w":"ignore","p":"v","m":"무시하다"},{"w":"mediate","p":"v","m":"중재하다"},{"w":"reside","p":"v","m":"거주하다"},{"w":"arbitrary","p":"a","m":"임의의"},{"w":"fragile","p":"a","m":"깨지기 쉬운"},{"w":"reluctant","p":"a","m":"꺼리는"},{"w":"bias","p":"n","m":"편견"},{"w":"prospect","p":"n","m":"전망"},{"w":"alter","p":"v","m":"바꾸다"},{"w":"contaminate","p":"v","m":"오염시키다"},{"w":"eliminate","p":"v","m":"제거하다"},{"w":"illuminate","p":"v","m":"조명하다"},{"w":"migrate","p":"v","m":"이주하다"},{"w":"resolve","p":"v","m":"해결하다"},{"w":"authentic","p":"a","m":"진짜의"},{"w":"fundamental","p":"a","m":"근본적인"},{"w":"remarkable","p":"a","m":"주목할 만한"},{"w":"burden","p":"n","m":"부담"},{"w":"remedy","p":"n","m":"치료법"},{"w":"anticipate","p":"v","m":"예상하다"},{"w":"contradict","p":"v","m":"모순되다"},{"w":"emerge","p":"v","m":"나타나다"},{"w":"imitate","p":"v","m":"모방하다"},{"w":"minimize","p":"v","m":"최소화하다"},{"w":"restore","p":"v","m":"복원하다"},{"w":"available","p":"a","m":"이용 가능한"},{"w":"hostile","p":"a","m":"적대적인"},{"w":"rigid","p":"a","m":"경직된"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[{"w":"light","p":"n","m":"빛"},{"w":"king","p":"n","m":"왕"},{"w":"thank","p":"v","m":"감사하다"},{"w":"sing","p":"v","m":"노래하다"},{"w":"shepherd","p":"n","m":"목자"},{"w":"Easter","p":"n","m":"부활절"},{"w":"friend","p":"n","m":"친구"},{"w":"prayer","p":"n","m":"기도"},{"w":"prophet","p":"n","m":"선지자"},{"w":"obey","p":"v","m":"순종하다"},{"w":"promise","p":"n","m":"약속"},{"w":"temple","p":"n","m":"성전"},{"w":"harvest","p":"n","m":"추수"},{"w":"courage","p":"n","m":"용기"},{"w":"parable","p":"n","m":"비유"},{"w":"commandment","p":"n","m":"계명"},{"w":"wisdom","p":"n","m":"지혜"},{"w":"generation","p":"n","m":"세대"},{"w":"joy","p":"n","m":"기쁨"},{"w":"goodness","p":"n","m":"선함"},{"w":"patience","p":"n","m":"인내"},{"w":"repentance","p":"n","m":"회개"},{"w":"providence","p":"n","m":"섭리"},{"w":"covenant","p":"n","m":"언약"},{"w":"hope","p":"n","m":"소망"},{"w":"prophet","p":"n","m":"선지자"},{"w":"wilderness","p":"n","m":"광야"},{"w":"kingdom","p":"n","m":"나라"},{"w":"gospel","p":"n","m":"복음"},{"w":"worship","p":"v","m":"예배하다"},{"w":"rejoice","p":"v","m":"기뻐하다"},{"w":"faithful","p":"a","m":"신실한"},{"w":"almighty","p":"a","m":"전능한"},{"w":"salvation","p":"n","m":"구원"},{"w":"temple","p":"n","m":"성전"},{"w":"resurrection","p":"n","m":"부활"},{"w":"famine","p":"n","m":"기근"},{"w":"tribe","p":"n","m":"지파"},{"w":"forgive","p":"v","m":"용서하다"},{"w":"baptize","p":"v","m":"세례를 주다"}],"expr":[{"w":"the salt of the earth","m":"믿음직하고 훌륭한 사람"},{"w":"turn the other cheek","m":"보복하지 않고 참다"},{"w":"by the skin of one's teeth","m":"간신히"},{"w":"the powers that be","m":"권력을 쥔 사람들"},{"w":"see eye to eye","m":"의견이 일치하다"},{"w":"wash one's hands of","m":"~에서 손을 떼다"},{"w":"reap what you sow","m":"뿌린 대로 거두다"},{"w":"the eleventh hour","m":"마지막 순간"},{"w":"fight the good fight","m":"옳은 일을 위해 끝까지 애쓰다"},{"w":"my brother's keeper","m":"남을 돌볼 책임이 있는 사람"},{"w":"a good Samaritan","m":"어려운 사람을 돕는 친절한 사람"},{"w":"the writing on the wall","m":"불길한 징조"},{"w":"the blind leading the blind","m":"모르는 사람이 모르는 사람을 이끄는 상황"},{"w":"fall from grace","m":"신임을 잃다"},{"w":"the apple of one's eye","m":"매우 소중한 사람"},{"w":"the prodigal son","m":"뉘우치고 돌아온 사람"},{"w":"put your house in order","m":"신변을 정리하다"},{"w":"nothing new under the sun","m":"세상에 새로운 것은 없다"},{"w":"feet of clay","m":"겉보기와 달리 숨겨진 약점"},{"w":"a leopard can't change its spots","m":"타고난 본성은 바뀌지 않는다"},{"w":"go the extra mile","m":"기대 이상으로 애쓰다"},{"w":"a drop in the bucket","m":"아주 적은 양"},{"w":"a wolf in sheep's clothing","m":"양의 탈을 쓴 위선자"},{"w":"a labor of love","m":"좋아서 하는 수고"},{"w":"cast the first stone","m":"앞장서서 남을 비난하다"},{"w":"a house divided","m":"분열된 집단"},{"w":"a thorn in the flesh","m":"계속 괴롭히는 골칫거리"},{"w":"a land of milk and honey","m":"풍요로운 땅"},{"w":"the straight and narrow","m":"바르고 정직한 삶"}]}}
};
