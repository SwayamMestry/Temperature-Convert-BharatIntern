function convertTemperature(unit) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');
  
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const kelvin = parseFloat(kelvinInput.value);
  
    if (unit === 'celsius') {
      fahrenheitInput.value = (celsius * 9/5) + 32;
      kelvinInput.value = celsius + 273.15;
    } else if (unit === 'fahrenheit') {
      celsiusInput.value = (fahrenheit - 32) * 5/9;
      kelvinInput.value = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (unit === 'kelvin') {
      celsiusInput.value = kelvin - 273.15;
      fahrenheitInput.value = (kelvin - 273.15) * 9/5 + 32;
    }
  }