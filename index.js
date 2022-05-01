var flag = 0
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) { 
    document.querySelectorAll(".drum")[i].addEventListener("click", soundClick);
    //document.querySelectorAll(".drum")[i].addEventListener("keypress",sound); //working, but not properly, 
                                                                                //have to press the button first
}   

document.addEventListener("keypress",soundKey);

function soundClick(){
    sound(this.innerHTML);
}
function soundKey(){
    sound(event.key);
}


function sound(pressedKey) {

    switch (pressedKey) {
        case "w":
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;

        case "a":
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;

        case "s":
            var audio1 = new Audio("sounds/snare.mp3");
            audio1.play();
            break;

        case "d":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;

        case "j":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;

        case "k":
            var audio1 = new Audio("sounds/tom-3.mp3");
            audio1.play();
            break;

        case "l":
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;

        default:
            break;
    }

    document.querySelector("."+pressedKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+pressedKey).classList.remove("pressed")
    },100)
}

//console.log(event.key); //returns pressed key




//Angela's code
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) { 
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         sound(this.innerHTML);
//     });
// }   

// document.addEventListener("keypress",function(event){
//     sound(event.key)
// });

// function sound(key) {
//     switch (key) {
//         case "w":
//             var audio1 = new Audio("sounds/crash.mp3");
//             audio1.play();
//             break;

//         case "a":
//             var audio1 = new Audio("sounds/kick-bass.mp3");
//             audio1.play();
//             break;

//         case "s":
//             var audio1 = new Audio("sounds/snare.mp3");
//             audio1.play();
//             break;

//         case "d":
//             var audio1 = new Audio("sounds/tom-1.mp3");
//             audio1.play();
//             break;

//         case "j":
//             var audio1 = new Audio("sounds/tom-2.mp3");
//             audio1.play();
//             break;

//         case "k":
//             var audio1 = new Audio("sounds/tom-3.mp3");
//             audio1.play();
//             break;

//         case "l":
//             var audio1 = new Audio("sounds/tom-4.mp3");
//             audio1.play();
//             break;

//         default:
//             break;
//     }
// }
























