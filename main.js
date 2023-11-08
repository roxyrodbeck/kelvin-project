// the temperature today
const kelvin = 293;

// converting from kelvin to celsius
var celsius = kelvin - 273;

// the formula to calculate fahrenheit - rounding down
var fahrenheit = Math.floor(celsius * (9/5) + 32);

// interpolation and back ticks!
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
