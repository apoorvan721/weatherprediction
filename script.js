const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b55f9d0494msh896831dec5f758dp12cfd7jsn7c54326f4ded',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather= (city)=>{
    cityName.innerHTML = city
    cityName2.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
    .then((response) => {


        console.log(response)
        
        cloud_pct_mangalore.innerHTML = response.cloud_pct;
        temp_mangalore.innerHTML=response.temp;
        feels_like_mangalore.innerHTML = response.feels_like;
        humidity_mangalore.innerHTML = response.humidity;
        min_temp_mangalore.innerHTML = response.min_temp;
        max_temp_mangalore.innerHTML = response.max_temp;
        wind_degrees_mangalore.innerHTML = response.wind_degrees;
        sunrise_mangalore.innerHTML = response.sunrise;
        sunset_mangalore.innerHTML = response.sunset;
        wind_speed_mangalore.innerHTML= response.wind_speed;

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


