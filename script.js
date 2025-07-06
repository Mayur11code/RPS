// const { createElement } = require("react");

// const { createElement } = require("react");

function getComputerChoice() {
    let no = Math.floor((Math.random() * 3)) + 1;

    let choice;
    switch (no) {
        case 1:
            choice = "ROCK";
            break;

        case 2:
            choice = "PAPER";
            break;
        case 3:
            choice = "SCISSOR";
            break;
    }

    return choice;
}

let humanScore = 0, computerScore = 0;



// function getHumanCHoice() {
//     // let h = prompt("ROCK, PAPER OR SCISSOR ?").toUpperCase();
//     return h;
// }

// REVISIT


// REVISIT



let round = 0;
function playround(hc, cc) {
    // console.log(hc,cc);

  
    // REVISIT BLOCK
    const msg = document.querySelector("p")
    if (msg) div.removeChild(msg) 
        
        
        
    const om = document.querySelector("#om")   
    if (om) div.removeChild(om)
    // REVISIT BLOCK


    const lol = document.createElement("div")
    lol.setAttribute("id","om")


    if (hc == cc) {  lol.textContent ="ITS A TIE DAMN " }
    else if (hc[0] == "R" && cc[0] == "P") {
        computerScore += 1;
        
         lol.textContent =("THAT BOT WINS THIS ONE LOL")
        // return "botwins"
    }
    else if (hc[0] == "R" && cc[0] == "S") {
        humanScore += 1;
         lol.textContent =("YOU WIN");
        // return "humanwins"
    }
    else if (hc[0] == "P" && cc[0] == "R") {
        humanScore += 1;
        lol.textContent =("YOU WIN");
        // return "botwins"
    }
    else if (hc[0] == "P" && cc[0] == "S") {
        computerScore += 1;
         lol.textContent =("BOT WINS");
        // return "botwins"
    }
    else if (hc[0] == "S" && cc[0] == "R") {
         lol.textContent =("COMPUTER WINS");
        computerScore += 1;
        // return "botwins"
    }
    else if (hc[0] == "S" && cc[0] == "P") {
        lol.textContent =("YOU WIN THIS ONE ");
        humanScore += 1;
        // return "humanwins";
    }
    else {
        // alert("false value detected, RETRY");
        round -= 1;
    }

    div.appendChild(lol)


}




// function playgame() {
//     if (round < 5) {
//         playround(getHumanCHoice(), getComputerChoice());
//         round += 1;
//         console.log(humanScore, computerScore);
//         playgame();
//     }
//     else if (humanScore > computerScore) {
//         alert("YOU WON");
//     }
//     else if (computerScore > humanScore) {
//         alert("YOU LOST TO A BOT AHAHAH");
//     }

//     else { alert("IT ALL ENDED WITH A DRAW"); }


// }

// playgame();




// REVISIT :

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const div = document.querySelector(".main")
const result = document.createElement("div")
div.appendChild(result)
result.textContent = `CURRENT SCORE : 
            HUMAN SCORE : ${humanScore}
            BOT SCORE :${computerScore}`





div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);

btn1.classList.toggle("button")
btn2.classList.toggle("button")
btn3.classList.toggle("button")

btn1.setAttribute("id", "btn1")
btn2.setAttribute("id", "btn2")
btn3.setAttribute("id", "btn3")


btn1.setAttribute("style", "margin :20px")
btn2.setAttribute("style", "margin :20px")
btn3.setAttribute("style", "margin :20px")



btn1.textContent = "ROCK";
btn2.textContent = "PAPER";
btn3.textContent = "SCISSOR" ;


// const button = document.querySelectorAll(".button");
// let b = Array.from(button);

// b.forEach((butt) => {
//     butt.addEventListener("click", (e) => {
//         console.log(e.target)

//     })
// })

// THE ABOVE ONE WAS AN ALTERNATIVE METHOD FOR ADDING EVENTLISTENERS TO MULTIPLE buttons



// METHOD 2 JAVASCRIPT EVENT DELEGATION
div.addEventListener("click", (e) => {
    // console.log(e.target)
    // console.log(e.target.id)
   
    switch (e.target.id) {
        case "btn1":
            h = "ROCK"
            break;
        case "btn2":
            console.log("HEY");
            h = "PAPER"
            break;

        case "btn3":
            h = "SCISSOR"
            break;
    }

    playround(h, getComputerChoice());

    result.textContent = `CURRENT SCORE : 
            HUMAN SCORE : ${humanScore}
            BOT SCORE :${computerScore}`
    if (humanScore == 5) {
        const msg = document.createElement("p")
        msg.textContent = "YOU WON UNFORTUNATELY, CLICK TO RESTART THE GAME"
        div.appendChild(msg)
        humanScore = 0;
        computerScore = 0;
        const om = document.querySelector("#om")   
        if (om) div.removeChild(om)

    }
    if (computerScore == 5) {
        console.log("BOT WINS, click to play again")
        const msg = document.createElement("p")
        msg.textContent = "THAT ROBOT WON NOOB, CLICK ANYWHERE TO RESTART THE GAME"
        div.appendChild(msg)
        computerScore = 0;
        humanScore = 0;
        const om = document.querySelector("#om")   
        if (om) div.removeChild(om)

    }

})
