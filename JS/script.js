let tempera = document.getElementById('temperature');
let temperaa;
let fahrentempera = document.getElementById('fahrenheit');


function savetempera(e){
  

}





function convertCelciustoFahrenheit(){
    try{    
        if(document.getElementById("temperature").value==""){
            alert("Please enter a temperature value");
            return;
        }else{
            let celsius = document.getElementById("temperature").value;
            let fahrenheit = (celsius * 9/5) + 32;
            document.getElementById('fahrenheit').value = fahrenheit;
            document.getElementById('calculationMethod').value= `(${celsius}*9/5)+32`;
        }
    }catch(error){
        alert("An error occurred: " + error.message);
    }

}

function resetvalue(){
    document.getElementById('temperature').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('calculationMethod').value = "";
}


function convertFahrenheittoCelcius(){
    try{    
        if(document.getElementById("temperatureF").value==""){
            alert("Please enter a temperature value");
            return;
        }else{
            let fahrenheit = document.getElementById("temperatureF").value;
            let celcius = (fahrenheit-32)*5/9;
            document.getElementById('celcius').value = celcius;
            document.getElementById('calculationMethodF').value= `(${fahrenheit}-32)*5/9`;
        }
    }catch(error){
        alert("An error occurred: " + error.message);
    }

}


function resetvalueF(){
    document.getElementById('temperatureF').value = "";
    document.getElementById('celcius').value = "";
    document.getElementById('calculationMethodF').value = "";
}





let FtoC = document.getElementById("FtoC");

function toggletoFtoC(){
    document.getElementById('CtoFContainer').classList.toggle("hidden");
    document.getElementById('FtoCContainer').classList.toggle("hidden");
    // document.getElementById('FtoC').classList.toggle("hidden");
    // document.getElementById('CtoF').classList.toggle("hidden");
    // document.getElementById("FtoC").classList.toggle = ("none");

}

