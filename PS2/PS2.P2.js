function* printSentence(sentence){
    let wordLst = sentence.split(" ");
    let count = 0;
    while (count < wordLst.length){
        count ++;
        yield wordLst[count-1];
    }
}


for (let word of printSentence("All I know is something like a bird within her sang")){
    console.log(word);
}