var johnTips = [], johnTotalAmounts = [], markTips = [], markTotalAmounts = [], allUsers = [], johnAvgTips, markAvgTips;

var johnTipping = {
    twenty: .20,
    fifteen: .15,
    ten: .10
}

var markTipping = {
    twenty: .20,
    ten: .10,
    twentyFive: .25
}

var john = {
    firstName: 'John',
    bills: [124, 48, 268, 180, 42]
}

allUsers.push(john);

var mark = {
    firstName: 'Mark',
    bills: [77, 375, 110, 45]
}

allUsers.push(mark);

for(i = 0; i < allUsers.length; i++) {
    calcTotal(allUsers[i]);
}


function calcTotal(user) {
    switch (user.firstName){
        case 'John':
            for(i = 0; i < john.bills.length; i++) {
                var tipAmount;
                var totalAmount;

                if(john.bills[i] < 50) {
                    tipAmount = calcTips(john.bills[i], johnTipping.twenty);
                    johnTips.push(tipAmount);
                    totalAmount = john.bills[i] + tipAmount;
                    johnTotalAmounts.push(totalAmount);
                } else if(john.bills[i] >= 50 && john.bills[i] < 200) {
                    tipAmount = calcTips(john.bills[i], johnTipping.fifteen);
                    johnTips.push(tipAmount);
                    totalAmount = john.bills[i] + tipAmount;
                    johnTotalAmounts.push(totalAmount);
                } else if(john.bills[i] > 200) {
                    tipAmount = calcTips(john.bills[i], johnTipping.ten);
                    johnTips.push(tipAmount);
                    totalAmount = john.bills[i] + tipAmount;
                    johnTotalAmounts.push(totalAmount);
                }

                johnAvgTips = calcAverageTips(johnTips);
            }
        case 'Mark':
            for(i = 0; i < mark.bills.length; i++) {
                var tipAmount;
                var totalAmount;

                if(mark.bills[i] < 100) {
                    tipAmount = calcTips(mark.bills[i], markTipping.twenty);
                    markTips.push(tipAmount);
                    totalAmount = mark.bills[i] + tipAmount;
                    markTotalAmounts.push(totalAmount);
                } else if(mark.bills[i] >= 100 && mark.bills[i] < 300) {
                    tipAmount = calcTips(mark.bills[i], markTipping.ten);
                    markTips.push(tipAmount);
                    totalAmount = mark.bills[i] + tipAmount;
                    markTotalAmounts.push(totalAmount);
                } else if(mark.bills[i] > 300) {
                    tipAmount = calcTips(mark.bills[i], markTipping.twentyFive);
                    markTips.push(tipAmount);
                    totalAmount = mark.bills[i] + tipAmount;
                    markTotalAmounts.push(totalAmount);
                }
            }
            
            markAvgTips = calcAverageTips(markTips);
    } 
}

function calcTips(billAmount, tipPercentage) {
    var tipAmount = billAmount * tipPercentage;
    return tipAmount;
}

function calcAverageTips(tipArray) {
    var totalTipAmount = 0;

    for(i = 0; i < tipArray.length - 1; i++) {
        totalTipAmount += tipArray[i];
    }
    
    var avgTip = totalTipAmount / tipArray.length;
    return avgTip;
}

console.log('markTips: ' + markTips);
console.log('johnTips: ' + johnTips);
console.log('markTotalAmounts: ' + markTotalAmounts);
console.log('johnTotalAmounts: ' + johnTotalAmounts);
console.log('markAvgTips: ' + markAvgTips);
console.log('johnAvgTips: ' + johnAvgTips);

if(johnAvgTips > markAvgTips) {
    console.log('John paid more in tips');
} else if(johnAvgTips < markAvgTips) {
    console.log('Mark paid more in tips');
} else {
    console.log('They paid the same in tips');
}