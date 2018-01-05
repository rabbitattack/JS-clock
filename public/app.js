const secs = document.querySelector('.sec-hand');
const mins = document.querySelector('.min-hand');
const hrs = document.querySelector('.hour-hand');

function clockWork(params) {

    const now = new Date();

    const crntSecs = now.getSeconds();
    const secDeg = ((crntSecs / 60) * 360) + 90; 
    secs.style.transform = `rotate(${secDeg}deg)`;
    
    const crntMins = now.getMinutes();
    const minDeg = ((crntMins / 60) * 360) + 90;
    mins.style.transform = `rotate(${minDeg}deg)`;

    const crntHrs = now.getHours();
    const hrsDeg = ((crntHrs / 12) * 360) + 90;
    hrs.style.transform = `rotate(${hrsDeg}deg)`;



 }
 setInterval(clockWork, 1000);