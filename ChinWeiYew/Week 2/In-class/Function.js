// Function : Driving Age
let canDrive = function(userAge) {
    const legalAge = 16
    if (userAge < legalAge) {
        return `Sorry, you can't drive yet. You have ${legalAge-userAge} ${legalAge-userAge != 1 ? "years" : "year"} to wait until you can drive.`
    }
    else {
        return "Drive away!"
    }
}
console.log(canDrive(15))

// Function : The Word Translator
let translator = function(lang) {
    if (lang == "fr") {
        return "Bonjour le monde"
    }
    else if (lang == "eng") {
        return "Hello World"
    }
}
console.log(translator("eng"))

// Function : The Age Calculator
let calculateAge  = function(birthYear, currentYear) {
    return `You are either ${currentYear-birthYear-1} or ${currentYear-birthYear}`
}
console.log(calculateAge(1994, new Date().getFullYear()))

// Function : The Lifetime Supply Calculator
let calculateSupply  = function(age, amountPerDay) {
    const maxAge = 99
    return `You will need ${(maxAge-age)*amountPerDay} to last you until the ripe old age of ${maxAge}.`
}
console.log(calculateSupply(29, 3))
console.log(calculateSupply(40, 2))
console.log(calculateSupply(50, 4))

// Function : The Geometrizer
let calcCircumference = function(radius) {
    return `The circumference is ${Math.round(2*Math.PI*radius*100)/100}`
}
console.log(calcCircumference(14))

let calcArea = function(radius) {
    return `The area is  ${Math.round(Math.PI*radius*radius*100)/100}`
}
console.log(calcArea(14))

// Function : The Temperature Converter
let celsiusToFahrenheit = function(celsius) {
    return `${celsius}°C is ${(celsius*9/5)+32}°F`
}
let fahrenheitToCelsius = function(fahrenheit) {
    return `${fahrenheit}°F is ${5*(fahrenheit-32)/9}°C`
}
console.log(celsiusToFahrenheit(36.5))
console.log(fahrenheitToCelsius(97.7))

// Function : Working with Users
const users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    }
  ];

let login = function(email, password) {
    for(let i=0; i<users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            return "You are logged in"
        }
    }
    return "Sorry, something went wrong"
}
console.log(login("zeppo@ga.co", "dumboOctopus"))

let createAccount = function(email, password, isAdmin) {
    users.push({email, password, isAdmin})
}
createAccount("chico@gmail.com", "redLippedBatfish", false);
console.log(users)

let deleteAccount = function(email, password) {
    let index = users.findIndex(x => { return x.email === email && x.password === password })
    if (index >= 0) {
        users.splice(index, 1)
    }
}
deleteAccount("gummo@ga.co", "abc");
console.log(users)