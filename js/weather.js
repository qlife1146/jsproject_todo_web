const API_KEY = config.apiKey;

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-child(3)");
            const tem = document.querySelector("#weather span:last-child");
            const img = document.querySelector("#icon");
            // const imgNumber = ();
            city.innerText = data.name + "의 날씨";
            weather.innerText = data.weather[0].description + " / ";
            tem.innerText = `${data.main.temp} ℃`;
            img.style.backgroundImage = `url('https://openweathermap.org/img/wn/${data.weather[0].icon}.png')`;
        });

    console.log(fetch(url));
}

function onGeoError() {
    alert("Can't find you.");
}
const myCurrent = navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

console.log(myCurrent);
