const clock = document.querySelector("#clock"); // || h2#clock

const getClock = () => {
    const date = new Date();
    let hr = String(date.getHours()).padStart(2, "0");
    let min = String(date.getMinutes()).padStart(2, "0");
    let sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hr}:${min}:${sec}`;
};

setInterval(getClock, 1);
