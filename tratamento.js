const cavalo = [2,2];
const alvo = [2,5];
const movimentos = [];
const jaPassei = [[]];

let moduloAlv = 0, moduloCav = 0;
function distanciaPecas (peca, alvo) {
    moduloCav = peca.reduce((val, acc) => val+acc,0);
    moduloAlv = alvo.reduce((val, acc) => val+acc,0);
}
function moverCavalo(array, movLin, movCol) {
    if ((array[0] + movLin < 7 && array[0] + movLin >= 0) && (array[1] + movCol < 7 && array[1] + movCol >= 0)) {
        const arr =[]
        const coordX = array[0] + movLin;
        const coordY = array[1] + movCol;
        arr.push(coordX);
        arr.push(coordY);
        return arr
    }
}

function caminhosPossiveis(array){
    const arrayResultado = [];
    if(moverCavalo(array, -2,-1)){
        arrayResultado.push(moverCavalo(array, -2,-1));
    }
    if(moverCavalo(array, -1,-2)){
        arrayResultado.push(moverCavalo(array, -1,-2));
    }
    if(moverCavalo(array, 1,-2)){
        arrayResultado.push(moverCavalo(array, 1,-2));
    }
    if(moverCavalo(array, 2,-1)){
        arrayResultado.push(moverCavalo(array, 2,-1));
    }
    if(moverCavalo(array, 2,1)){
        arrayResultado.push(moverCavalo(array, 2,1));
    }
    if(moverCavalo(array, 1,2)){
        arrayResultado.push(moverCavalo(array, 1,2));
    }
    if(moverCavalo(array, -1,2)){
        arrayResultado.push(moverCavalo(array, -1,2));
    }
    if(moverCavalo(array, -2,1)){
        arrayResultado.push(moverCavalo(array, -2,1));
    }
    return arrayResultado;
}

movimentos.push(cavalo);
movimentos.push(caminhosPossiveis(cavalo));
function interagindo (array){
    const arrReturn = [];
    array.forEach(element => {
        arrReturn.push(caminhosPossiveis(element))
    });
    //console.log(arrReturn);
    return arrReturn
}
movimentos.push(interagindo(movimentos[1]));
console.log(movimentos[2]);
