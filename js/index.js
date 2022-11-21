




function setWordLength(i){
    const min = 3;
    const max = 12;

    return i = Math.ceil(Math.random() * (max - min) + min);

}

function setWordPattern(p, l){
    let localPattern = [];
    let tempHolder = 0;



    const conArray = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    const vowArray = ["a","e","i","o","u"];
    for (let i = 1; i < l; i++){

        if (tempHolder == 0){
            tempHolder = conArray[Math.ceil(Math.random()*20-1)];
            localPattern.push(tempHolder);
            tempHolder = 1;
        }else{
            tempHolder = vowArray[Math.ceil(Math.random()*6-1)];
            localPattern.push(tempHolder);
            tempHolder = 0;
        }



    }


    return localPattern.join("");


}





function generateNewWord(){
    let genWord = "123";
    let genWordLength = 6;
    let genWordPatt = [0];

    genWordLength = setWordLength(genWordLength);
    genWordPatt =setWordPattern(genWordPatt, genWordLength);

    document.getElementById("makeWord").innerHTML = genWordPatt;

}

//generateNewWord();

