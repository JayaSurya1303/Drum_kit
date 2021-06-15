
var noOfDrums = document.querySelectorAll(".btn").length;

for( var i=0; i<noOfDrums; i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {

        var buttonOfDrum = this.innerHTML;
        playSound(buttonOfDrum);
        buttonAnimation(buttonOfDrum);
    });
   
}

document.addEventListener("keydown", function(event) {

    var keyOfDrum = event.key;
    playSound(keyOfDrum);
    buttonAnimation(keyOfDrum);

});


 function playSound(key) {

    switch (key) {
        case "W":
            var audio = new Audio("sounds/sound1.wav");
            audio.play();
            break;

        case "A":
            var audio = new Audio("sounds/sound2.wav");
            audio.play();
            break;
            
        case "S":
            var audio = new Audio("sounds/sound3.wav");
            audio.play();
            break;

        case "D":
            var audio = new Audio("sounds/sound4.wav");
            audio.play();
            break;

        case "J":
            var audio = new Audio("sounds/sound5.wav");
            audio.play();
            break;

        case "K":
            var audio = new Audio("sounds/sound6.wav");
            audio.play();
            break;

        case "L":
            var audio = new Audio("sounds/sound7.wav");
            audio.play();
            break;

        default:
           console.log(buttonOfDrum);
    }
 }

 function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);


 }