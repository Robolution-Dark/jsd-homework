// #Question 1: The even/odd reporter
for (let i=0; i<=20; i++) {
    console.log(`${i} is ${i%2==0 ? 'even' : 'odd'}`)
}

// #Question 2: Multiplication Tablesper
for (let i=1; i<=12; i++) {
    console.log(`${i} * 9 = ${i*9}`)
}

// #Question 3: The Grade Assigner
for (let testScore=60; testScore<=100; testScore++) {
    if (testScore >= 80 && testScore <= 100)
        console.log(`For ${testScore}, you got an A.`)
    else if (testScore >= 65)
        console.log(`For ${testScore}, you got a B.`)
    else if (testScore >= 50)
        console.log(`For ${testScore}, you got a C.`)
    else if (testScore >= 40)
        console.log(`For ${testScore}, you got a D.`)
    else if (testScore >= 25)
        console.log(`For ${testScore}, you got an E.`)
    else if (testScore < 25)
        console.log(`For ${testScore}, you got a F.`)
}

// #Question 4: Golf


// #Question 5: 99 Bottles of Beer
for (let i=99; i>=0; i--) {
    let fist = !i ? "No more bottles" : i == 1 ? "1 bottle" : `${i} bottles`
    let second = !i ? "no more bottles" : i == 1 ? "1 bottle" : `${i} bottles`
    let third = !(i-1) ? "no more bottles" : (i-1) == 1 ? "1 bottle" : (i-1) < 0 ? "99 bottles" : `${i-1} bottles`
    if (i != 1) {
        console.log(`${fist} of beer on the wall, ${second} of beer.`)
        console.log(`Take one down and pass it around, ${third} of beer on the wall.`)
    }
}