let display = document.getElementById("display")
let numberbtn = document.querySelectorAll('.number')
let numberoperator = document.querySelectorAll('.operator')
let clearbtn = document.getElementById("clear")
let equalbtn = document.getElementById("equal")

numberbtn.forEach(numberbtn => {
    numberbtn.addEventListener("click", function () {
        if(display.textContent==='0'){
        display.textContent = numberbtn.textContent;
        } else {
            display.textContent += numberbtn.textContent;
        }
    })
});

numberoperator.forEach(numberoperator => {
    numberoperator.addEventListener("click", function () {
        display.textContent += numberoperator.textContent;
    })
})

clearbtn.addEventListener("click", function () {
    display.textContent = 0;
})

equalbtn.addEventListener("click",function(){
    let answer = eval(display.textContent)
    display.textContent = answer;
})