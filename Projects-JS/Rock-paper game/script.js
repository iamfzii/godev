const rockbtn = document.getElementById("rock-btn")
const paperbtn = document.getElementById("paper-btn")
const scissorbtn = document.getElementById("scissor-btn")

const userchoice = document.getElementById("user-choice")
const computerchoice = document.getElementById("computer-choice")
const result = document.getElementById("result")

const userscore = document.getElementById("user-score")
const computerscore = document.getElementById("computer-score")

let cmpscore = 0;
let usrscore = 0;


const increement = (string) => {
    if(string == "Computer"){
        cmpscore ++;
        computerscore.innerHTML = cmpscore;
    }
    else if (string == "User") {
        usrscore++;
        userscore.innerHTML = usrscore;
    }


}

const rungame = (name) => {
    const userinput = name;
    const values = ["Rock","Paper","Scissor"];

    const randomnum =Math.floor (Math.random() *3);
    const computerinput = values[randomnum];

    userchoice.innerHTML = "You Pick " + userinput;
    computerchoice.innerHTML = "Computer Pick " + computerinput;

    if (userinput == "Rock"){
        if(computerinput == "Rock"){
            result.innerHTML = "Draw"
        }
        else if (computerinput == "Paper"){
            result.innerHTML = "You Loose"
            increement("Computer");
        }
        else{
        result.innerHTML = "You Win";
        increement("User");

        }
    }

        if (userinput == "Paper"){
            if(computerinput == "Paper"){
                result.innerHTML = "Draw"
            }
            else if (computerinput == "Scissor"){
                result.innerHTML = "You Loose"
                increement("Computer");
            }
            else{
            result.innerHTML = "You Win";
            increement("User");
    
            }

        }

        if (userinput == "Scissor"){
            if(computerinput == "Scissor"){
                result.innerHTML = "Draw"
            }
            else if (computerinput == "Rock"){
                result.innerHTML = "You Loose"
                increement("Computer");
            }
            else{
            result.innerHTML = "You Win";
            increement("User");
    
            }

        }


}   



rockbtn.addEventListener("click", () => {
    rungame("Rock");
});

paperbtn.addEventListener("click", () => {
    rungame("Paper");
});

scissorbtn.addEventListener("click", () => {
    rungame("Scissor");
});

