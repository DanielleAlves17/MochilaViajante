function macarrão(tempo){
    if(tempo < 8) {
        console.log("Tempo insuficiente");
    }
    else if(tempo == 16) {
        console.log("A comida queimou");
    }
    else if(tempo >= 32) {
        console.log("Kabom")
    }
    else {
        console.log("Prato bom, bom apetite!");
    }
}

function brigadeiro(tempo){
    if(tempo < 8) {
        console.log("Tempo insuficiente");
    }
    else if(tempo == 16) {
        console.log("A comida queimou");
    }
    else if(tempo >= 32) {
        console.log("Kabom")
    }
    else {
        console.log("Prato bom, bom apetite!");
    }

}

function pipoca(tempo){
    if(tempo < 10) {
        console.log("Tempo insuficiente");
    }
    else if(tempo == 20) {
        console.log("A comida queimou");
    }
    else if(tempo >= 30) {
        console.log("Kabom")
    }
    else {
        console.log("Prato bom, bom apetite!");
    }

}

function feijão(tempo){
    if(tempo < 12) {
        console.log("Tempo insuficiente");
    }
    else if(tempo == 24) {
        console.log("A comida queimou");
    }
    else if(tempo >= 36) {
        console.log("Kabom")
    }
    else {
        console.log("Prato bom, bom apetite!");
    }

}

function carne(tempo){
    if(tempo < 15) {
        console.log("Tempo insuficiente");
    }
    else if(tempo == 30) {
        console.log("A comida queimou");
    }
    else if(tempo >= 45) {
        console.log("Kabom")
    }
    else {
        console.log("Prato bom, bom apetite!");
    }

}

function menu(prato,tempo) {

    if(prato == 1){
        macarrão(8)
    }
    else if(prato == 2){
        brigadeiro(8)
    }
    else if(prato == 3){
        pipoca(10)
    }
    else if(prato == 4){
        feijão(12)
    }
    else if(prato == 5){
        carne(15)
    }
    else {
        return "Prato inexistente";
    }
}

