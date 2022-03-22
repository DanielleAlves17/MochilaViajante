document.getElementById("enviar").addEventListener("click", (evento) => { evento.preventDefault() });

function pegar(){
    var artista=document.getElementById('artista').value
    console.log(artista)

    var resumo=document.getElementById('resumo').value
    console.log(resumo)

    var imagem=document.getElementById('imagem').value
    console.log(imagem)

    let logo = document.getElementById('foto');
        logo.setAttribute("src", imagem)

    var card=document.getElementById('card')
    card.innerHTML=`
        Nome do artista: ${artista} <br>
        Resumo: ${resumo} <br>
        Imagem: ${logo} <br>
        `


}
