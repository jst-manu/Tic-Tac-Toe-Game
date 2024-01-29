let boxes=document.querySelectorAll(".box");
let playAgain=document.querySelector("#playAgain");
let reset=document.querySelector("#reset");
let message=document.querySelector(".message");
let msg=document.querySelector("#msg");
let f=document.querySelector("#game");
let newGame=document.querySelector("#new");
let player1=document.querySelector("#p1");
let player2=document.querySelector("#p2");
let count1=0;
let count2=0;
let turnO=true;
const winpt=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    message.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        winner();    
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(win)=>{
    msg.innerText=`Congratulations Winner is '${win}'`;
    message.classList.remove("hide");
    disableBoxes();
    if(win==='O'){
        count1++;
        player1.innerText=count1;
    }
    else{
        count2++;
        player2.innerText=count2;
    }
    
};

const winner=()=>{
    for(let pattern of winpt){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                
            }
            
        }

    }

};

reset.addEventListener("click",resetGame);
playAgain.addEventListener("click",resetGame);
newGame.addEventListener("click",()=>{
    count1=0;
    count2=0;
    p1.innerText=count1;
    p2.innerText=count2;
});
newGame.addEventListener("click",resetGame);

