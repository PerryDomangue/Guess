
let digits = document.getElementById("num").value
let submit = document.getElementById("submit")
let resp = document.getElementById("resp")
let resp1 = document.getElementById("resp1")
let guessNum = document.getElementById("guessNum").value
let response = document.getElementById("response")
let guessSubmit = document.getElementById("guessSubmit")
let qmm = document.getElementById("qmm")



function getDigits () {
    let digits = document.getElementById("num").value
    // console.log(digits)
    
    return digits;
}


setInterval(getDigits, 1000)
submit.addEventListener("click", getDigits)
submit.addEventListener("click", randGen)



function show() {
let digits = document.getElementById("num").value
let string = '1'
for (let i = 1; i < digits; i++) {
string += "0"
}
return resp.innerHTML = `The random number will be between 1 out of ${string}`, string
}

setInterval(show, 100)

function randGen() {
    let digits = document.getElementById("num").value
    let thing = 10 ** digits
    let random = Math.floor(Math.random() * thing)
    console.log(random) 
    return random, qmm.innerHTML = random
}


setInterval(getDigits, 1000)
submit.addEventListener("click", getDigits)
submit.addEventListener("click", randGen)
 

guessSubmit.addEventListener("click", score)
submit.addEventListener("click", randGen)

function score(random) {

    let guessNum = document.getElementById("guessNum").value
    console.log(random)
    console.log(guessNum)
    if (random > guessNum) {
        return response.innerHTML = "too high"
    }
    else if (random < guessNum) {
        return response.innerHTML = "too low"
    }
    else if (random === guessNum) {
        return response.innerHTML = "you got it"
    } 
}


