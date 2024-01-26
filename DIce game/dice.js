let randomNumber1 =Math.floor(Math.random()*6 + 1);

let newChosenLeft = "images/dice"+ randomNumber1 + ".png"
document.querySelector(".img1").setAttribute('src',newChosenLeft);


let randomNumber2 =Math.floor(Math.random()*6 + 1);

let newChosenRight = "images/dice"+ randomNumber2 + ".png"
document.querySelector(".img2").setAttribute('src',newChosenRight);


let rewrite = document.querySelector('.container h1');

randomNumber1>randomNumber2?rewrite.innerHTML="firstwon":rewrite.innerHTML="secondwon";
if(randomNumber1==randomNumber2)
    rewrite.innerHTML="draw";




// var randomNumber1 = Math.floor(Math.random()*6) +1;

// var randomNumber2 = Math.floor(Math.random()*6) +1;

// document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1+".png");

// document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2+".png");