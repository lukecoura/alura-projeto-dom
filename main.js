const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braço = document.querySelector('#braço')

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

function manipulaDados(operacao) {
    if (operacao === '-') {
        braço.value = parseInt(braço.value) - 1
    } else {
        braço.value = parseInt(braço.value) + 1 
    }
}
