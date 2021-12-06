//Exercicio 01
function podesubir(altura, acompanhada) {

    if(altura < 2.00 && altura > 1.40) {
    return true;}

    else if((altura < 1.40 && altura > 1.20 && acompanhada === true)) {
        return true;
    }

    else {
        return false;
    }
}

    
    console.log(podesubir(1.21,false));

//Exercicio 02

function podesubir(altura, acompanhada) {

    if(altura < 2.00 && altura > 1.40) {
    console.log ("acesso autorizado");}

    else if((altura < 1.40 && altura > 1.20 && acompanhada === true)) {
        console.log ("acesso autorizado somente com acompanhante");
    }

    else {
        console.log ("não autorizado");
    }
}

    
    console.log(podesubir(1.21,false));

