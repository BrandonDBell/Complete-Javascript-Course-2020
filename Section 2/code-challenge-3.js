var billOne = 124;
var billTwo = 48;
var billThree = 268;
var tips = [], totals = [];

function tipCalculator(billAmount) {
    var tip;
    if(billAmount < 50) {
        tip = billAmount * .20;
        tips.push(tip);
        return tip;
    } else if(billAmount >= 50 && billAmount <= 200) {
        tip = billAmount * .15;
        tips.push(tip);
        return tip;
    } else if(billAmount > 200) {
        tip = billAmount * .10;
        tips.push(tip);
        return tip;
    }
}

function totalCalculator(billAmount) {
    var tipAmount = tipCalculator(billAmount);
    totals.push(billAmount + tipAmount);
}

totalCalculator(billOne);
totalCalculator(billTwo);
totalCalculator(billThree);

console.log('Tip array: ' + tips + ' . Total array: ' + totals);