console.log("Welcome To TicTacToe")
let music=new Audio("music.mp3")
let GameOver = new Audio("gameover.mp3")
let audioTurn=new Audio("ting.mp3")
 let turn="X"
 let isgameover=false
//Function to change Turn//
const ChangeTurn=()=>{
    return turn==="X"?"0":"X"
}
//Function to Win Game //
const WinGame=()=>{
    let boxText=document.getElementsByClassName("box_text")
    let image=document.querySelector(".image img")
   let winnigCondition=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
   ]
   winnigCondition.forEach(e=>{
    if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[2]].innerText===boxText[e[1]].innerText)&&boxText[e[0]].innerText!==""){

         document.querySelector(".info").innerText=boxText[e[0]].innerText+ " won"
         isgameover=true
         image.style.width="45%"
        //  image.style.display="block"
       
    }
   })
}
// Game Logic //
 let boxes=document.getElementsByClassName("box")
 let info=document.querySelector(".info")
 Array.from(boxes).forEach(elem=>{
    let boxText=elem.querySelector(".box_text")
    elem.addEventListener("click",()=>{
        if(boxText.innerText==""){
            boxText.innerText=turn
            turn=ChangeTurn()
            audioTurn.play()
            WinGame()
           if(!isgameover){
            // console.log(`${turn}is winer`)
            info.innerText="Turn For "+turn
           }
           
        }
    })  
 })

 //reset game //
 let boxText=document.getElementsByClassName("box_text")
//  let boxtext=document.getElementsByClassName("box_text")
 let btn=document.querySelector(".btn")
 let image=document.querySelector(".image img")
 btn.addEventListener("click",function(){
    Array.from(boxText).forEach(element=>{
      element.innerText=""

    })
    if(turn==="0"){
       
        info.innerText="Turn For 0 "
    }else{
       
        info.innerText="Turn For X "
    }
    // info.innerText="Turn For X "
    // boxText.style.display="none"
    image.style.width="0%"
    
    
   
   
 })