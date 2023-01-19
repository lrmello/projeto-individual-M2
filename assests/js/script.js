const inserirText = document.querySelector('.inputUser')
const saidaText = document.querySelector('#textArea')
const cod = document.querySelector('#cod')
const decod = document.querySelector('#decod')
const enviar = document.querySelector('#enviar')
const select = document.querySelector('#selecionarMenu')
const botaoR = document.querySelector('.divRadioButton')
const botao = document.querySelector('#enviar')

// Função para validação da cifra
function envioDadosCifra(){

}

// Função para validação da base64
function envioDadosBase64(){
    const text = document.querySelector('#textArea').value

    if(cod.checked){
        const cod = btoa(text)
        return cod
    }else if(decod.checked){
        const decod = atob(cod)
        return decod
    }
}

// No click do botão, ele constará a opção correta que será decodificada ou codificada
botaoR.addEventListener('click', function () {
        if (cod.checked) {
            botao.innerHTML = 'Codificado'
        } else if (decod.checked) {
            botao.innerHTML = 'Decodificado'
        }
 })
 
// Aqui está o registro do evento por único elemento com o click
botao.addEventListener('click',(e)=>{
    const selectValue = select.value
    e.preventDefault()
    if(selectValue === 'Base64'){
        rest.innerHTML = envioDadosBase64()
        msg.classList.toggle('adadkaj')
    } else if(selectValue === 'Cifra de Cesar'){
        rest.innerHTML = envioDadosCifra()
}
})



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