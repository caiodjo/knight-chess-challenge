
let cavaloHtml = document.getElementById(`${cavalo[0]}${cavalo[1]}`); // Registra posicao no tabuleiro do cavalo
let alvo = document.getElementById(`${posAlvo[0]}${posAlvo[1]}`); // Registra posicao no tabuleiro do cavalo

function remover (html, peca){
    html = document.getElementById(`${peca[0]}${peca[1]}`); // Atualiza posicao da peça
    html.innerHTML = '';
}
function printarTabuleiro (html,peca) {
    html = document.getElementById(`${peca[0]}${peca[1]}`); // Atualiza posicao da peça
    html.innerHTML = 'C';
}
function moverPeca (peca,lin, col, html) {
    if((peca[0] + lin < 7 && peca[0] + lin >= 0) && (peca[1] + col < 7 && peca[1] + col >= 0)){
        remover(html,peca);
        peca[0] += lin;
        peca[1] += col;
        printarTabuleiro(html, peca);
    } else {
        console.log('movimento invalido');
    }
}
function mudarCasa (peca, lin, col, html) {
    console.log(html, 'ca')
    if((lin >= 0 && lin < 8) && (col >= 0 && col < 8 )){
        remover(html, peca)
        peca[0] = lin;
        peca[1] = col;
        printarTabuleiro(html, peca);
    } else {
        console.log('moviemnto invalido');
    }
}

mudarCasa(cavalo, 5, 2, cavaloHtml);
mudarCasa(cavalo, -1, -1, cavaloHtml);
mudarCasa(cavalo, 2, 2, cavaloHtml);