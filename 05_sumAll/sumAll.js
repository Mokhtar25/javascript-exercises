const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" ||  typeof(num2) !== "number"){
        return "ERROR";
    }
    let smaller = 0;
    let bigger = 0;
    if (num1 > num2){

     smaller = num2;
      bigger = num1;
    }
    else{
        smaller = num1;
         bigger = num2;

    } 
    let sum = 0;
    for (let i = smaller; i <= bigger; i++){
        sum+=i;
    }
    return sum;
};
console.log(sumAll("123",4))

// Do not edit below this line
module.exports = sumAll;
