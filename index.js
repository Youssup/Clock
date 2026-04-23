const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate()
{
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    
    const hourDegree = (currentHour / 12) * 360;
    const minuteDegree = (currentMinute / 60) * 360;
    const secondDegree = (currentSecond / 60) * 360;

    hour.style.transform = `rotate(${hourDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    second.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(setDate, 1000);