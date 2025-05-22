 let boxes= document.querySelectorAll(".box");
 let reset=document.querySelector("#reset");
 let newgame=document.querySelector(".newgame");
 let msg=document.querySelector(".msg");
 let popup=document.querySelector(".popup");

 const winNum=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [6,4,2],

 ];
 
 let press=true;

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(press){
        box.innerText="X";
        press=false; 
        } else{
            box.innerText="O";
            press=true;
        }
        box.disabled=true;
        checkWinner();
    });
 });

  const showWinner =(val1)=>{
    msg.innerText=`congratulation's winner is  ${val1}`;
     popup.classList.remove("hide");
     boxesdes();
  }

  const boxesdes =()=>{
    for(let box of boxes)
    box.disabled=true;
  }

  const resetGame =()=> {
    turno=true;
    boxen ();
    popup.classList.add("hide");
}

const boxen =()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

 const checkWinner =()=>{
    for(let list of winNum){
         let val1=boxes[list[0]].innerText;
         let val2=boxes[list[1]].innerText;
         let val3=boxes[list[2]].innerText;
    if(val1 !== "" && val2 !=="" && val3 !==""){
        if(val1===val2 && val2===val3 ){
            console.log("winner",val1)
           showWinner(val1);
        }
    }

     }
   }

     newgame.addEventListener( "click",resetGame);
      reset.addEventListener("click",resetGame);