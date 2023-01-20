const inserirText = document.querySelector('.inputUser')
const saidaText = document.querySelector('#textArea')
const cod = document.querySelector('#cod')
const decod = document.querySelector('#decod')
const enviar = document.querySelector('#enviar')
const select = document.querySelector('#selecionarMenu')
const botaoR = document.querySelector('.divRadioButton')
const botao = document.querySelector('#enviar')
const code = (Programar) => btoa(Programar)
const decode = (Programar) => atob(Programar)


// Função para validação da cifra
function envioDadosCifra(){

}

// Função para validação da base64
function envioDadosBase64(){
    const text = document.querySelector('#nameForms').value
    let resultado
    if(cod.checked){
        resultado = code(text)
    }else if(decod.checked){
        resultado = decode(text)
    }

    return resultado
}


// No click do botão, ele constará a opção correta que será decodificada ou codificada
botaoR.addEventListener('click', function () {
        if (cod.checked) {
            botao.innerHTML = 'Codificar'
        } else if (decod.checked) {
            botao.innerHTML = 'Decodificar'
        }
 })

// Converter texto para base64 ou cifra
$('#enviar').on('click',()=>{
    let selectValue = $('#selecionarMenu option:selected').text()
    let rest = $('#textArea')
    if(selectValue === 'Base64'){
          rest.html(envioDadosBase64()) 
     }else if(selectValue === 'Cifra de Cesar'){
          rest.html(envioDadosCifra()) 
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