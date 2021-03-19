const aArray = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];

function rangeExtraction(aArray){
    let tempSequence = [];
    let aString = "";

    for(let i = 0; i < aArray.length; i++){
        
        if(aArray[i+1] == aArray[i]+1){
            tempSequence.push(aArray[i])
            tempSequence.push(aArray[i+1])
        } else {
            if(tempSequence.length > 2){
                aString+=`,${tempSequence[0]}-${tempSequence[tempSequence.length-1]}`;
                tempSequence = [];
            }
            else
                aString+=(i>0)?`,${aArray[i]}`:aArray[i];
        }
    }
    return aString;
}

console.log(rangeExtraction(aArray));