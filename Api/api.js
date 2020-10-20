const apiKey = '74dc1b39ecd27fc5bcbd4f66e6e6f7ce';
const city = 'Madrid';

let xhr = new XMLHttpRequest();


xhr.send();

xhr.onload = function () {
    if(xhr.status !== 200) {
        console.log(`Ha ocurrido un error con codigo ${xhr.status} y mensaje ${xhr.statusText}`);
    
    } else {
        //console.log('RESPUESTA',xhr,response);
        const parsedResponse = JSON.parse(xhr.response);
        console.log('RESPUESTA PARSEADA',parsedResponse);
        
    }
}

function accionBoton() {
    console.log('Has pulsado el botç´pon');

    const city = document.getElementById('meteo').value;
    console.log(city);

    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` );
    xhr.send();

    xhr.onload = function () {
        if(xhr.status !== 200) {
            console.log(`Ha ocurrido un error con codigo ${xhr.status} y mensaje ${xhr.statusText}`);
        
        } else {
            //console.log('RESPUESTA',xhr,response);
            const parsedResponse = JSON.parse(xhr.response);
            console.log('RESPUESTA PARSEADA',parsedResponse);
            
        }
}

}