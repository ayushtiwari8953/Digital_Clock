const time = document.getElementById('time');
const timeformet = document.getElementById('timeformet');
document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showtime, 1000);
});

const showtime = () =>{
    let date = new Date();

    let hr =   date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    mins = mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${mins} : ${secs}`;

    timeformet.innerHTML = hr>12 ? "PM" : "AM";

    // console.log("hours: " + hr + "mins: " + mins + "secs: " + secs);

    time.innerHTML =`${hr} : ${min} : ${secs}`;
}


