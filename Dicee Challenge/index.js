var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImg = "dice"+randomNumber1+".png";
var randomImg2 = "dice"+randomNumber2+".png";

var randomImgSrc = "images/" + randomImg;
var randomImgSrc2 = "images/" + randomImg2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];



image1.setAttribute("src", randomImgSrc);
image2.setAttribute("src", randomImgSrc2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else{
    document.querySelector("h1").innerHTML = "Draw!";
};

