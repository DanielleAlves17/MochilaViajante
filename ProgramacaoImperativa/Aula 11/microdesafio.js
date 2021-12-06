/*for(let contador =0; contador <=5; contador++) {
    console.log("ola mundo", contador);
}

for(let contador =1; contador <=9; contador=contador+2) {
    console.log(contador);

}

for(let contador =0; contador <=10; contador++) {
    let result = contador *3;
    console.log(contador,"*3 =", result);
}*/


/*1. Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte:
let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"] e nos pediram para passar todos os elementos para letras maiúsculas, o que na época tínhamos feito de forma "manual". Vamos movê-lo para uma maneira mais automática usando loops.

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "exterminador do futuro"] 

function maiusculas(filmes){
      filmes[0] = filmes[0].toUpperCase()
      filmes[1] = filmes[1].toUpperCase()
      filmes[2] = filmes[2].toUpperCase()
      filmes[3] = filmes[3].toUpperCase()
      filmes[4] = filmes[4].toUpperCase()
     
      return filmes
    }
    console.log(maiusculas(filmes));

/*2. Agora precisamos modificar afunçãode passagemde elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.*/

let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "exterminador do futuro"]
let filmes2 = ["um lobisomen juvenil", "saw", "embalos do sabado a noite", "dançanco com lobos", "pretty woman"]

function mudando(filmes, filmes2) {
    filmes.push(filmes2.pop().toUpperCase())

}
console.log(mudando(filmes, filmes2));


/*3. Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar em outra variável antes de fazer a passagem de elementos de um array para outro!*/

/*4. Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  comparacionesAsiaEuropa[0] = asia[0] === europa[0]
  comparacionesAsiaEuropa[1] = asia[1] === europa[1]
  comparacionesAsiaEuropa[2] = asia[2] === europa[2]
  comparacionesAsiaEuropa[3] = asia[3] === europa[3]*/


function Maiuscula(array) {
    for (let i = 0; i < arrayNome.length; i++) {
        array[i] = array[i].toUpperCase()

    }
    console.log(array);
}


2. function passagemdeelemento(array1, array2) {
    let invalido = array2.pop();
    let qtd = array2.length;

    for (let i = 0; i < qtd; i++) {
        array1.push(array2.pop().toUpperCase())
    }
} console.log("esse filme é invalido", invalido);

3.