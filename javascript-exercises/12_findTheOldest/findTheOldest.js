const findTheOldest = function (arr) {
    let person = [];
    let newrr = arr.sort(function (a, b) {
        let a1 = a.yearOfDeath - a.yearOfBirth 
        let b1 = b.yearOfDeath - b.yearOfBirth 
        if (a1 > b1) {
            return 1
        } else {
            return -1
        }
    })
    return (newrr[(arr.length-1)])
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
]
    
console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
