let getSeconds = document.querySelector(".seconds")
let getTens = document.querySelector(".tens")
let getMins = document.querySelector(".min")
let btnStart = document.querySelector(".btn-start")
let btnStop = document.querySelector(".btn-stop")
let btnReset = document.querySelector(".btn-reset")
let btnLap = document.querySelector(".btn-lap")
let lapsList = document.getElementById("laps")


let interval

let seconds = 00
let tens  = 00
let mins = 00

let startSound = new Audio("tonkiy-metallicheskiy-zvuk.mp3")
let stopSound = new Audio("tihoe-chpokanie.mp3")
let resetSound = new Audio("schelchok-shumnyii.mp3")
let lapSound = new Audio ("schelchok-blizkii-chetkii.mp3")

btnStart.addEventListener('click',()=>{
    clearInterval(interval)
    interval=setInterval(startTimer,10)
    startSound.play()
})

btnStop.addEventListener('click',()=>{
    clearInterval(interval)
    stopSound.play()
})

btnReset.addEventListener('click', ()=>{
    clearInterval(interval)
    tens = 0
    seconds = 0
    mins = 0
    getTens.innerHTML = "00"
    getSeconds.innerHTML = "00"
    getMins.innerHTML = "00"
     lapsList.innerHTML = ""
    resetSound.play()
})

btnLap.addEventListener('click', ()=>{
    let lapTime = `${mins < 10 ? '0' + mins : mins}:${seconds < 10 ? '0' + seconds : seconds}:${tens < 10 ? '0' + tens : tens}`
    let lapItem = document.createElement("li")
    lapItem.textContent = lapTime
    lapsList.appendChild(lapItem)
    lapSound.play()
})
function startTimer(){
    tens++
    if(tens<=9){
        getTens.innerHTML="0"+tens
    }
    if(tens>9){
        getTens.innerHTML=tens
    }
    if(tens>99){
        seconds++
        getSeconds.innerHTML="0"+seconds
        tens=0
        getTens.innerHTML="0"+0
    }
    if(seconds>9){
        getSeconds.innerHTML=seconds
    }
    if(seconds>59){
        mins++;
        getMins.innerHTML="0"+mins
        seconds=0
        getSeconds.innerHTML="0"+0
    }
    if(mins>9){
        getMins.innerHTML=mins
    }
}
