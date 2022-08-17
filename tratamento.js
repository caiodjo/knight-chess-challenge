const cavalo = [2,2];
const alvo = [2,5];
const movimentos = [[cavalo],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
const jaPassei = [[]];
let moduloAlv = 0, moduloCav = 0;

function distanciaPecas (peca, alvo) {
    moduloCav = peca.reduce((val, acc) => val+acc,0);
    moduloAlv = alvo.reduce((val, acc) => val+acc,0);
}
function moverCavalo(array, movLin, movCol,i) {
    if ((array[0] + movLin < 7 && array[0] + movLin >= 0) && (array[1] + movCol < 7 && array[1] + movCol >= 0)) {
        const coordX = array[0] + movLin;
        const coordY = array[1] + movCol;
        movimentos[i].push([coordX, coordY]);
    }
}
function maisLonge(){
    if(distNov > 3){
    }
}
function gerarPossibilidades(coordedanas,c){
    const multiversoC=coordedanas;
    const multiversoA=alvo;
    let movCol, movLin;
    for (let i = 0; i < 8; i++) {
        switch (i) {
            case 0:
                movLin = -2;
                movCol = -1;
                moverCavalo(multiversoC, movLin, movCol,c);
                break;
            case 1:
                movLin = -1;
                movCol = -2;
                moverCavalo(multiversoC, movLin, movCol,c);
                break;
            case 2:
                movLin = 1;
                movCol = -2;
                moverCavalo(multiversoC, movLin, movCol,c);
                break;
            case 3:
                movLin = 2;
                movCol = -1;
                moverCavalo(multiversoC, movLin, movCol,c);
                break;
            case 4:
                movLin = 2;
                movCol = 1;
                moverCavalo(multiversoC, movLin, movCol,c);
                break;
            case 5:
                movLin = 1;
                movCol = 2;
                moverCavalo(multiversoC, movLin, movCol,c);
                break;
            case 6:
                movLin = -1;
                movCol = 2;
                moverCavalo(multiversoC, movLin, movCol,c);
                break;
            case 7:
                movLin = -2;
                movCol = 1;
                moverCavalo(multiversoC, movLin, movCol,c);
                break;
            default:
                console.log('Vasco da gama');
        }
    }
}
function caminhosPossiveis(array){
    const arrayResultado = [];
    arrayResultado.push()
}
function loopAteAchar(arrayDeCoordenadas,passado){
    
}

gerarPossibilidades(cavalo,0);
let cont = 1
movimentos[0].forEach(element => {
    if(element != [[2,2]]){
        gerarPossibilidades(element,cont);
        cont++;
    }
});

console.log(movimentos);
