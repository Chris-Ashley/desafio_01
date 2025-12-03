

class jogoDoGalo{
    constructor(){
        this.tabuleiro = [
            ["_","_","_"],
            ["_","_","_"],
            ["_","_","_"],
        ];

        this.jogadorAtual= "X";
    }

    adicionarJogada(linha,coluna){
        if (this.tabuleiro[linha][coluna]==="_"){
            this.tabuleiro[linha][coluna]= this.jogadorAtual;
            this.jogadorAtual = this.jogadorAtual === "X" ? "O" : "X";

        }

        return this;
 }

obterJogadasPossiveis(){
    const jogadas = [];
    for (let i = 0; i< 3 ; i++){
        for (let j = 0 ; j < 3; j++){
            if (this.tabuleiro[i][j]=== "_"){
                jogadas.push({linha:i,coluna:j});

            }
        }
    }
    return jogadas;
}

verificarVencedor(){
    const t = this.tabuleiro;
    const linhas = [
        // Linhas
        [t[0][0],t[0][1],t[0][2]],
        [t[1][0],t[1][1],t[1][2]],
        [t[2][0],t[2][1],t[2][2]],

        // colunas

        [t[0][0],t[1][0],t[2][0]],
        [t[0][1],t[1][1],t[2][1]],
        [t[0][2],t[1][2],t[2][2]],

        //Diagonais 
        [t[0][0],t[1][1],t[2][2]],
        [t[0][2],t[1][1],t[2][0]],

    ];

      for (const linha of linhas) {
      if (linha[0] !== "_" && linha[0] === linha[1] && linha[1] === linha[2]) {
        return linha[0]; // "X" ou "O"
      }

}

return undefined;
}
verificarFimDoJogo(){
    return this.verificarVencedor() !==undefined || this.obterJogadasPossiveis().length===0;

}
 
}



