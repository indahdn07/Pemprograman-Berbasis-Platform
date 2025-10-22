const readline = require('readline');

const celsiusToFahrenheit = require('./konversisuhu/folder1/celsiusToFahrenheit');
const fahrenheitToCelsius = require('./konversisuhu/folder1/folder2/fahrenheitToCelsius');
const celsiusToKelvin = require('./konversisuhu/folder1/folder2/folder3/celsiusToKelvin');
const kelvinToCelsius = require('./konversisuhu/folder1/folder2/folder3/folder4/kelvinToCelsius');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("~~~ KONVERSI SUHU ~~~");
rl.question("Masukkan nilai suhu dalam Celsius: ", (input) => {
  const celsius = parseFloat(input);

  // Melakukan konversi suhu
  const fahrenheit = celsiusToFahrenheit(celsius);
  const kelvin = celsiusToKelvin(celsius);
  const balikCelsius1 = fahrenheitToCelsius(fahrenheit);
  const balikCelsius2 = kelvinToCelsius(kelvin);

  // Menampilkan hasil konversi
  console.log("\n~~~ HASIL KONVERSI SUHU ~~~");
  console.log(`Input (Celsius): ${celsius}°C`);
  console.log(`Celsius ke Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
  console.log(`Celsius ke Kelvin: ${kelvin.toFixed(2)} K`);
  console.log(`Fahrenheit kembali ke Celsius: ${balikCelsius1.toFixed(2)}°C`);
  console.log(`Kelvin kembali ke Celsius: ${balikCelsius2.toFixed(2)}°C`);
  console.log("~~~ Konversi selesai ~~~");

  // Menutup interface readline
  rl.close();
});