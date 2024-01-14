const key="fd91b475a404f86734624895d5bbcb91";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.querySelector(".box input");
const btn=document.querySelector(".img");

async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${key}`);
    let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
    document.querySelector(".wi").innerHTML=data.wind.speed+"km/hr";
    document.querySelector(".hui").innerHTML=data.main.humidity;
    document.querySelector(".imgdiv").style.display="block";

}
btn.addEventListener("click",()=>{
    checkweather(search.value);
})


