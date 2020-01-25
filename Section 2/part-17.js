//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

var height;

if(height) {
    console.log('variable is defined');
} else {
    console.log('variable is not defined');
}

var height = 0;

if(height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable is not defined');
}

var height = '';

if(height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable is not defined');
}

var height = 23;
if(height == '23') {
    console.log('the == operator does type coercion');
}