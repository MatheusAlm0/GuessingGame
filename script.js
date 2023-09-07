// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterClick)

// Funções callback
function handleTryClick(event) {
  event.preventDefault() // Não faça o padrão (envio do formulário)

  const inputNumber = document.querySelector('#inputNumber')
  
  if(inputNumber.value < 0 ) {
    alert("Ops, algo deu errado. O número inserido é menor que 0. Tente novamente!")
    } else if(inputNumber.value > 10) {
    alert("Ops, algo deu errado. O número inserido é maior que 10. Tente novamente!")
  }
    
    
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterClick() {
  if(event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
