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
    {"t":"word","w":"one","p":"n","m":"하나"},
    {"t":"word","w":"cow","p":"n","m":"소"},
    {"t":"word","w":"egg","p":"n","m":"달걀"},
    {"t":"word","w":"hat","p":"n","m":"모자"},
    {"t":"word","w":"bag","p":"n","m":"가방"},
    {"t":"word","w":"car","p":"n","m":"자동차"},
    {"t":"word","w":"cup","p":"n","m":"컵"},
    {"t":"word","w":"bed","p":"n","m":"침대"},
    {"t":"word","w":"pig","p":"n","m":"돼지"},
    {"t":"word","w":"yellow","p":"a","m":"노란"},
    {"t":"word","w":"two","p":"n","m":"둘"}
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
    {"t":"word","w":"ark","p":"n","m":"방주"},
    {"t":"word","w":"dove","p":"n","m":"비둘기"},
    {"t":"word","w":"lamb","p":"n","m":"어린양"},
    {"t":"word","w":"fish","p":"n","m":"물고기"},
    {"t":"word","w":"bread","p":"n","m":"빵"},
    {"t":"word","w":"heaven","p":"n","m":"천국"},
    {"t":"word","w":"garden","p":"n","m":"동산"},
    {"t":"word","w":"boat","p":"n","m":"배"},
    {"t":"word","w":"lion","p":"n","m":"사자"},
    {"t":"word","w":"rock","p":"n","m":"바위"},
    {"t":"word","w":"Sunday","p":"n","m":"주일"}
  ],
  more: {"general":{"word":[{"w":"mother","p":"n","m":"어머니"},{"w":"small","p":"a","m":"작은"},{"w":"snow","p":"n","m":"눈"},{"w":"desk","p":"n","m":"책상"},{"w":"cook","p":"v","m":"요리하다"},{"w":"weather","p":"n","m":"날씨"},{"w":"near","p":"a","m":"가까운"},{"w":"visit","p":"v","m":"방문하다"},{"w":"future","p":"n","m":"미래"},{"w":"solve","p":"v","m":"해결하다"},{"w":"decide","p":"v","m":"결정하다"},{"w":"pollution","p":"n","m":"오염"},{"w":"participate","p":"v","m":"참가하다"},{"w":"survive","p":"v","m":"살아남다"},{"w":"adapt","p":"v","m":"적응하다"},{"w":"conserve","p":"v","m":"보존하다"},{"w":"emphasize","p":"v","m":"강조하다"},{"w":"infer","p":"v","m":"추론하다"},{"w":"perceive","p":"v","m":"인식하다"},{"w":"withdraw","p":"v","m":"철회하다"},{"w":"explicit","p":"a","m":"명시적인"},{"w":"reluctant","p":"a","m":"꺼리는"},{"w":"circumstance","p":"n","m":"상황"},{"w":"likewise","p":"ad","m":"마찬가지로"},{"w":"commence","p":"v","m":"시작하다"},{"w":"deteriorate","p":"v","m":"악화되다"},{"w":"generate","p":"v","m":"생성하다"},{"w":"migrate","p":"v","m":"이주하다"},{"w":"reveal","p":"v","m":"드러내다"},{"w":"contemporary","p":"a","m":"동시대의"},{"w":"mutual","p":"a","m":"상호의"},{"w":"transparent","p":"a","m":"투명한"},{"w":"property","p":"n","m":"재산"},{"w":"anticipate","p":"v","m":"예상하다"},{"w":"cultivate","p":"v","m":"경작하다"},{"w":"evolve","p":"v","m":"진화하다"},{"w":"intervene","p":"v","m":"개입하다"},{"w":"prompt","p":"v","m":"촉발하다"},{"w":"ambiguous","p":"a","m":"모호한"},{"w":"hostile","p":"a","m":"적대적인"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]},"bible":{"word":[{"w":"light","p":"n","m":"빛"},{"w":"song","p":"n","m":"노래"},{"w":"sing","p":"v","m":"노래하다"},{"w":"people","p":"n","m":"사람들"},{"w":"kind","p":"a","m":"친절한"},{"w":"shepherd","p":"n","m":"목자"},{"w":"heart","p":"n","m":"마음"},{"w":"prayer","p":"n","m":"기도"},{"w":"praise","p":"v","m":"찬양하다"},{"w":"voice","p":"n","m":"목소리"},{"w":"prophet","p":"n","m":"선지자"},{"w":"holy","p":"a","m":"거룩한"},{"w":"disciple","p":"n","m":"제자"},{"w":"foolish","p":"a","m":"어리석은"},{"w":"lost","p":"a","m":"잃어버린"},{"w":"harvest","p":"n","m":"추수"},{"w":"peace","p":"n","m":"평화"},{"w":"generous","p":"a","m":"너그러운"},{"w":"trust","p":"v","m":"신뢰하다"},{"w":"commandment","p":"n","m":"계명"},{"w":"eternal","p":"a","m":"영원한"},{"w":"grace","p":"n","m":"은혜"},{"w":"knowledge","p":"n","m":"지식"},{"w":"covenant","p":"n","m":"언약"},{"w":"testimony","p":"n","m":"증언"},{"w":"goodness","p":"n","m":"선함"},{"w":"gentleness","p":"n","m":"온유"},{"w":"compassion","p":"n","m":"긍휼"},{"w":"worship","p":"n","m":"예배"},{"w":"providence","p":"n","m":"섭리"},{"w":"sanctification","p":"n","m":"성화"},{"w":"covenant","p":"n","m":"언약"},{"w":"altar","p":"n","m":"제단"},{"w":"wilderness","p":"n","m":"광야"},{"w":"multitude","p":"n","m":"무리"},{"w":"worship","p":"v","m":"예배하다"},{"w":"tempt","p":"v","m":"유혹하다"},{"w":"almighty","p":"a","m":"전능한"},{"w":"sin","p":"n","m":"죄"},{"w":"resurrection","p":"n","m":"부활"}],"expr":[{"w":"the salt of the earth","m":"믿음직하고 훌륭한 사람"},{"w":"turn the other cheek","m":"보복하지 않고 참다"},{"w":"by the skin of one's teeth","m":"간신히"},{"w":"the powers that be","m":"권력을 쥔 사람들"},{"w":"see eye to eye","m":"의견이 일치하다"},{"w":"wash one's hands of","m":"~에서 손을 떼다"},{"w":"reap what you sow","m":"뿌린 대로 거두다"},{"w":"the eleventh hour","m":"마지막 순간"},{"w":"fight the good fight","m":"옳은 일을 위해 끝까지 애쓰다"},{"w":"my brother's keeper","m":"남을 돌볼 책임이 있는 사람"},{"w":"a good Samaritan","m":"어려운 사람을 돕는 친절한 사람"},{"w":"the writing on the wall","m":"불길한 징조"},{"w":"the blind leading the blind","m":"모르는 사람이 모르는 사람을 이끄는 상황"},{"w":"fall from grace","m":"신임을 잃다"},{"w":"the apple of one's eye","m":"매우 소중한 사람"},{"w":"the prodigal son","m":"뉘우치고 돌아온 사람"},{"w":"put your house in order","m":"신변을 정리하다"},{"w":"nothing new under the sun","m":"세상에 새로운 것은 없다"},{"w":"feet of clay","m":"겉보기와 달리 숨겨진 약점"},{"w":"a leopard can't change its spots","m":"타고난 본성은 바뀌지 않는다"},{"w":"go the extra mile","m":"기대 이상으로 애쓰다"},{"w":"a drop in the bucket","m":"아주 적은 양"},{"w":"a wolf in sheep's clothing","m":"양의 탈을 쓴 위선자"},{"w":"a labor of love","m":"좋아서 하는 수고"},{"w":"cast the first stone","m":"앞장서서 남을 비난하다"},{"w":"a house divided","m":"분열된 집단"},{"w":"a thorn in the flesh","m":"계속 괴롭히는 골칫거리"},{"w":"a land of milk and honey","m":"풍요로운 땅"},{"w":"the straight and narrow","m":"바르고 정직한 삶"}]}}
};
