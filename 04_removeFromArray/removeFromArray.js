const removeFromArray = function(list, ...string) {
    let lengthArg = string.length;
    let lengthList = list.length;
    for (let i = 0; i < lengthArg; i++)
    {
        for (let j = 0; j < lengthList; j++){
            index = list.indexOf(string[i])
            if (index > -1){
                list.splice(index, 1)
            }
        }
    }
    return list;
};


// Do not edit below this line
module.exports = removeFromArray;
