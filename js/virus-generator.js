function generateNewVirus(){

    let segments = 0;
    let seed = Math.random();

    if(seed > 0.75){
        segments = 4;
    }else if(seed > 0.5){
        segments = 3;
    }else {
        segments = 2;
    }

    let genVirus = [];
    //let segString = segmentCleaner(innerVirus(segments), segments);
    let segArray = segmentCleaner(innerVirus(segments, true));
    console.log(segArray);
    genVirus.push(preVirus());
    genVirus.push(segArray.join(""));
    genVirus.push(endVirus());

    tempString = genVirus.join("");

    
    readWord(tempString, 1);
    document.getElementById("makeVirus").innerHTML = tempString.charAt(0).toUpperCase() + tempString.slice(1);

 }

 function segmentCleaner(sArray, sCount){
    let dashCount = 0;
    
    for(var i = 0; i < sArray.length; i++){
        if(sArray[i] === "-" || sArray[i] === " " || sArray[i] === ". "){
            dashCount++;
            if(dashCount > 1 || i == sArray.length - 1){
                console.log("regenned");
                sArray[i] = (innerVirus(1, false)).join("");
            }
            
        }
    }
    console.log(dashCount + " dashes");

    return sArray;

 }


 function preVirus(){
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
        "type 2 ",
        "gluco",
        "hyper",
        "hypo",
        "acute ",
        "early onset ",

        

    ];

    return pres[Math.ceil(Math.random()*pres.length-1)];
 }

 function innerVirus(quant, allowDash){
    //console.log(quant);

    let minVal;

    if(allowDash){//uses allowDash bool to set starting point in array
        minVal = 0;
    }else{
        minVal = 3;
    }console.log(minVal)
    let inners = [
        "-",
        " ",
        ". ",
        "dred",
        "co",
        "in",
        "epa",
        "meb",
        "abe",
        "uce",
        "cell",
        "cro",
        "uk"
        
    ];

    let temp = [];


    for(let i = 0; i < quant; i++){
    temp.push(inners[Math.floor(Math.random() * ((inners.length) - minVal) + minVal)]);
    //console.log(temp.join(""));
    //console.log(inners[Math.ceil(Math.random()* ((inners.length - 1) - minVal) + minVal)])
    }
    
    return temp;//.join("");//inners[Math.random()*inners.length-1];
 }

 function endVirus(){
    let ends = [
        "itis",
        "za",
        "ax",
        " flu",
        "ism",
        "osis",
        " infection",
        "pox",
        "ydia",
        "dia",
        "era",
        " poisoning",
        "virus",
        "ona",
        "iosis",
        "cosis",
        " fever",
        "ella",
        "ea",
        "ers",
        "osy",
        "ria",
        "aria",
        "cal",
        "ytic",
        "tic",
        "io",
        "ies",
        "ilis",
        "ema",
        "emia"
    ];


    return ends[Math.ceil(Math.random()*ends.length-1)];
 }
 