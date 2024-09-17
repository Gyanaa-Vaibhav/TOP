const removeFromArray = function (initial, toremove) {

    let toBeRemoved = initial.indexOf(toremove);    
    initial.splice(toBeRemoved, 1);
    
    return initial;
};


removeFromArray([1, 2, 3, 4], 1)

// Do not edit below this line
module.exports = removeFromArray;
