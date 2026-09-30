/*
 * 이레 영어 · 중1 문제 파일
 * s1 = 1학기, s2 = 2학기. 새 문제는 해당 학기 목록의 끝에 추가하세요.
 *   word(단어): {"t":"word","w":"영어","p":"n|v|a|ad","m":"뜻"}  → 뜻 고르기/단어 고르기로 자동 출제
 *   expr(숙어·표현): {"t":"expr","w":"영어 표현","m":"뜻","r":"출처(선택)"}
 *   cloze(빈칸): {"t":"cloze","s":"문장 ___ 문장","a":"정답","d":["오답1","오답2","오답3","오답4"],"e":"해설","ko":"뜻","r":"출처"}
 */
window.QUIZ_DATA = {
  s1: [
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
    {"t":"word","w":"village","p":"n","m":"마을"},
    {"t":"word","w":"borrow","p":"v","m":"빌리다"},
    {"t":"word","w":"nature","p":"n","m":"자연"},
    {"t":"word","w":"museum","p":"n","m":"박물관"},
    {"t":"word","w":"exciting","p":"a","m":"신나는"},
    {"t":"cloze","s":"We ___ to the zoo last Saturday.","a":"went","d":["go","goes","going","have gone"],"e":"last Saturday는 과거를 나타내므로 go의 과거형 went를 써요."},
    {"t":"cloze","s":"___ your brother like music?","a":"Does","d":["Do","Are","Am","Were"],"e":"주어가 3인칭 단수(your brother)인 일반동사 의문문은 Does로 시작해요."},
    {"t":"cloze","s":"Listen! Someone ___ the piano.","a":"is playing","d":["play","played","are playing","playing"],"e":"지금 일어나는 일은 현재진행형(be동사 + -ing). 주어 someone은 단수라 is를 써요."},
    {"t":"cloze","s":"___ quiet in the library, please.","a":"Be","d":["Is","Are","Being","To be"],"e":"명령문은 동사원형으로 시작해요. be동사의 원형은 Be예요."},
    {"t":"cloze","s":"___ is your birthday? — It is May 5th.","a":"When","d":["Who","Where","How","Why"],"e":"날짜·때를 물을 때는 의문사 When을 써요."}
  ],
  s2: [
    {"t":"word","w":"nervous","p":"a","m":"긴장한"},
    {"t":"word","w":"communicate","p":"v","m":"의사소통하다"},
    {"t":"word","w":"tradition","p":"n","m":"전통"},
    {"t":"word","w":"prepare","p":"v","m":"준비하다"},
    {"t":"word","w":"simple","p":"a","m":"간단한"},
    {"t":"cloze","s":"There ___ a lot of water in the bottle.","a":"is","d":["are","be","were","am"],"e":"water는 셀 수 없는 명사라서 단수 동사 is를 써요."},
    {"t":"cloze","s":"I ___ going to study tonight.","a":"am","d":["is","are","be","do"],"e":"be going to에서 주어 I에는 am을 써요."},
    {"t":"cloze","s":"He can speak English very ___.","a":"well","d":["good","better","best","goodly"],"e":"동사 speak를 꾸미는 부사 well이에요."},
    {"t":"cloze","s":"My sister ___ a letter now.","a":"is writing","d":["writes","write","wrote","writing"],"e":"now(지금)가 있으므로 현재진행형 is writing이에요."},
    {"t":"cloze","s":"How ___ apples do you have?","a":"many","d":["much","long","old","far"],"e":"셀 수 있는 명사의 개수는 How many로 물어요."},
    {"t":"word","w":"holiday","p":"n","m":"휴일"},
    {"t":"word","w":"explain","p":"v","m":"설명하다"},
    {"t":"word","w":"lazy","p":"a","m":"게으른"},
    {"t":"word","w":"carry","p":"v","m":"나르다"},
    {"t":"word","w":"neighbor","p":"n","m":"이웃"},
    {"t":"cloze","s":"There ___ three cats under the table.","a":"are","d":["is","be","am","was"],"e":"There is/are 뒤의 명사가 복수(three cats)이면 are를 써요."},
    {"t":"cloze","s":"My bag is ___ than yours.","a":"heavier","d":["heavy","heaviest","more heavy","heavily"],"e":"than 앞에는 비교급. 자음+y로 끝나는 heavy는 y를 i로 바꾸고 -er을 붙여요."},
    {"t":"cloze","s":"I ___ visit my grandmother tomorrow.","a":"will","d":["am","did","was","have"],"e":"미래의 일(tomorrow)은 조동사 will + 동사원형으로 나타내요."},
    {"t":"cloze","s":"He didn't ___ breakfast this morning.","a":"eat","d":["ate","eats","eating","eaten"],"e":"did not(didn't) 뒤에는 항상 동사원형이 와요."},
    {"t":"cloze","s":"___ does your father do? — He is a doctor.","a":"What","d":["Who","Where","When","How"],"e":"직업을 물을 때는 What does ~ do?를 써요."}
  ],
  more: {"s1":{"word":[{"w":"apple","p":"n","m":"사과"},{"w":"milk","p":"n","m":"우유"},{"w":"banana","p":"n","m":"바나나"},{"w":"sit","p":"v","m":"앉다"},{"w":"tree","p":"n","m":"나무"},{"w":"monkey","p":"n","m":"원숭이"},{"w":"black","p":"a","m":"검은"},{"w":"window","p":"n","m":"창문"},{"w":"eraser","p":"n","m":"지우개"},{"w":"kitchen","p":"n","m":"부엌"},{"w":"swim","p":"v","m":"수영하다"},{"w":"tired","p":"a","m":"피곤한"},{"w":"borrow","p":"v","m":"빌리다"},{"w":"excited","p":"a","m":"신이 난"},{"w":"healthy","p":"a","m":"건강한"},{"w":"honest","p":"a","m":"정직한"},{"w":"confident","p":"a","m":"자신감 있는"},{"w":"consider","p":"v","m":"고려하다"},{"w":"compare","p":"v","m":"비교하다"},{"w":"allocate","p":"v","m":"할당하다"},{"w":"conserve","p":"v","m":"보존하다"},{"w":"donate","p":"v","m":"기부하다"},{"w":"ignore","p":"v","m":"무시하다"},{"w":"mediate","p":"v","m":"중재하다"},{"w":"reside","p":"v","m":"거주하다"},{"w":"arbitrary","p":"a","m":"임의의"},{"w":"fragile","p":"a","m":"깨지기 쉬운"},{"w":"advocate","p":"v","m":"옹호하다"},{"w":"concede","p":"v","m":"인정하다"},{"w":"distort","p":"v","m":"왜곡하다"},{"w":"generate","p":"v","m":"생성하다"},{"w":"manipulate","p":"v","m":"조작하다"},{"w":"reconcile","p":"v","m":"화해시키다"},{"w":"adjacent","p":"a","m":"인접한"},{"w":"extinct","p":"a","m":"멸종된"},{"w":"acquire","p":"v","m":"습득하다"},{"w":"compromise","p":"v","m":"타협하다"},{"w":"devote","p":"v","m":"헌신하다"},{"w":"facilitate","p":"v","m":"용이하게 하다"},{"w":"launch","p":"v","m":"출시하다"}],"expr":[]},"s2":{"word":[{"w":"cow","p":"n","m":"소"},{"w":"bag","p":"n","m":"가방"},{"w":"bed","p":"n","m":"침대"},{"w":"two","p":"n","m":"둘"},{"w":"bread","p":"n","m":"빵"},{"w":"four","p":"n","m":"넷"},{"w":"stand","p":"v","m":"서다"},{"w":"brother","p":"n","m":"남자 형제"},{"w":"snow","p":"n","m":"눈"},{"w":"hot","p":"a","m":"더운"},{"w":"elephant","p":"n","m":"코끼리"},{"w":"foot","p":"n","m":"발"},{"w":"long","p":"a","m":"긴"},{"w":"sleep","p":"v","m":"자다"},{"w":"grandmother","p":"n","m":"할머니"},{"w":"grandfather","p":"n","m":"할아버지"},{"w":"sock","p":"n","m":"양말"},{"w":"strong","p":"a","m":"힘센"},{"w":"sometimes","p":"ad","m":"가끔"},{"w":"dinner","p":"n","m":"저녁 식사"},{"w":"wear","p":"v","m":"입다"},{"w":"subway","p":"n","m":"지하철"},{"w":"practice","p":"v","m":"연습하다"},{"w":"history","p":"n","m":"역사"},{"w":"worry","p":"v","m":"걱정하다"},{"w":"recycle","p":"v","m":"재활용하다"},{"w":"dream","p":"n","m":"꿈"},{"w":"chance","p":"n","m":"기회"},{"w":"curious","p":"a","m":"호기심 많은"},{"w":"necessary","p":"a","m":"필요한"},{"w":"prevent","p":"v","m":"예방하다"},{"w":"purpose","p":"n","m":"목적"},{"w":"survive","p":"v","m":"살아남다"},{"w":"admire","p":"v","m":"존경하다"},{"w":"reflect","p":"v","m":"반영하다"},{"w":"efficient","p":"a","m":"효율적인"},{"w":"reluctant","p":"a","m":"꺼리는"},{"w":"subsequent","p":"a","m":"이후의"},{"w":"bias","p":"n","m":"편견"},{"w":"hazard","p":"n","m":"위험 요소"}],"expr":[{"w":"account for","m":"설명하다"},{"w":"bring up","m":"기르다"},{"w":"come up with","m":"생각해 내다"},{"w":"deal with","m":"다루다"},{"w":"get rid of","m":"제거하다"},{"w":"hand in","m":"제출하다"},{"w":"look forward to","m":"고대하다"},{"w":"make sense","m":"이치에 맞다"},{"w":"run out of","m":"~을 다 써버리다"},{"w":"stand for","m":"상징하다"},{"w":"take place","m":"개최되다"},{"w":"be about to","m":"막 ~하려 하다"},{"w":"in terms of","m":"~의 측면에서"},{"w":"as a result of","m":"~의 결과로"},{"w":"for the sake of","m":"~을 위하여"},{"w":"once in a while","m":"가끔"},{"w":"be responsible for","m":"~에 책임이 있다"},{"w":"rule out","m":"배제하다"},{"w":"break down","m":"고장 나다"},{"w":"call off","m":"취소하다"},{"w":"count on","m":"의지하다"},{"w":"figure out","m":"알아내다"},{"w":"give up","m":"포기하다"},{"w":"keep up with","m":"~에 뒤처지지 않다"},{"w":"look up to","m":"존경하다"},{"w":"put off","m":"미루다"},{"w":"set up","m":"설립하다"},{"w":"take after","m":"닮다"},{"w":"turn down","m":"거절하다"},{"w":"be likely to","m":"~할 것 같다"},{"w":"on behalf of","m":"~을 대표하여"},{"w":"by chance","m":"우연히"},{"w":"in advance","m":"미리"},{"w":"pay attention to","m":"~에 주의를 기울이다"},{"w":"take advantage of","m":"~을 이용하다"},{"w":"bring about","m":"초래하다"},{"w":"carry out","m":"수행하다"},{"w":"cut down on","m":"줄이다"},{"w":"get along with","m":"~와 잘 지내다"},{"w":"go through","m":"겪다"}]}}
};
