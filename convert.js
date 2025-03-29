//Task 1: Decode the Following Reversed Messages 

//Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"

let message1 =  " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let decodedMess1 = message1.split('').reverse().join('');
console.log(decodedMess1);

//Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB" 
let message2 =  "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let decodedMess2 = message2.split('').reverse().join('');
console.log(decodedMess2);

//Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY"
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY"; 
let decodedMess3 = message3.split('').reverse().join('');
console.log(decodedMess3);

//Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ" 
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";
let decodedMess4 = message4.split('').reverse().join('');
console.log(decodedMess4);

//Task 2: Write your own reverse messages

let myMessage1 = "It's going to be tough, but you're going to make it. You will succeed!"
let myMessage2 = "Believe in yourself, you are strong than you imagine!"
let myMessage3 = "I am so proud of you for trying something new, you'll do great!"
let myMessage4 = "You will fail, but you will learn and grow from this!"

let messageRevers1 = myMessage1.split('').reverse().join('');
console.log(messageRevers1);

let messageRevers2 = myMessage2.split('').reverse().join('');
console.log(messageRevers2);

let messageRevers3 = myMessage3.split('').reverse().join('');
console.log(messageRevers3);

let messageRevers4 = myMessage4.split('').reverse().join('');
console.log(messageRevers4);