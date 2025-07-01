function getComputerChoice(){
    let no = Math.floor((Math.random()*3))+1;
    
    let choice;
    switch (no){
        case 1:
            choice ="ROCK";
            break;
            
        case 2:
            choice = "PAPER";
            break;
        case 3 :
            choice ="SCISSOR";
            break;   
    }
    
    return choice;
}

let humanScore=0,computerScore=0;



function getHumanCHoice(){
    let h=prompt("ROCK, PAPER OR SCISSOR ?").toUpperCase();
    return h;
}

 let round = 0;
function playround(hc,cc){
    // console.log(hc,cc);

    if(hc==cc){console.log("ITS A TIE DAMN ")}
    else if(hc[0]=="R"&& cc[0]=="P"){computerScore+=1;
        console.log("THAT BOT WINS THIS ONE LOL")
    }
    else if(hc[0]=="R" && cc[0]=="S" ){
        humanScore+=1;
        console.log("YOU WIN");
    }
    else if(hc[0]=="P" && cc[0]=="R"){
        humanScore+=1;
        console.log("YOU WIN");
    }
    else if(hc[0]=="P" && cc[0]=="S"){
        computerScore+=1;
        console.log("BOT WINS");
    }
    else if(hc[0]=="S" && cc[0]=="R")
    {
        console.log("COMPUTER WINS");
        computerScore+=1;
    }
    else if (hc[0]=="S" && cc[0]=="P"){
        console.log("YOU WIN THIS ONE ")
        humanScore+=1;
    }
    else{
     alert("false value detected, RETRY")
     round-=1;
    }
    
}




function playgame(){
    if(round<5){
        playround(getHumanCHoice(),getComputerChoice());
        round+=1;
        console.log(humanScore,computerScore);
        playgame();
    }
    else if (humanScore>computerScore){
        alert("YOU WON");
    }
    else if(computerScore>humanScore) {
        alert("YOU LOST TO A BOT AHAHAH");}

    else{ alert("IT ALL ENDED WITH A DRAW");}   
    
    
}

playgame();