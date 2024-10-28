function convertTemperature() {
    const temp = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitInput").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(temp)) {
        resultDiv.innerHTML = "Please enter a valid number!";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "Celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === "Fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    } else if (unit === "Kelvin") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    resultDiv.innerHTML = `
        Celsius: ${celsius.toFixed(2)} °C<br>
        Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${kelvin.toFixed(2)} K
    `;
}
