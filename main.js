const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braço = document.querySelector('#braço')

const controle = document.querySelectorAll('.controle-ajuste')

somar.addEventListener('click', () => {
    manipulaDados('somar')
})

subtrair.addEventListener('click', () => {
    manipulaDados('subtrair')
})

function manipulaDados(operacao) {
    if (operacao === 'subtrair') {
        braço.value = parseInt(braço.value) - 1
    } else {
        braço.value = parseInt(braço.value) + 1 
    }
}
