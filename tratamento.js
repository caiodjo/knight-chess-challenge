const cavalo = [2,2];
const alvo = [2,5];
const movimentos = [];
const jaPassei = [];

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
//const equal = (elemento) => elemento === 
function caminhosPossiveis(array){
    jaPassei.push(array);
    const arrayResultado = [];
    if(moverCavalo(array, -2,-1) && (jaPassei.includes(array))){
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

function caminhos2(array){
    jaPassei.push(array);
    const arrayResultado = [];
    console.log(jaPassei.includes([2,2])); //ta dando false 
    if(moverCavalo(array, -2,-1) && !(jaPassei.includes(moverCavalo(array, -2,-1)))){
        arrayResultado.push(moverCavalo(array, -2,-1));
    }
    if(moverCavalo(array, -1,-2) && !(jaPassei.includes(moverCavalo(array, -1,-2)))){
        arrayResultado.push(moverCavalo(array, -1,-2));
    }
    if(moverCavalo(array, 1,-2) && !(jaPassei.includes(moverCavalo(array, 1,-2)))){
        arrayResultado.push(moverCavalo(array, 1,-2));
    }
    if(moverCavalo(array, 2,-1) && !(jaPassei.includes(moverCavalo(array, 2,-1)))){
        arrayResultado.push(moverCavalo(array, 2,-1));
    }
    if(moverCavalo(array, 2,1) && !(jaPassei.includes(moverCavalo(array, 2,1)))){
        console.log(jaPassei.includes(moverCavalo(array, 2,1)),moverCavalo(array, 2,1)); // quero saber pq o 2,2 ainda continua aparecendo
        arrayResultado.push(moverCavalo(array, 2,1));
    }
    if(moverCavalo(array, 1,2) && !(jaPassei.includes(moverCavalo(array, 1,2)))){
        arrayResultado.push(moverCavalo(array, 1,2));
    }
    if(moverCavalo(array, -1,2) && !(jaPassei.includes(moverCavalo(array, -1,2)))){
        arrayResultado.push(moverCavalo(array, -1,2));
    }
    if(moverCavalo(array, -2,1) && !(jaPassei.includes(moverCavalo(array, -2,1)))){
        arrayResultado.push(moverCavalo(array, -2,1));
    }
    return arrayResultado;
}

movimentos.push(cavalo);
movimentos.push(caminhosPossiveis(cavalo));
jaPassei.push(cavalo);
function interagindo (array){
    const arrReturn = [];
    array.forEach(element => {
        arrReturn.push(caminhosPossiveis(element))
    });
    return arrReturn
}
function interagindo2 (array){
    const arrReturn = [];
    array.forEach(element => {
        arrReturn.push(caminhos2(element))
    });
    return arrReturn
}
movimentos.push(interagindo2(movimentos[1]));
console.log(movimentos[2]);

