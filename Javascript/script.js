let turn = 'X';
let changeturn =new Audio('../Music/changeturn.mp3');
let game_over = new Audio('../Music/gameover.mp3')
let gametied = new Audio('../Music/gametied.mp3')
gameover = false ;
let box = document.getElementsByClassName('box');

function checkwinortie(){
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i =0 ;i<8;i++){
        if(box[wins[i][0]].innerText== box[wins[i][1]].innerText && box[wins[i][2]].innerText == box[wins[i][1]].innerText && box[wins[i][0]].innerText !=''){
            document.getElementById("turnInfo").innerText = box[wins[i][0]].innerText + ' Won';
            for(j=0;j<3;j++){
                box[wins[i][j]].style.color = "violet";
            }
            game_over.play();
            gameover = true;
            return ;
        }
    }
    let count = 0;
    for(let i=0;i<box.length;i++){
        if(box[i].innerText == 'X' || box[i].innerText == 'O'){
            count=count+1;
        }
    }
    if(count==9){
        document.getElementById('turnInfo').innerText = 'Game Tied';
        gametied.play();
        gameover = true;
    }
}
for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',function run(){
        if(box[i].innerText == 'X' || box[i].innerText== 'O'){
            box[i].innerText = box[i].innerText;
        }
        else if(gameover==false) {
            box[i].innerText = turn ;
            if(turn== 'X'){
                turn = 'O';
            }
            else {
                turn = 'X';
            }
            checkwinortie();
        }
        if(gameover == false){
            let turnInfo = document.getElementById('turnInfo');
            changeturn.play();
            turnInfo.innerText = ("Turn For " +turn);
        }
    });
}
let reset = document.getElementById('reset');
reset.addEventListener('click',function run(){
    for(let i=0;i<box.length;i++){
        box[i].innerText = '';
    }
    let turnInfo = document.getElementById('turnInfo');
    turnInfo.innerText = ("Turn For X");
    turn ='X';
    gameover=false;
    for(let i=0;i<box.length;i++){
        box[i].style.color = "black";
    }
});
