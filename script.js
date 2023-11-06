const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


const countDownDate = new Date("Mar 26, 2024 08:00:00").getTime();
const x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let daysNum = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hoursNum = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesNum = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondsNum = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = daysNum;
    hours.innerHTML = hoursNum;
    minutes.innerHTML = minutesNum;
    seconds.innerHTML = secondsNum;
    
    console.log(daysNum);

}, 1000);