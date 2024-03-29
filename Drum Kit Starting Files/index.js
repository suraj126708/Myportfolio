var btnLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < btnLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        makeSound(text) ;
        keyAnimation(text) ;

    });
}

document.addEventListener("keypress" , function(event) {

makeSound(event.key);
keyAnimation(event.key);
});


function makeSound(key) {

        switch (key) {
            case "a":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "f":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
                case "j":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            default:
                console.log(event.key);
                break;
        }

}

function keyAnimation(keys) {

   var activeKey = document.querySelector("." + keys);

   activeKey.classList.add("pressed");

   setTimeout(function() {
    activeKey.classList.remove("pressed");
   }, 100);
}