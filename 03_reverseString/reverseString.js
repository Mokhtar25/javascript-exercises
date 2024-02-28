const reverseString = function(string) {
    let len = string.length;
    let newString = "";
    for (let i = 0; i < len; i++){
        newString += string[len-i-1]
    }
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
