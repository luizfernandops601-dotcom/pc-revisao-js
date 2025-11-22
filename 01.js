







let chocpoGlobal = 10// escoopo global

function validaDescnto(volorcopra){
   let desconto = 0 //escopo de funcao
 
    if(volorcopra >= 100){
        desconto = volorcopra * 0.10
    }
       
    valorFinal = volorcopra - desconto

    return{
        valorCompra,
        desconto,
        valorfinal
    }


}

console.log(validaDescnto(1200));








