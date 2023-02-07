// Problem number One
/*
This function is meant to programmatically understand
 multipication, addition, division and subtraction.
*/
function mindGame(number){

    const multipicationResult = number * 3;
    const additionResult = multipicationResult + 10;
    const divisionResult = additionResult/2;
    const subtractionResult = divisionResult - 5;

    if(typeof(number) === "string"){
        return "please type number value"
    }
    else{
        return subtractionResult;
    }
}


// Problem number Tow
/*
This function is used programmatically to determine whether a number is even or odd.
*/
function evenOdd(inputString){
    let sum =0;

    for (let i = 0; i < inputString.length; i++) {
        const element = inputString[i];
        sum += element.length
    }

    if(typeof(inputString) === "number" ){
        return "please type string value"
    }
    else if(sum%2 === 0){
        return "even"
    }
    else{
        return "odd"
    }
}




// Problem number Three 
/*
I think This function meant day of the week.
if the function is the day of the week
then if it is below seven it will be one week and
if it is above seven days then it will be running for two weeks.
*/
function isLGSeven(inputNumber){
    const subtractionResult = inputNumber-7;

    if(typeof(inputNumber) === "string"){
        return "please type number value"
    }
    else if(subtractionResult >= 7){
        return inputNumber*2;
    }
    else{
        return subtractionResult
    }
}


// Problem number four
/*
This function is to calculate the sum of all negative values.
*/
function findingBadData(inputArray){
    let negativeSumResult = 0;

    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];

        if(element < 0){
            negativeSumResult ++;
        }
    }
    return negativeSumResult;
}



// Problem number five
/*
This function means that the math needed to convert 
a currency into money is programmatically understood.
For example, if you convert 1 USD to bangla taka,
you will get 90 taka and the cost converting it is reduced.
*/
function gemsToDiamond(friend1, friend2, friend3){
    const friend1MultipicationResult = friend1 * 21;
    const friend2MultipicationResult = friend2 * 32;
    const friend3MultipicationResult = friend3 * 43;

    const totalMultipicationSumValue = friend1MultipicationResult + friend2MultipicationResult + friend3MultipicationResult;
    
    if(typeof(friend1) === "string" || typeof(friend2) === "string" || typeof(friend3) === "string"){
        return "some thing wrong, please check your input value"
    }
    else if(totalMultipicationSumValue > 1000*2){
       return totalMultipicationSumValue - 2000;
    }
    else {
        return totalMultipicationSumValue;
    }
}