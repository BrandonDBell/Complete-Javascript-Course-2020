var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 80,
    height: 1.83,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    mass: 70,
    height: 1.72,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if(john.calcBMI() > mark.calcBMI()) {
    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI. BMI: ' + john.bmi);
} else if(mark.bmi > john.bmi) {
    console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI. BMI: ' + mark.bmi);
} else {
    console.log('BMI values are the same. John BMI: ' + john.bmi + '. Mark BMI: ' + mark.bmi);
}