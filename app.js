var image = document.querySelector("#image");
var output = document.querySelector("#outputDiv");
var num = 0;

function heads(){
    num = Math.ceil(Math.random(num) * 2)
    output.innerHTML = num

    if(num === 1){
        output.innerHTML = "<p>Opponent Choose Tails <br> You won the toss 🥳</p>"
    }
    else{
        output.innerHTML = "<p>Opponent Choose Tails <br> You lost the toss 😭</p>"
    }

    if(num === 1){
        image.src = "./Heads-image.jpg"
    }
    else{
        image.src = "./Tails-image.jpg"
    }
}

function tails(){
    num = Math.ceil(Math.random(num) * 2)
    output.innerHTML = num

    if(num === 2){
        output.innerHTML = "<p>Opponent Choose Heads <br> You won the toss 🥳</p>"
    }
    else{
        output.innerHTML = "<p>Opponent Choose Heads <br> You lost the toss 😭</p>"
    }

    if(num === 2){
        image.src = "./Tails-image.jpg"
    }
    else{
        image.src = "./Heads-image.jpg"
    }
}