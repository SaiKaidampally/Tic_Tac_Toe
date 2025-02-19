const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('#reset');
const newGame = document.querySelector('#new-btn');
const msgCont = document.querySelector('.msg-container');
console.log(msgCont)
const msg = document.querySelector('#msg');
let turnO = true;
let count = 0;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        count+=1
        console.log("Box is Clicked",count)
        if(turnO){
            box.innerText= "O";
            turnO=false;
            checkWinner();
        }
        else{
            box.innerText="X";
            turnO=true;
            checkWinner();
        }
        box.disabled=true;
    });
    
});
const results = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

const disablegame = () =>{
    for(box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner)=>{
    console.log(`Winner is ${winner}`);
    disablegame();
    msgCont.classList.remove('hide');
    msg.innerText = `Winner is ${winner}`;
};



const checkWinner= ()=>{
   hasWin=false;
   for(pattern of results){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
   
   if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            showWinner(pos1Val);
        }else if(count==9){
            msgCont.classList.remove('hide');
        msg.innerText = 'Draw';
        }
   }
}
};


const enablegame = () =>{
    turnO = true;
    count = 0
    msgCont.classList.add('hide');
    for(box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
};
reset.addEventListener('click',enablegame);
newGame.addEventListener('click',enablegame);
