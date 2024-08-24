alert("You entering the Gaming world ! (^_^)\nYou'll be given three options and you have to choose one Option-->");

var winner = 0;
var losser = 0;

while (true) {

    var computerChoice = Math.ceil(Math.random() * 3);
    let option = parseInt(prompt("Press 1 for ROCK\nPress 2 for PAPER\nPress 3 for SCISSOR"));

    while (isNaN(option) || option > 3 || option < 1) {
        option = parseInt(prompt("Invalid Input!!\nPress 1 for ROCK\nPress 2 for PAPER\nPress 3 for SCISSOR"));
    }

    if(computerChoice==1) {
        computerMove="ROCK";        
    }

    else if(computerChoice==2) {
        computerMove="PAPER";
    }

    else if(computerChoice==3) {
        computerMove="SCISSOR";
    }
    
    if(option==1) {
        userMove="ROCK";
    }

    else if(option==2) {
        userMove="PAPER";    
    }

    else if(option==3) {
        userMove="SCISSOR";

    }

    if ((option==1 && computerChoice==1) || (option==2 && computerChoice==2) || (option==3 && computerChoice==3)) {
            alert("You picked "+userMove+". Computer picked "+computerMove+"\nIt's a tie\nYou: "+winner+"\nComputer: "+losser);
    }
    
    else if ((option==1 && computerChoice==2) || (option==2 && computerChoice==3) || (option==3 && computerChoice==1)) {
        losser++;
        alert("You picked "+userMove+". Computer picked "+computerMove+"\nYou Lost!\nYou: "+winner+"\nComputer: "+losser);
    }

    else if ((option==1 && computerChoice==3) || (option==2 && computerChoice==1) || (option==3 && computerChoice==2)) {
        winner++;
        alert("You picked "+userMove+". Computer picked "+computerMove+"\nYou Win!\nYou: "+winner+"\nComputer: "+losser);
    }

    let userInput = confirm("Do you want to continue?");

    if(userInput==false) {
        break;
    }
}

if (winner>losser) {
    var result = "\nYou are a Winner!!\n ++Keep it Up++ ";
}

else if (winner<losser) {
    var result = "\n                      You Lost!!\n++Never Give up Try again Buddy!++";
}

else {
    var result = "Hurray! Nobody Wins";
}

alert("Final Score:\nYou: "+winner+"\nComputer: "+losser+"\n"+result);