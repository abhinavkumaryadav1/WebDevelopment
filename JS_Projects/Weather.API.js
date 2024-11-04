document.addEventListener('DOMContentLoaded',()=>{

    const container = document.querySelector('.container')
    const inputcontainer = document.querySelector('.input-container')
    const cityinput = document.querySelector('#city-input')
    const weatherbtn = document.querySelector('#get-weather-btn')
    const weatherinfo = document.querySelector('#weather-info')
    const citydisplay = document.querySelector('#city-name')
    const tempraturedisplay = document.querySelector('#temperature')
    const discriptiondisplay = document.querySelector('#description')
    const errormsg = document.querySelector('#error-message')

    const API_KEY = "c74b555bc6bb443cb18b1b83a8f38586" // API KEY from openweather website.
    
    weatherbtn.addEventListener('click',async ()=>{
        let city = cityinput.value.trim()
        if(!city) return ;

        try {
            const weatherdata = await fetchweatherdata(city)
            displayweatherdata(weatherdata);
        } 
        catch (error) {
            showerror()
        }
    })



async function fetchweatherdata(city){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const responce = await fetch(URL)
    // console.log(typeof responce);
    // console.log(responce);
    
    

    if(!responce.ok) {
         throw new showerror("city not found")
    }

    const data = await responce.json()
    return data;
    
    

}
function displayweatherdata(data){
 
    console.log(data);
    const {name, main , weather} = data

    citydisplay.textContent = name
    tempraturedisplay.textContent = `Temprature: ${(main.temp)-273.15}`  //for celsius
    discriptiondisplay.textContent = `Weather: ${weather[0].description}`; 

    weatherinfo.classList.remove("hidden")
    errormsg.classList.add("hidden")

}

function showerror(){
    weatherinfo.classList.remove('hidden')
    errormsg.classList.add('hidden')
}

})