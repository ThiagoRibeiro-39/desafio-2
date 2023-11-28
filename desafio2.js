


function calcularRankeadas(vitorias, derrotas){
 const saldoRankeadas = vitorias - derrotas;
 return saldoRankeadas;
}

let vitoriasJoagador = 105;
let derrotasJogador = 23;


function determinarNivel(saldoRankeadasJogador){
 
if (saldoRankeadasJogador < 10){
    return  'Ferro';
  }else if(saldoRankeadasJogador >= 11 && saldoRankeadasJogador <= 20){
    return  'Bronze';
  }else if (saldoRankeadasJogador >= 21 && saldoRankeadasJogador <= 50){
    return 'Prata';
  }else if(saldoRankeadasJogador >= 51 && saldoRankeadasJogador <= 80){
    return  'Ouro';
  }else if (saldoRankeadasJogador >= 81 && saldoRankeadasJogador <= 90){
    return  'Diamante';
  }else if (saldoRankeadasJogador >= 91 && saldoRankeadasJogador <= 100){
    return  'Lendário';
  }else{
    return  'Imortal';
  }
}

let saldoRankeadasJogador = calcularRankeadas (vitoriasJoagador, derrotasJogador)
let nivelJogador = determinarNivel(saldoRankeadasJogador);

console.log('O Herói tem saldo de ' + saldoRankeadasJogador + ' vitórias ranqueadas e está no nível ' + nivelJogador + '!')

