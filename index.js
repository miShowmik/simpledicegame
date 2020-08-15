var randomNumber1=Math.floor(Math.random()*6) + 1;

var randomDiceImg="img/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , randomDiceImg);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImg2="img/dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImg2);

if(randomDiceImg>randomDiceImg2){
    document.querySelector("h1").innerHTML="player1 Wins";
}else if(randomDiceImg===randomDiceImg2){
    document.querySelector("h1").innerHTML="Its a Draw";
}else{
    document.querySelector("h1").innerHTML="player2 wins";
}
