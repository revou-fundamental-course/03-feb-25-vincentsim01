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



