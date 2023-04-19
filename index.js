const search = document.querySelector('.search-box button');
const typing = document.querySelector('.search-box input');
const weatherBox = document.querySelector('.weather-box');


// start - date
const date1 = document.querySelector('.header .day-1');
const month1 = document.querySelector('.header .month-1');
const date2 = document.querySelector('.header-2 .day-1');
const date3 = document.querySelector('.header-3 .day-1');

var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date();
let day = date.getDate();


var dayName = days[date.getDay()];

var monthName = month[date.getDay()];
// console.log(monthName);
let currentDate = `${day}`;

date1.innerHTML = `${dayName}`;
month1.innerHTML = `${day}${monthName}`;

var dayName2 = days[date.getDay() +1];
date2.innerHTML = `${dayName2}`;

var dayName3 = days[date.getDay() +2];
date3.innerHTML = `${dayName3}`;


// end - date






typing.addEventListener("input" , async function (){

    const city = document.querySelector('.search-box input').value;
    if (city === '')
        return;
        var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=aa157715372d450bb70224231232302&q=${city}&days=7`)
        var finalres = await res.json();

// start - today - section

        const image = document.querySelector('.temperature img');
        const temperature = document.querySelector('.weather-box h2');
        const description = document.querySelector('.weather-box .description');
        const location = document.querySelector('.weather-box .location');





        location.innerHTML = `${finalres.location.country}`;
        temperature.innerHTML = `<h2>${parseInt(finalres.current.temp_c)}<sup>o</sup>C</h2>`;

        // weather-Images
       
        if(finalres.current.condition.text.includes("snow") == true){
            image.src = 'img/snow2.png';
        }
        if(finalres.current.condition.text.includes("Clear") == true){
            image.src = 'img/clear.png';
        }
        if(finalres.current.condition.text.includes("Sunny") == true){
            image.src = 'img/clear.png';
        }
        if(finalres.current.condition.text.includes("Overcast") == true){
            image.src = 'img/116.png';
        }
        if(finalres.current.condition.text.includes("cloud") == true){
            image.src = 'img/cloud.png';
        }
        if(finalres.current.condition.text.includes("rain") == true){
            image.src = 'img/rain.png';
        }
        if(finalres.current.condition.text.includes("Mist") == true){
            image.src = 'img/mist.png';
        }



        

        description.innerHTML = `${finalres.current.condition.text}`;
// end - today - section


// start - tomorrow - section


const imageTom = document.querySelector('.weth-logo img');

        // weather-Images
       
        if(finalres.forecast.forecastday[1].day.condition.text.includes("snow") == true){
            imageTom.src = 'img/snow2.png';
        }
        if(finalres.forecast.forecastday[1].day.condition.text.includes("Clear") == true){
            imageTom.src = 'img/clear.png';
        }
        if(finalres.forecast.forecastday[1].day.condition.text.includes("Sunny") == true){
            imageTom.src = 'img/clear.png';
        }
        if(finalres.forecast.forecastday[1].day.condition.text.includes("Overcast") == true){
            imageTom.src = 'img/116.png';
        }
        if(finalres.forecast.forecastday[1].day.condition.text.includes("cloud") == true){
            imageTom.src = 'img/cloud.png';
        }
        if(finalres.forecast.forecastday[1].day.condition.text.includes("rain") == true){
            imageTom.src = 'img/rain.png';
        }
        if(finalres.forecast.forecastday[1].day.condition.text.includes("Mist") == true){
            imageTom.src = 'img/mist.png';
        }

const tempTom = document.querySelector('.degree-2 h2');
const mintempc = document.querySelector('.degree-2 p');
const temptext = document.querySelector('.deg-det p');

tempTom.innerHTML = `<h2>${parseInt(finalres.forecast.forecastday[1].day.maxtemp_c)}<sup>o</sup>C</h2>`;
mintempc.innerHTML = `<p>${parseInt(finalres.forecast.forecastday[1].day.mintemp_c)}<sup>0</sup></p>`;
temptext.innerHTML = `${finalres.forecast.forecastday[1].day.condition.text}`;
// end - tomorrow - section


// start - after tomorrow - section

const imageAftTom = document.querySelector('.weth-logo-2 img');

        // weather-Images
       
        if(finalres.forecast.forecastday[2].day.condition.text.includes("snow") == true){
            imageAftTom.src = 'img/snow2.png';
        }
        if(finalres.forecast.forecastday[2].day.condition.text.includes("Clear") == true){
            imageAftTom.src = 'img/clear.png';
        }
        if(finalres.forecast.forecastday[2].day.condition.text.includes("Sunny") == true){
            imageAftTom.src = 'img/clear.png';
        }
        if(finalres.forecast.forecastday[2].day.condition.text.includes("Overcast") == true){
            imageAftTom.src = 'img/116.png';
        }
        if(finalres.forecast.forecastday[2].day.condition.text.includes("cloud") == true){
            imageAftTom.src = 'img/cloud.png';
        }
        if(finalres.forecast.forecastday[2].day.condition.text.includes("rain") == true){
            imageAftTom.src = 'img/rain.png';
        }
        if(finalres.forecast.forecastday[2].day.condition.text.includes("Mist") == true){
            imageAftTom.src = 'img/mist.png';
        }




const tempafTom = document.querySelector('.degree-3 h2');
const afmintempc = document.querySelector('.degree-3 p');
const aftemptext = document.querySelector('.aft p');

tempafTom.innerHTML = `<h2>${parseInt(finalres.forecast.forecastday[2].day.maxtemp_c)}<sup>o</sup>C</h2>`;
afmintempc.innerHTML = `<p>${parseInt(finalres.forecast.forecastday[2].day.mintemp_c)}<sup>0</sup></p>`;
aftemptext.innerHTML = `${finalres.forecast.forecastday[2].day.condition.text}`;
// end - after tomorrow - section

})






