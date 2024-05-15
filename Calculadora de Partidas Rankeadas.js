function rankear(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    let ranking = ""
    switch (true){
        case (saldoVitorias < 10):
            ranking = "Ferro"
            break;
        case (saldoVitorias >11 && saldoVitorias < 20):
            ranking = "Bronze"
            break;
        case (saldoVitorias >21 && saldoVitorias < 50):
            ranking = "Prata"
            break;
        case (saldoVitorias >51 && saldoVitorias < 80):
            ranking = "Ouro"
            break;
        case (saldoVitorias >81 && saldoVitorias < 90):
            ranking = "Diamante"
            break;
        case (saldoVitorias >91 && saldoVitorias < 100):
            ranking = "Lendário"
            break;
        case (saldoVitorias > 101):
            ranking = "Imortal"
            break;
    }
    console.log("o Herói tem saldo de " +saldoVitorias+ " está no nível de " + ranking)
    
}

let vitorias = 50
let derrotas = 2
rankear(vitorias, derrotas)