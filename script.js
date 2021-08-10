/*WDD Lab 10 - Daniel Syrén (20105070).js*/
var computer;
var inputs = [];
var max = 3;
var number;
var player;

function RPS() {
    document.getElementById("btn").style.display = "none";
    inputs = [];
    for (i = 0; i < 5; i++) {
        player = prompt("Please enter rock, paper, or scissors:");
        inputs.push(player);
        number = Math.floor(Math.random() * max) + 1;
        if (number == 1) {
            computer = "rock";
        } else if (number == 2) {
            computer = "paper";
        } else {
            computer = "scissors";
        }
        if (player == "rock") {
            if (computer == "rock") {
                alert("Player and computer draw; rock equals rock!");
            } else if (computer == "paper") {
                alert("Computer wins; paper beats rock!");
            } else {
                alert("Player wins; rock beats scissors!");
                break;
            }
        } else if (player == "paper") {
            if (computer == "rock") {
                alert("Player wins; paper beats rock!");
                break;
            } else if (computer == "paper") {
                alert("Player and computer draw; paper equals paper!");
            } else {
                alert("Computer wins; scissors beats paper!");
            }
        } else if (player == "scissors") {
            if (computer == "rock") {
                alert("Computer wins; rock beats scissors!");
            } else if (computer == "paper") {
                alert("Player wins; scissors beats paper!");
                break;
            } else {
                alert("Player and computer draw; scissors equals scissors!");
            }
        } else {
            alert("Player had an invalid input; retry!");
        }
    }
    alert("Player entered: " + inputs.join(", ") + ".");
    document.getElementById("btn").style.display = "block";
}