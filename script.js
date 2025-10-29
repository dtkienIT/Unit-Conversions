function temperature() {
  var c = document.getElementById("celsius").value;
  var f = document.getElementById("fahrenheit").value;

  //validate
  if (c == "" && f == "") {
    alert("Please enter celsius or fahrenheit!");
    return;
  } else {
    if (c == "") {
      //To convert farenheit to celsius
      document.getElementById("celsius").value = fahrenheitToCelsius(f);
    }
    //To convert celsius to farenheit
    else document.getElementById("fahrenheit").value = celsiusToFahrenheit(c);
  }
}

// Convert Celsius → Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Convert Fahrenheit → Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Reset Temperature
function resetTemperature() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
}

function weight() {
  var kg = document.getElementById("kilo").value;
  var p = document.getElementById("pounds").value;

  //validate
  if (kg == "" && p == "") {
    alert("Please enter kilo or pounds!");
    return;
  } else {
    if (kg == "") {
      //To convert farenheit to celsius
      document.getElementById("kilo").value = poundToKilogram(p);
    }
    //To convert celsius to farenheit
    else document.getElementById("pounds").value = kilogramToPound(kg);
  }
}

// Convert Kilogram → Pound
function kilogramToPound(kg) {
  return kg * 2.2;
}

// Convert Pound → Kilogram
function poundToKilogram(lb) {
  return lb / 2.2;
}

// Reset Weight
function resetWeight() {
  document.getElementById("kilo").value = "";
  document.getElementById("pounds").value = "";
}

function distance() {
  var km = document.getElementById("km").value;
  var m = document.getElementById("miles").value;

  //validate
  if (km == "" && m == "") {
    alert("Please enter km or miles!");
    return;
  } else {
    if (km == "") {
      //To convert Miles to Kilometers
      document.getElementById("km").value = milesToKilometers(m);
    }
    //To convert Kilometers to Miles
    else document.getElementById("miles").value = kilometersToMiles(km);
  }

}

// Convert Kilometers → Miles
function kilometersToMiles(km) {
  return km * 0.62137;
}

// Convert Miles → Kilometers
function milesToKilometers(mi) {
  return mi / 0.62137;
}

// Reset Distance
function resetDistance() {
  document.getElementById("km").value = "";
  document.getElementById("miles").value = "";
}