const inserirText = document.querySelector('.inputUser')
const saidaCifra = document.querySelector('#textCifra')
const saidaBase = document.querySelector('#textBase')
const regex = /^([a-zA-Z]+)$/

// valida se o usuário está preenchendo o nome de forma correta
function validaDigitacao(){
    const inserirTextValue = inserirText.value

    if(!regex.test(inserirTextValue)){
        msgErro(inserirText,"Preencher o campo correto apenas com letras")
    }else{
        msgAcerto(inserirText,"Texto correto")
        return true
    }
}

// Função para estrutura de condição RadioButton
function validaDados(){

}

// Função para validação da cifra
function envioDadosCifra(){

}

// Função para validação da base64
function envioDadosBase(){
    
}

// funções para identificar se o usuário digitou a palavra de forma correta
function msgErro(){
    const control = saida.parentElement
    control.className = 'div-input-error'
    
    const text = control.querySelector('span')
    text.innerHTML = msg
}

function msgAcerto(){
    const control = saida.parentElement
    control.className = 'div-input-set'
    
    const text = control.querySelector('span')
    text.innerHTML = msg

}