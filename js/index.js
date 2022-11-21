




function setWordLength(i){
    const min = 4;
    const max = 12;

    return i = Math.ceil(Math.random() * (max - min) + min);

}

function setWordPattern(p, l){
    let localPattern = [];
    let tempHolder = 0;
    let tempLetter = "a";



    const conArray = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    const vowArray = ["a","e","i","o","u"];
    for (let i = 1; i < l; i++){

        if (tempHolder == 0){//constanant
            tempLetter= conArray[Math.ceil(Math.random()*20-1)];
            localPattern.push(tempLetter);
            
            
            tempHolder = 1;
        }else{//vowel
            tempLetter = vowArray[Math.ceil(Math.random()*6-1)];
            localPattern.push(tempLetter);
            if(localPattern[i - 1] == "a" || localPattern[i - 1] == "e" || localPattern[i - 1] == "i" || localPattern[i - 1] == "o" || localPattern[i - 1] == "u"){
                let rand = Math.random();
                console.log(rand);
                //document.getElementById("test1").innerHTML = "a";
                
                if(rand > 0.75){
                console.log("rolled a double");
                tempHolder = 1;
                
                }else{
                    tempHolder = 0;
                }
            }else{
                tempHolder = 0;
            }
            
        }

        

    }//test

    let randS = Math.random();
    if(randS > 0.95){
        localPattern.push("ing")
    } else if (randS > 0.85){
        localPattern.push("ed");
    } else if (randS > 0.75){
        localPattern.push("s");
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

