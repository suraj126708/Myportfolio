
var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);

var randomImg1 = "./images/dice" + randomNum1 + ".png";
var randomImg2 = "./images/dice" + randomNum2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "player1 Wins ...";
}
else if (randomNum1 === randomNum2) {
    document.querySelector("h1").innerHTML = "Match Draws ....";
} else {
    document.querySelector("h1").innerHTML = "player2 Wins ...";

}

document.querySelector("button").addEventListener("click", function() {

     location.reload();
     var audio = new Audio("images/tom-1.mp3");
     audio.play();


});



