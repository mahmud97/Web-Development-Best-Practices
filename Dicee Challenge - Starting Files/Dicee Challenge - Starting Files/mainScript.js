
var firstDiceRandomNumber = Math.floor(Math.random() * 6)+ 1;
var firstDiceRandomImage = "images/dice" + firstDiceRandomNumber +".png";
var firstDiceImage = document.querySelectorAll("img")[0];
firstDiceImage.setAttribute("src",firstDiceRandomImage);

var secondDiceRandomNumber = Math.floor(Math.random() * 6)+ 1;
var secondDiceRandomImage = "images/dice" + secondDiceRandomNumber +".png";
var secondDiceImage = document.querySelectorAll("img")[1];
secondDiceImage.setAttribute("src",secondDiceRandomImage);

if(firstDiceRandomNumber>secondDiceRandomNumber)
{
    document.querySelector("h1").innerHTML ="1st player wins";   
}
else if(firstDiceRandomNumber<secondDiceRandomNumber)
{
    document.querySelector("h1").innerHTML ="2nd player wins"; 
}
else{
    document.querySelector("h1").innerHTML ="Match drawn "; 
}