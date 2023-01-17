const inserirText = document.querySelector('.labelInput')
const saidaText = document.querySelector('textarea')
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

function envioDados(){

}

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