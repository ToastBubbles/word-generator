
function generateNewName(){

    let segments = 0;
    let seed = Math.random();

    if(seed > 0.75){
        segments = 4;
    }else if(seed > 0.5){
        segments = 3;
    }else {
        segments = 2;
    }

    let genName = [];

    genName.push(preName());
    genName.push(innerName(segments));
    genName.push(endName());

    tempString = genName.join("");

    
    readName(tempString);
    document.getElementById("makeName").innerHTML = tempString.charAt(0).toUpperCase() + tempString.slice(1);

 }



function setSpeech() {
    return new Promise(
        function (resolve, reject) {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
            }, 10);
        }
    )
}



 function readName(sampleName){

    var speakName = new SpeechSynthesisUtterance();


    let s = setSpeech();
    s.then(//(voices) => console.log(voices)
    function setVoice(voiceChosen){
        
        speakName.voice = voiceChosen[5]; 
        console.log(speakName.voice);
        speakName.rate = 0.8;
        speakName.pitch = 3;
        speakName.text = sampleName;
        window.speechSynthesis.speak(speakName);
    }
    ); 

    

 }


 function preName(){
    let pres = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        

    ];

    return pres[Math.ceil(Math.random()*pres.length-1)];
 }

 function innerName(quant){
    //console.log(quant);
    let inners = [
        "in",
        "en",
        "on",
        "im",
        "em",
        "om",
        "r",
        "onn",
        "imm",
        "eff",
        "ill",
        "opp",
        "epp",
        "as",
        "igg",
        "olo",
        "ar",
        "ti",
        "ne",
        "z",
        "ar",
        "od"
    ];

    let temp = [];

    for(let i = 1; i < quant; i++){
    temp.push(inners[Math.ceil(Math.random()*inners.length-1)]);
    //console.log(temp.join(""));
    }
    
    return temp.join("");//inners[Math.random()*inners.length-1];
 }

 function endName(){
    let ends = [
        "ime",
        "stein",
        "rey",
        "ah",
        "ray",
        "is",
        "stain",
        "ac",
        "elle",
        "ell",
        "ill",
        "il",
        "aw",
        "sha",
        "hal",
        "al",
        "ena",
        "me",
        "ian",
        "ion",
        "icus",
        "lia",
        "us",
        "uel",
        "am",
        "az"

    ];


    return ends[Math.ceil(Math.random()*ends.length-1)];
 }
 