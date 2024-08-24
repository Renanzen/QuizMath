const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const quatro = document.getElementById("quatro");
const telaquiz = document.querySelector(".text");
const acerto = document.getElementById("acerto");
const erro = document.getElementById("erro");
const vitoria = document.querySelector(".vitoria");

let umm, doiss, tress, quatroo;
let acertos = 0;
let erros = 0;
let valor1, valor2, resultado;

function geraValor() {
    valor1 = Math.floor(Math.random() * 100 + 1);
    valor2 = Math.floor(Math.random() * 10 + 1);
    resultado = valor1 / valor2
    telaquiz.textContent = `${valor1} / ${valor2}`;
}

function escolherBotao() {
    umm = Math.floor(Math.random() * valor1 / valor2)
    doiss = Math.floor(Math.random() * valor1 / valor2)
    tress = Math.floor(Math.random() * valor1 / valor2);
    quatroo = Math.floor(Math.random() * valor1 / valor2);

    let botoes = Math.floor(Math.random() * 4 + 1);

    if (botoes == 1) {
        um.textContent = resultado;
        dois.textContent = doiss;
        tres.textContent = tress;
        quatro.textContent = quatroo;
    } else if (botoes == 2) {
        dois.textContent = resultado;
        um.textContent = umm;
        tres.textContent = tress;
        quatro.textContent = quatroo;
    } else if (botoes == 3) {
        tres.textContent = resultado;
        um.textContent = umm;
        dois.textContent = doiss;
        quatro.textContent = quatroo;
    } else {
        quatro.textContent = resultado;
        um.textContent = umm;
        dois.textContent = doiss;
        tres.textContent = tress;
    }
}

function verificarAcerto(valorBotao) {
    if (parseInt(valorBotao) === resultado) {
        acertos += 1;
        acerto.textContent = acertos;
        if (acertos == 5) {
            telaquiz.textContent = "Parabéns! Você acertou 5!";
            vitoria.classList.toggle("aberto");
        } else {
            geraValor();
            escolherBotao();
        }
    } else {
        geraValor();
        escolherBotao();
        erros += 1
        erro.textContent = erros;
    }
}

um.onclick = () => verificarAcerto(um.textContent);
dois.onclick = () => verificarAcerto(dois.textContent);
tres.onclick = () => verificarAcerto(tres.textContent);
quatro.onclick = () => verificarAcerto(quatro.textContent);

geraValor();
escolherBotao();