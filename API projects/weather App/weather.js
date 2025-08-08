 let searchBox = document.querySelector(".search input");  //acces input box
  let searchBtn = document.querySelector(".search button"); ////acces button 
   let weather_Icon = document.querySelector(".weather-icon");

   const api_key = "b6102e11f0ee120cc6782ea627f74f0d"
   const api_url = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";


   console.log();
   

   async function checkWeather(city) {

    let response = await fetch(api_url+ city + `&appid=${api_key}`);
  
    if(searchBox.value === " "){
    alert("Please Enter a location ");
    }
     else if(response.status === 404){ // if the city name is invalid then it will give the status is 404
        document.querySelector(".err").style.display = "block";  //error image will be display 
        document.querySelector(".weather").style.display = "none"; // weather container will be hide        
        searchBox.value = " ";   

     }else{
     
    let data = await response.json();
 
   let cel = data.main.temp - 271.1;
     document.querySelector(".city").innerHTML = `${data.name}<span>(${data.sys.country})</span>`;                     //Acces city class & update there city name
   // document.querySelector(".temp").innerHTML = Math.round(data.main.temp);        //Acces temp class & update there temprature
       document.querySelector(".temp").innerHTML = Math.round(cel) + "°C";        //Acces temp class & update there temprature

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";//Acces humdity class & update there humidity and add %
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";  //Acces wind class & update there wind speed and add km/hr

    //update wether icon according to weather condition
    
  if(data.weather[0].main === "Clouds"){ //here condition of weather location
   weather_Icon.src = "https://i.pinimg.com/474x/8c/24/fb/8c24fbe706978ac0387178261de18e7c.jpg";
   
  }
   else if(data.weather[0].main === "Clear"){ //here condition location
   weather_Icon.src = "https://image.pngaaa.com/767/5232767-middle.png";
  }
  else if(data.weather[0].main === "Rain"){ //here  weather condition location
   weather_Icon.src = "https://png.pngtree.com/png-vector/20210128/ourlarge/pngtree-thunderstorm-rainy-weather-png-image_2849609.jpg";
  }
  else if(data.weather[0].main === "Drizzle"){ //here  weather condition location
   weather_Icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3W6t21h7uHwqzTcQGQazHTrgPKPsRjKanZg&s";
  }
  else if(data.weather[0].main === "Mist"){ //here  weather condition location
   weather_Icon.src = "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png";
    }
     document.querySelector(".err").style.display = "none";  //error image will be hide 
     document.querySelector(".weather").style.display = "block";   // weather container will be display
 }
     searchBox.value = " ";
}

  searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
  })
