let country = document.getElementById("converting").value;
let toCountry = document.getElementById("converted").value;
let input = document.getElementById("inputnumber").value;
var convertedAmount;

function convert() {
    let country = document.getElementById("converting").value;
    let toCountry = document.getElementById("converted").value;
    let input = document.getElementById("inputnumber").value;
    var convertedAmount;

    // DECLARE CURRENCY
    var kursCurrency = {
        USD: {IDR: 16173, JPY: 155, EUR: 0.93},
        IDR: {JPY: 0.0094, EUR: 0.000058, USD: 0.000062},
        JPY: {USD: 0.0065, EUR: 0.0061, IDR: 105.20},
        EUR: {USD: 1.07, IDR: 17278, JPY: 164.28}
    }

    if(kursCurrency[country] && kursCurrency[country][toCountry]) {
        convertedAmount = input * kursCurrency[country][toCountry];
        var formattedAmount = convertedAmount.toLocaleString(undefined, {maximumFractionDigits: 2});
        document.getElementById("convertednumber").value = formattedAmount;
    } else {
        alert("You cannot choose the same country!");
    }
    if(input.length <= 0 || input == 0) {
        alert("You must fill a number!");
    }
}

// Angka random sesuai prompt user mau
function randomNumber() {
    let userNum = parseInt(prompt("How many numbers do you want from 1 to? ex: 999999"))
    random = Math.floor(Math.random() *`${userNum}` +1)

    if(userNum === NaN){
        alert("Number Only!")
    }else{
        document.getElementById("inputnumber").value = random
        console.log(random);
    }
}


// clear
function clearText() {
    if(document.getElementById("inputnumber").value.length >= 1){
        document.getElementById("inputnumber").value = "";
        document.getElementById("convertednumber").value = "";
    }   
}

function darkMode() {
    console.log("asd")
}