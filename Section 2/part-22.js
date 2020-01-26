var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
console.log(names);

//names[5] = 'Mary';
names[names.length] = 'Mary';
console.log(names);
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('Blue');
console.log(john);

john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(1990));

var johnJob = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer.';
console.log(johnJob);
