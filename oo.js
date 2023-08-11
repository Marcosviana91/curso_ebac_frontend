function Veiculo(modelo, fabricante, peso, velocidade_max, autonomia) {
    this.modelo = modelo,
    this.fabricante = fabricante,
    this.peso = peso,
    this.velocidade_max = velocidade_max,
    this.autonomia = autonomia,

    this.acelerar= ()=>{
        console.log(this.modelo + " está acelerando");
    },
    this.freiar= ()=>{
        console.log(this.modelo + "está freiando");
    }
}

function Veiculo_Passeio (modelo, fabricante, peso, velocidade_max, autonomia, capacidade_passageiros) {
    this.capacidade_passageiros = capacidade_passageiros,

    this.embarcar = (qtd_passageiro)=>{
        console.log(this.modelo+ ": Embarcando "+qtd_passageiro+" passageiro(a)");
    },
    this.desembarcar= (qtd_passageiro)=>{
        console.log(this.modelo+ ": Desembarcando "+qtd_passageiro+" passageiro(a) em " +this.modelo);
    }

    Veiculo.call(this, modelo, fabricante, peso, velocidade_max, autonomia)
}

function Veiculo_Carga (modelo, fabricante, peso, velocidade_max, autonomia, capacidade_carga) {
    this.capacidade_carga = capacidade_carga,

    this.carregar = (qtd_carga)=>{
        console.log(this.modelo+ ": Carregando "+qtd_carga+" kg");
    },
    this.descarregar= (qtd_carga)=>{
        console.log(this.modelo+ ": Descarregando "+qtd_carga+" kg");
    }

    Veiculo.call(this, modelo, fabricante, peso, velocidade_max, autonomia)
}

const carro_Gol = new Veiculo_Passeio('Gol', 'WV', 1200, 140, 400, 5)
const carro_F1000 = new Veiculo_Carga('F-1000', 'Ford', 2500, 140, 500, 3500)
const trator = new Veiculo_Carga('Trator', 'Caterpila', 3500, 40, 150, 5500)

// console.log(carro_Gol instanceof Veiculo);
// console.log(carro_Gol);
// console.log(carro_F1000);
// console.log(trator);

carro_Gol.embarcar(1)
carro_F1000.carregar(200)
trator.acelerar()