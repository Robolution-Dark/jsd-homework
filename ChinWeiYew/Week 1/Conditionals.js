// #Question 1: The World Translator
const language = [
    {
        title: "ENGLISH",
        msg: "Hello World"
    },
    {
        title: "FRENCH",
        msg: "Bonjour le monde"
    },
    {
        title: "MALAY",
        msg: "Hai dunia"
    },
]

let lang = prompt("What language do you prefer?")
let msg = ""
for(let i=0; i<language.length; i++) {
    if (language[i].title == lang.toUpperCase()) {
        msg = language[i].msg
        break;
    }
}
if (msg.trim() === "") {
    let newMsg = prompt("The language is not found, what message would you like to give for your language?")
    language.push({title: lang.toUpperCase(), msg: newMsg})
    msg = newMsg
}
console.log(msg)
console.log(language)


// #Question 2: The Grade Assigner
let testScore = prompt("How many scores did you get?")
if (testScore >= 80 && testScore <= 100)
    console.log("A")
else if (testScore >= 65)
    console.log("B")
else if (testScore >= 50)
    console.log("C")
else if (testScore >= 40)
    console.log("D")
else if (testScore >= 25)
    console.log("E")
else if (testScore < 25)
    console.log("F")

// #Question 3: Air Conditioning
let temperature = prompt("What's the temperature now?")
let isACFunctional = prompt("Is the Air Conditioner functional? (Y/N)")
let desiredTemperature = prompt("What is the minimum temperature to turn on the A/C?")
let onOffAC = isACFunctional.toUpperCase() == "Y"
if (temperature >= desiredTemperature) {
    if (onOffAC) {
        console.log("Turn on the A/C Please")
    }
    else {
        console.log("Fix the A/C now! It's hot!")
    }
}
else {
    if (!onOffAC) {
        console.log("Fix the A/C whenever you have the chance... It's cool...")
    }
}

// #Question 4: You and Your Government
let age = prompt("How old are you?")
if (age >= 35)
    console.log('You can vote AND hold any place in government!')
else if (age >= 25)
    console.log('You can vote AND run for the Senate!')
else if (age >= 18)
    console.log('You can vote!')
else
    console.log('You can\'t vote yet')

// #Question 5: Golf


// #Question 6: Serge Says
let message = prompt("What do you want to tell me?")
if (message.endsWith('?'))
    console.log("Sure.")
else if (message === null || message.trim() === "")
    console.log("Fine. Be that way!")
else if (message === message.toUpperCase())
    console.log("Woah, chill out!")
else
    console.log("Whatever.")

// #Question 7: The Pluralizer
let word = prompt("Please give me a noun.")
let number = prompt("Please give me a number.")
const vowel = "aeiou"
const consonant = "bcdfghjklmnpqrstvwxyz"
let newWord = ""
let lastSecondChar = ""
if (word.length >= 2) {
    lastSecondChar = word[word.length-2]
}

if (number > 1) {
    if (word.endsWith("y")) {
        if (vowel.indexOf(lastSecondChar) >=0) {
            newWord = word + 's'
        }
        else if (consonant.indexOf(lastSecondChar) >=0) {
            newWord = word.substring(0, word.length-1) + 'ies'
        }
    }
    else if (word.endsWith("us")) {
        newWord = word.substring(0, word.length-2) + 'i'
    }
    else if (word.endsWith("fe")) {
        newWord = word.substring(0, word.length-2) + 'ves'
    }
    else if (word.endsWith("f")) {
        newWord = word.substring(0, word.length-1) + 'ves'
    }
    else if (word.endsWith("o") && consonant.indexOf(lastSecondChar) >=0) {
        newWord = `${word + "es"}, ${word + "s"}`
    }
    else if (word.endsWith("is")) {
        newWord = word.substring(0, word.length-2) + 'es'
    }
    else if (word.endsWith("ix") || word.endsWith("ex")) {
        newWord = word.substring(0, word.length-2) + 'ices'
    }
    else if (word.endsWith("eau")) {
        newWord = word + 'x'
    }
    else if (word.endsWith("s") || word.endsWith("x") || word.endsWith("z") || word.endsWith("ch") || word.endsWith("sh")) {
        newWord = word + 'es'
    }
    else {
        newWord = word + 's'
    }
}
else {
    newWord = word
}

console.log(`${number} ${newWord}`)