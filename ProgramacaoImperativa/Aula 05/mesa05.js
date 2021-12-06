function teste1(x, y){
    return y - x
}
console.log (teste1(10, 40));

//Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function centimetros (x){
    return (x*2.54);
    }
    
    console.log (centimetros (5));


//Crie uma função que receba uma string e a converta em um URL. Ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

    function js (banana) {
        return("http://www.banana.com");
    }
    console.log (js("banana"));

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).


    function frase(ola) {
        return ("ola!");
        }
        
        console.log(frase("ola"));

    
        
//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

        function dogAge(idade){
            
            return(idade * 7);

        }
        console.log(dogAge(5));

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.PS: considere que você trabalhe 160 horas no mês.
function valor_hora(salmensal) {

    return(salmensal / 160);
}
console.log(valor_hora(2700));



//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

function calcIMC(peso, altura){

    return peso / (altura * altura);
}

console.log(calcIMC(70,1.90));


//Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 

function txt(texto){
    return texto.toUpperCase();
}

console.log(txt("hello world"));


// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

function type(value){
    return typeof value;
}

console.log(type(30));
console.log(type("olámundo"));
