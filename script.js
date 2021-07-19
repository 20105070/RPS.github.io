/*WDD Lab 8 - Daniel Syrén (20105070).js*/
function rps() {
    var p1;
    var p2;
    document.getElementById("btn").style.display = "none";
    p1 = prompt("Player 1, please enter rock, paper, or scissors:");
    if (p1 == "rock") {
        p2 = prompt("Player 2, please enter rock, paper, or scissors:");
        if (p2 == "rock") {
            alert("Player 1 and player 2 draw; rock equals rock!");
        } else if (p2 == "paper") {
            alert("Player 2 wins; paper beats rock!");
        } else if (p2 == "scissors") {
            alert("Player 1 wins; rock beats scissors!");
        } else {
            alert("Player 2 had an invalid input; retry!");
        }
    } else if (p1 == "paper") {
        p2 = prompt("Player 2, please enter rock, paper, or scissors:");
        if (p2 == "rock") {
            alert("Player 1 wins; paper beats rock!");
        } else if (p2 == "paper") {
            alert("Player 1 and player 2 draw; paper equals paper!");
        } else if (p2 == "scissors") {
            alert("Player 2 wins; scissors beats paper!");
        } else {
            alert("Player 2 had an invalid input; retry!");
        }
    } else if (p1 == "scissors") {
        p2 = prompt("Player 2, please enter rock, paper, or scissors:");
        if (p2 == "rock") {
            alert("Player 2 wins; rock beats scissors!");
        } else if (p2 == "paper") {
            alert("Player 1 wins; scissors beats paper!");
        } else if (p2 == "scissors") {
            alert("Player 1 and player 2 draw; scissors equals scissors!");
        } else {
            alert("Player 2 had an invalid input; retry!");
        }
    } else {
        alert("Player 1 had an invalid input; retry!");
    }
    document.getElementById("btn").style.display = "block";
}