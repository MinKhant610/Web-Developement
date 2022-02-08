const watch = document.getElementsByClassName('watch')[0]
const start = document.getElementsByClassName('start')[0]
const pause = document.getElementsByClassName('pause')[0]
const ongoing = document.getElementsByClassName('continue')[0]
const reset = document.getElementsByClassName('reset')[0]

let hours = 0 , minutes = 0, seconds = 0
let secondText , minuteText , hourText
let interval

const startTime = () => {
    seconds +=1
    if (seconds === 60) {
        seconds = 0 
        minutes +=1
    }
    if (minutes === 60) {
        minutes = 0 
        hours += 1 
    }
    secondText = seconds < 10 ? "0" + seconds.toString() : seconds
    minuteText = minutes < 10 ? "0" + minutes.toString() : minutes
    hourText = hours < 10 ? "0" + hours.toString() : hours
    watch.textContent = hourText + ":" + minuteText + ":" + secondText 
}

start.addEventListener ('click', () => {
    start.classList.add ('disabled')
    interval = setInterval(startTime, 1000)
})

pause.addEventListener('click', () => {
    clearInterval(interval)
})

ongoing.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTime, 1000)
})

reset.addEventListener('click', () => {
    clearInterval (interval)  
    seconds = 0 , minutes = 0 , hours = 0
    watch.textContent = '00:00:00'
    start.classList.remove ('disabled')
})

