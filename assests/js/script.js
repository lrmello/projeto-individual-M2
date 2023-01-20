const cod = document.querySelector("#cod");
const decod = document.querySelector("#decod");
const select = document.querySelector("#selecionarMenu");
const botaoR = document.querySelector(".divRadioButton");
const botao = document.querySelector("#enviar");
const inc = document.getElementsByClassName("chDefinir")
const code = (Programar) => btoa(Programar); 
const decode = (Programar) => atob(Programar);

// Função btoa - codifica em base 64
// Função atob - decodifica em base 64

// Função para validação da Cifra de Cesar
function envioDadosCifra() {
  const msgText = document.querySelector("#nameForms").value;
  const key = parseInt(document.querySelector("#rangeNum").value);
  const msgLength = msgText.length;
  let exit = "";

  // escolhendo codificar (if estará sempre como true)
  if (cod.checked) {
    for (let j = 0; j < msgLength; j++) {
      // Se o caractere for maiusculo, vai substituir pelo maiusculo
      if (msgText.charCodeAt(j) >= 65 && msgText.charCodeAt(j) <= 90) {
        exit += String.fromCharCode(((msgText.charCodeAt(j) + key - 65) % 26) + 65);
      }

      // Se o caractere for minusculo, vai substituir pelo minusculo
      else if (msgText.charCodeAt(j) >= 97 && msgText.charCodeAt(j) <= 122) {
        exit += String.fromCharCode(((msgText.charCodeAt(j) - 97 - key + 26) % 26) + 97);
      }
      
      // Se sair qualquer outro caracter, ele substitui por ele mesmo
      else {
        exit += msgText[j];
      }
    }
    return exit
    // escolhendo decodificar (if estará sempre como true)
  } else if (decod.checked) {

    for(let j = 0;j < msgLength;j++){
        if(msgText.charCodeAt(j) >= 65 && msgText.charCodeAt(j) <= 90){
            // exit estará capturando a String na tabela ASCII validando as posições 65 a 90 (A até Z) considerando que não haverá diferenciação entre caracteres
            exit += String.fromCharCode((msgText.charCodeAt(j) - 65 - key + 26) % 26 + 65)
        }else if(msgText.charCodeAt(j) >= 97 && msgText.charCodeAt(j) <= 122){
            // exit estará capturando a String na tabela ASCII validando as posições 97 a 122 (a até z) considerando que não haverá diferenciação entre caracteres
            exit += String.fromCharCode((msgText.charCodeAt(j) - 97 - key + 26) % 26 + 97)
        }else{
            exit += String.fromCharCode(msgText.charCodeAt(j))
        }
    }
    return exit
  }
}

// Função para validação da base64
function envioDadosBase64() {
  const text = document.querySelector("#nameForms").value;
  let resultado;
  if (cod.checked) {
    resultado = code(text);
  } else if (decod.checked) {
    resultado = decode(text);
  }
  return resultado;
}

// No click do botão, ele constará a opção correta que será decodificada ou codificada usando innerHTML
botaoR.addEventListener("click", function () {
  if (cod.checked) {
    botao.innerHTML = "Codificar";
  } else if (decod.checked) {
    botao.innerHTML = "Decodificar";
  }
});

// Para sair da opção cifra 
select.addEventListener("change", ()=>{
    if(select.value === "cifra"){
        inc[0].style.display = "flex"
        inc[1].style.display = "flex"
    }else if(select.value != "cifra"){
        inc[0].style.display = "none"
        inc[1].style.display = "none"
    }
})

// Converter texto para base64 ou cifra
$("#enviar").on("click", () => {
  let selectValue = $("#selecionarMenu option:selected").text();
  let rest = $("#textArea");
  if (selectValue == "Base64") {
    rest.html(envioDadosBase64());
  } else if (selectValue == "Cifra de César") {
    rest.html(envioDadosCifra());
  }
});

