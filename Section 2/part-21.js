var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives for Uber.';
        case 'designer':
            return firstName + ' designs websites.';
        default:
            return firstName + ' has another job.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));