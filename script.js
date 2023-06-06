var temperatureInput = document.getElementById("Temperature");
var resultElement = document.getElementById("result");

console.log(temperatureInput);

var count = 0;

function SwitchClick() {
    count = count + 1;
    console.log("Click!");

  
}

function CalculateTemp() {
    var temp = parseFloat(temperatureInput.value); // Parse the temperature as a float

    resultElement.style.color = "Black";
    // Fahrenheit to  Celsius
    if (count % 2 == 0) {
        var result = (temp - 32) / 1.8;
        resultElement.innerHTML = result.toFixed(0) + "°C";
    }

    else if (temperatureInput = ""){
        resultElement.innerHTML = "Enter a value";
    }
    // Celsius to  Fahrenheit
    else {
        var result = (temp * 1.8) + 32;
        resultElement.innerHTML = result.toFixed(0) + "°F";
    }
}


// alert if user does not enter a value for temperature

window.onload = function() {
    var form = document.getElementById("form-container");
    form.addEventListener("submit", function(event) {
      var temperatureInput = document.getElementById("Temperature");

      if (!temperatureInput.checkValidity()) {
        temperatureInput.setCustomValidity("Please enter a valid temperature.");
      } else {
        temperatureInput.setCustomValidity("");
      }
    });
  };












  