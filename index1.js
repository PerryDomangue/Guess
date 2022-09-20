
let digits = document.getElementById("num").value
let submit = document.getElementById("submit")
let resp = document.getElementById("resp")
let resp1 = document.getElementById("resp1")
let guessNum = document.getElementById("guessNum").value
let response = document.getElementById("response")
let guessSubmit = document.getElementById("guessSubmit")
let qmm = document.getElementById("qmm")

function main() {
let submit = document.getElementById("submit")
submit.addEventListener("click", function1)
}
main()

function function1 () {
    let digits = document.getElementById("num").value
    // console.log(digits)
    return main1(digits)
}

function main1(digits) {
    console.log(digits)
    show(digits)
    let random = randGen(digits)
    let result = randMes(random, digits)
    // qmm.innerHTML = random
    // response.innerHTML = random
    // score(random, digits)
    // console.log(random)
    // randMes(digits)
    guessSubmit.addEventListener("click", function(){
        score(random)})
    // console.log(guess)
    console.log(guessNum)
    return main2(random, guessNum)
 
}

function main2 (random, guessNum) {
    console.log(random, guessNum)
 
}



function show(digits) {
    //let digits = document.getElementById("num").value
    let string = '1'
    for (let i = 1; i < digits; i++) {
    string += "0"
    }
    return resp.innerHTML = `The random number will be between 1 out of ${string}`, string
    }

function randGen(digits) {
    // let digits = document.getElementById("num").value
    let thing = 10 ** (digits - 1)
    let random = Math.floor(Math.random() * thing)
    console.log(random) 
    return random
}
function randMes(random) {
    // let digits = document.getElementById("num").value
    // let thing = 10 ** digits
    // let result = thing * random
    // console.log(random, "hu")
    // return  qmm.innerHTML = random
}

function score(random) {
    // console.log(random, digits, "hi")
    let guessNum = document.getElementById("guessNum").value
    let response = document.getElementById("response")

    
    console.log(guessNum, random)

    if (random < guessNum) {
        return response.innerHTML = `"too high"`
    }
    else if (random > guessNum) {
        return response.innerHTML = `"too low"`
    }
    else if (random == guessNum) {
        return response.innerHTML = `"You got it!!!"`, qmm.innerHTML = random
    } 
}
  

