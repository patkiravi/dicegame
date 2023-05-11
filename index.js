let nameOfPlayer1;
let nameOfPlayer2;

let randomNumber1;
let randomNumber2;

function editNames(){
  nameOfPlayer1=prompt("Enter the Player 1 Name");
  nameOfPlayer2=prompt("Enter the Player 2 Name");

  document.querySelectorAll("p")[0].innerHTML=nameOfPlayer1;
  document.querySelectorAll("p")[1].innerHTML=nameOfPlayer2;
}

function rollDice(){
randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
  //plaer 1 wins
  document.querySelector("h1").innerHTML=nameOfPlayer1+" wins!!!";
}else if(randomNumber1<randomNumber2){
  //payer 2 wins
  document.querySelector("h1").innerHTML=nameOfPlayer2+" wins!!!";
}else{
  //draw
  document.querySelector("h1").innerHTML="DRAW !!!";
}

}


document.querySelectorAll("button")[0].addEventListener("click", editNames);

document.querySelectorAll("button")[1].addEventListener("click",rollDice);
