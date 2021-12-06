function adicionar (x, y) {

    return x + y;
}

function subtração (x, y) {

    return x - y;
}

function multiplicação (x, y) {

    return x * y;
}

function divisão (x, y) {

    return x / y;
}

console.log (adicionar(6,7), subtração(8,4), divisão(7,6), multiplicação(8,2));

/*2. Execute a função que soma e a função que subtrai, passando quaisquer dois
números como argumentos. Mostrar resultados no console.*/
console.log (adicionar(4,8), subtração(6,3));

/*3. Execute a função que multiplica, passando quaisquer dois números como
argumentos. Mostre o resultado no console.*/
console.log (multiplicação(4,5));

/*4. Execute a função que faz divisão, passando quaisquer dois números como
argumentos. Mostre o resultado no console.*/
console.log (divisão(9,3));

/*5. Execute a função que faz divisão, passando agora o número zero como um dos
dois argumentos. Mostre o resultado no console.*/
console.log (divisão(4,0));

/*Crie uma função chamada quadradoDoNumero, que recebe um número como
parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja,
ao quadrado.
Importante: quadradoDoNumero() deve usar a função multiplicação() para
calcular o quadrado do parâmetro inserido em power().*/

function quadradoDoNumero (x) {

    return (multiplicação (x,x))
}

console.log (quadradoDoNumero(4));



/*2. Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números,
que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções
criadas anteriormente em nossa calculadora.*/

function mediaDeTresNumeros (x,y,z) {
 
    return ((adicionar(x,y)+ z) /3)
 }
 
 console.log (mediaDeTresNumeros(3,4,5));
 

/*3. Crie a função calculaPorcentagem, que receberá dois parâmetros: o número
total e a porcentagem que deseja calcular, e que deverá retornar x% de
totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15) (deve retornar 45, pois é 15% de 300).
Importante: calculaPorcentagem() você precisará usar algumas funções
criadas anteriormente em nossa calculadora.*/

function calculaPorcentagem (x,y) {

    return (multiplicação(x,y) /100)

}

console.log (calculaPorcentagem(30,15));


/*4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá
retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).*/

function geradorDePorcentagem (x,y) {

    return (divisão(y,x)/100)

}
console.log (geradorDePorcentagem (25,250));