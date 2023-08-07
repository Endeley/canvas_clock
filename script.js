const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')

function updateClock() {
    const currentDate = new Date()
    setTimeout(updateClock, 1000)
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()

    const hourCount = (hour / 12) * 360
    hourHand.style.transform = `rotate(${hourCount}deg)`
    const minuteCount = (minute / 60) * 360
    minuteHand.style.transform = `rotate(${minuteCount}deg)`
    const secondCount = (second / 60) * 360
    secondHand.style.transform = `rotate(${secondCount}deg)`
}

updateClock()
