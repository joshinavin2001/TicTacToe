console.log("Welcome To TicTacToe")
let music=new Audio("music.mp3")
let GameOver = new Audio("gameover.mp3")
let audioTurn=new Audio("ting.mp3")
 let turn="X"
//Function to change Turn//
const ChangeTurn=()=>{
    return turn==="X"?"0":"X"
}
//Function to Win Game //
const WinGame=()=>{

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
            info.innerText="Turn For "+turn
        }
    })
 })