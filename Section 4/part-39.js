///////////////////////////////////////
// Lecture: Hoisting

//calculateAge(1965);

function calculateAge(year) {
    console.log(2020 - year);
}

//calculateAge(1990);

//retirement(1990);

var retirement = function(year) {
    console.log(65 - (2020 - year));
}

//retirement(1990);

//console.log(age);
var age = 23;
//console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);