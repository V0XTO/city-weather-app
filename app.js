class Api{
constructor(){}

pagePrevent(){
    let message= `

    <figure class="message_img"> <img src="/icons/mapa.png"> </figure>
    <br>
    <h3 class="busca">Search any city in the world</h3>`;
    document.getElementById("container").innerHTML=message
}

async loadPage(city, codeC){

    const apiK= 'd99b7412556496825241d12e59ec639c';
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${codeC}&appid=${apiK}`);
    let responseJ=await  response.json()


    let img;
if(responseJ.weather[0].main== "Mist"){
img= '/images/mist.png'
}else if(responseJ.weather[0].main=="Clear"){
img= '/images/clear.png'
    
}
else if(responseJ.weather[0].main=="Clouds"){
    img= '/images/clouds.png'
        
    }else if(responseJ.weather[0].main=="Drizzle"){
        img= '/images/drizzle.png'
            
        }else if(responseJ.weather[0].main=="Humidity"){
            img= '/images/humidity.png'
                
            }
            else if(responseJ.weather[0].main=="Rain"){
                img= '/images/rain.png'
                    
                }else if(responseJ.weather[0].main=="Snow"){
                    img= '/images/snow.png'
                        
                    }else if(responseJ.weather[0].main=="Wind"){
                        img= '/images/wind.png'
                            
                        }



    try {
        if(response.status===401){
            console.log("la key es incorrecta")
        }else if(response.status ===404){
            console.log("la ciudad es no se ha encontrado")
        }else if(response.status===200){


            console.log(responseJ)
            let div =`
            
            <figure class="figure"><img src="${img}"></figure>
            <h3 class="cityT">${Math.trunc(responseJ.main.temp - 273.15)}°</h3>

            <h3 class="cityN">${responseJ.name}</h3>
            <h3 class="cityS">${responseJ.weather[0].description}</h3>

            
            
            
            `;
            document.getElementById("container").innerHTML= div;

            

        
        }else{
            console.log("Error no encontrado")
        }
    } catch (error) {
        
    }
    
    

}
}

const weather=new Api();
weather.pagePrevent();



document.getElementById("form").addEventListener("submit", e=>{
    e.preventDefault()
    let valor = document.getElementById("city").value;

    weather.loadPage(valor, 502)
})
