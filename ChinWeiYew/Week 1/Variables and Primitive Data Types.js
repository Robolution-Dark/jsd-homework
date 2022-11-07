// #Question 1: The Age Calculator
let currentYear = new Date().getFullYear();
let birthYear = prompt("Which year did you born?")
console.log(`They are either ${currentYear - birthYear - 1} or ${currentYear - birthYear}`)

// #Question 2: The Lifetime Supply Calculator
let age = prompt("How old are you?")
let maxAge = prompt("What's the maximum age?")
let amountPerDay = prompt("What's the amount per day?")
console.log(`You will need ${(maxAge-age)*365*amountPerDay} to last you until the ripe old age of ${maxAge}`)

// #Question 3: The Geometrizer
let radius = prompt("What's the radius of the circle?")
console.log(`The circumference is ${Math.round(2*Math.PI*radius*100)/100}.`)
console.log(`The area is ${Math.round(Math.PI*radius*radius*100)/100}.`)

// #Question 4: The Temperature Converter
let temperatureC = prompt("What's the temperature now?")
console.log(`${temperatureC}°C is ${(temperatureC*9/5)+32}°F`)
let temperatureF = 97.7
console.log(`${temperatureF}°F is ${5*(temperatureF-32)/9}°C`)