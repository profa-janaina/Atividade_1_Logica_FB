var siteJogo = "";
var iframeJogo = "";
var btnVoltar = "";
var mostrar = "";

function organizar() {
    siteJogo="https://html5.gamedistribution.com/0ea10abe7c7546a18fe06bf3091f4710";
    mostrarJogo();   
}

function tictactoe() {
    siteJogo="https://www.coquinhos.com/jogos/tictactoe?sid=20015";
    mostrarJogo();   
}

function preencher() {
    siteJogo="//html5.gamedistribution.com/rvvASMiM/d5a35aac5eb14a3fb5e2cb9ed4986bd2/index.html";
    mostrarJogo();   
}

function mostrarJogo() {
    iframeJogo= '<iframe id="playframe" width="575" height="369" frameborder="0" scrolling="no" allowfullscreen="true" src= '+ siteJogo+ '></iframe>';
    btnVoltar="<br><button onclick='voltar()' style='margin-bottom: 30px; background-color: #9f8292; color: white; border-radius: 10px; border-color:white; padding:4px 9px; font-family: Oswald;'>voltar</button>";
    mostrar=iframeJogo+btnVoltar;
    document.getElementById("MostrarJogo").innerHTML = mostrar;
    document.getElementById("GameSection").style.display = "none"; 
    document.getElementById("MostrarJogo").style.display = "inline";   
}

function voltar() {
    document.getElementById("MostrarJogo").style.display = "none";
    document.getElementById("GameSection").style.display = "flex"; 
    siteJogo="";
    iframeJogo= '<iframe id="playframe" width="575" height="369" frameborder="0" scrolling="no" allowfullscreen="true" src= '+ siteJogo+ '></iframe>';
    document.getElementById("MostrarJogo").innerHTML =iframeJogo;
}