    
var texto = document.querySelector(".texto__entrada");
var res = document.querySelector(".area__img");
var ressec = document.querySelector(".resposta__info");

var mudaVogal = {
    a:"ai", e: "enter", i:"imes", o: "ober", u: "ufat"
};
var vogalMuda = {
    ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u"
};

var largura = window.screen.width

var newButt = document.createElement("button");

function mudaBotaoCopiar (){
    newButt.innerHTML = ("Copiado")

    if(largura <= 700){
        newButt.classList.remove("botao_copiar-responsivo");
        newButt.classList.add("copiado-responsivo")
    }else{
        newButt.classList.remove("botao-copiar");
        newButt.classList.add("copiado")
    }
}

function criptografar(){
    if(texto.value == 0){
        alert("Digite um texto que você gostaria de Criptografar ou Descriptografar")
    }else{
         
         res.innerHTML = (texto.value.toLowerCase().replace(/a|e|i|o|u/g, function(matched){
            return mudaVogal[matched]
         }));

         if(largura <= 700){
            res.classList.remove("area__img");
            res.classList.add("area__texto");
         }
         
         newButt.innerHTML = ("Copiar");
         if(largura <= 700){
            newButt.classList.add("botao__copiar-responsivo")
         } else{
            newButt.classList.add("botao-copiar");
         }
         ressec.innerHTML = ("");
         ressec.appendChild(newButt);
         newButt.addEventListener("click", copiar)
         async function copiar(){
            var resultado = res.innerHTML
            await navigator.clipboard.writeText(resultado);
            
            mudaBotaoCopiar()
            setTimeout(function(){
                newButt.innerHTML = ("Copiar")

                if(largura <= 700){
                newButt.classList.remove("copiado-responsivo");
                newButt.classList.add("botao_copiar-responsivo")
                }else{
                newButt.classList.remove("copiado");
                newButt.classList.add("botao-copiar")
                }
            },2000)
        }

    }
   
}
function descriptografar(){
    if(texto.value == 0){
        alert("Digite um texto que você gostaria de Criptografar ou Descriptografar")
    }else{
        res.innerHTML = (texto.value.toLowerCase().replace(/ai|enter|imes|ober|ufat/g, function(matched){
            return vogalMuda [matched]
        }));

        if(largura <= 700){
            res.classList.remove("area__img");
            res.classList.add("area__texto");
         }
    
        newButt.innerHTML = ("copiar");

        if(largura <= 700){
            newButt.classList.add("botao__copiar-responsivo")
         } else{
            newButt.classList.add("botao-copiar");
         }
        ressec.innerHTML = ("");
        ressec.appendChild(newButt);
        newButt.addEventListener("click", copiar)
         async function copiar(){
            var resultado = res.innerHTML
            await navigator.clipboard.writeText(resultado);

            mudaBotaoCopiar()
            setTimeout(function(){
                newButt.innerHTML = ("Copiar")

                if(largura <= 700){
                newButt.classList.remove("copiado-responsivo");
                newButt.classList.add("botao_copiar-responsivo")
                }else{
                newButt.classList.remove("copiado");
                newButt.classList.add("botao-copiar")
                }
            },2000)
         }       
    }
}
