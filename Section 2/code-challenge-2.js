var johnGameOne = 89;
var johnGameTwo = 120;
var johnGameThree = 103;
var mikeGameOne = 116;
var mikeGameTwo = 94;
var mikeGameThree = 123;
var maryGameOne = 97;
var maryGameTwo = 134;
var maryGameThree = 105;

var averageJohnGameScore = (johnGameOne + johnGameTwo + johnGameThree) / 3;
console.log(averageJohnGameScore);
var averageMikeGameScore = (mikeGameOne + mikeGameTwo + mikeGameThree) / 3;
console.log(averageMikeGameScore);
var averageMaryGameScore = (maryGameOne + maryGameTwo + maryGameThree) / 3;
console.log(averageMaryGameScore);

if((averageJohnGameScore > averageMikeGameScore) && (averageJohnGameScore > averageMaryGameScore)) {
    console.log('John\s team had a higher average: ' + averageJohnGameScore);
} else if((averageMikeGameScore > averageJohnGameScore) && (averageMikeGameScore > averageMaryGameScore)) {
    console.log('Mike\s team had a higher average: ' + averageMikeGameScore); 
} else if((averageMaryGameScore > averageJohnGameScore) && (averageMaryGameScore > averageMikeGameScore)) {
    console.log('Mary\s team had a higher average: ' + averageMAryGameScore); 
} else {
    console.log('All teams tied. John\'s score: ' + averageJohnGameScore + 
    '. Mike\'s score: ' + averageMikeGameScore + '. Mary\'s score: ' + averageMaryGameScore);
} 
