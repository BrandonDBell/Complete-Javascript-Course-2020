var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI, results, resultString;
markMass = 70;
markHeight = 1.72;
johnMass = 85;
johnHeight = 1.83;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

results = markBMI > johnBMI;
resultString = 'Is Mark\'s BMI higher than John\'s? ' + results;
console.log(resultString);