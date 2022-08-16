const cavalo = [2,2];
const alvo = [2,5];
let moduloAlv = 0, moduloCav = 0;

function distanciaPecas (peca, alvo) {
    moduloCav = peca.reduce((val, acc) => val+acc,0);
    moduloAlv = alvo.reduce((val, acc) => val+acc,0);
}
function moverCavalo(array, movLin, movCol){
    if((array[0] + movLin < 7 && array[0] + movLin >= 0) && (array[1] + movCol < 7 && array[1] + movCol >= 0)){
        array[0] += movLin;
        array[1] += movCol;
        console.log(array);
    }
}
function maisLonge(){
    if(distNov > 3){
    }
}
//while (moduloCav != moduloAlv){
    const multiversoC = cavalo;
    const multiversoA = alvo;
    let movCol, movLin;
    for(let i = 0; i<8; i++){
        switch(i){
            case 0:
                movLin = -2;
                movCol = -1;
                moverCavalo(multiversoC, movLin, movCol);
                console.log(multiversoC);
                break;
            case 1:
                movLin = -1;
                movCol = -2;
                moverCavalo(multiversoC, movLin, movCol);
                console.log(multiversoC);
                break;
            case 2:
                movLin = 1;
                movCol = -2;
                moverCavalo(multiversoC, movLin, movCol);
                break;
            case 3:
                movLin = 2;
                movCol = -1;
                moverCavalo(multiversoC, movLin, movCol);
                break;
            case 4:
                movLin = 2;
                movCol = 1;
                moverCavalo(multiversoC, movLin, movCol);
                break;
            case 5:
                movLin = 1;
                movCol = 2;
                moverCavalo(multiversoC, movLin, movCol);
                break;
            case 6:
                movLin = -1;
                movCol = 2;
                moverCavalo(multiversoC, movLin, movCol);
                break;
            case 7:
                movLin = -2;
                movCol = 1;
                moverCavalo(multiversoC, movLin, movCol);
                break;
            default:
                console.log('Vasco da gama');
        }
    }

//}


// console.log(moduloCav, moduloAlv);
//distanciaPecas(cavalo, alvo); 
//console.log(moduloCav, moduloAlv);