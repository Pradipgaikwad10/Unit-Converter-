function convert() {
    var inputNumber = parseFloat(document.getElementById("inputNumber").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    var factor;

    if (fromUnit === "m" && toUnit === "km") {
        factor = 0.001;
    } else if (fromUnit === "km" && toUnit === "m") {
        factor = 1000;
    } else if (fromUnit === "ft" && toUnit === "m") {
        factor = 0.3048;
    } else if (fromUnit === "m" && toUnit === "ft") {
        factor = 3.28084;
    } else if (fromUnit === "mi" && toUnit === "km") {
        factor = 1.60934;
    } else if (fromUnit === "km" && toUnit === "mi") {
        factor = 0.621371;
    } else if (fromUnit === "in" && toUnit === "cm") {
        factor = 2.54;
    } else if (fromUnit === "cm" && toUnit === "in") {
        factor = 0.393701;
    } else if (fromUnit === "mm" && toUnit === "cm") {
        factor = 0.1;
    } else if (fromUnit === "cm" && toUnit === "mm") {
        factor = 10;
    } else {
        factor = 1;
    }

    var result = inputNumber * factor;
    document.getElementById("result").value = result.toFixed(4);
}

document.querySelector("input[type=submit]").addEventListener("click", convert);