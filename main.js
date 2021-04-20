const newYears = '1 Jan 2022'
const daysEl = document.getElementById('days')
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const hoursEl = document.getElementById('hours');

function  countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days,hours,minutes,seconds);
    daysEl.innerHTML = days;
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    hoursEl.innerHTML = formatTime(hours);

}
function formatTime(time) {
    return  time < 10 ?  `0${time}` : time;
}
countdown()
setInterval(countdown, 1000);

