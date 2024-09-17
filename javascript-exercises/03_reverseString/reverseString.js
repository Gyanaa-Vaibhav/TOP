const reverseString = function (word) {
    let string = "";
    for (let index = word.length-1; index >= 0; index--) {
        // console.log(word[index]);
        string += word[index];
    }
    // console.log(string);
    return string
};

// console.log(reverseString("hello"));


// Do not edit below this line
module.exports = reverseString;
