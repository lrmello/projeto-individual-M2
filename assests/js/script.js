const inserirText = document.querySelector('.labelInput')
const saidaText = document.querySelector('textarea')
const regex = /^[a-zA-Z]+$/

function validaDigitacao(){
    const inserirTextValue = inserirText.value

    if(regex.test(inserirTextValue)){
        alert("Texto correto")
        return true
    }else{
        alert("Preencher o campo correto apenas com letras")
    }
}

function envioDados(){

}