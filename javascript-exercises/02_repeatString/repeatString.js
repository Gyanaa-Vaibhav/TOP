const repeatString = function (string, num) {
    let ans = "";
    for (let index = 0; index < num; index++) {
        ans += string; 
    }

    return ans
};

console.log(repeatString("hey",3));


// Do not edit below this line
module.exports = repeatString;
