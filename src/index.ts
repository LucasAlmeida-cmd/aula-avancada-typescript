import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";

const meuCarro: Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  portas: 4,
  acelerar: function () {
    return `${this.marca} ${this.modelo} está acelerando!`;
  },
};

const minhaMoto: Moto = {
  marca: "Honda",
  modelo: "CB 500F",
  ano: 2023,
  cilindradas: 500,
  acelerar: function () {
    return `${this.marca} ${this.modelo} está acelerando!`;
  },
};

console.log("Carro:", meuCarro);
console.log(meuCarro.acelerar());

console.log("Moto:", minhaMoto);
console.log(minhaMoto.acelerar());

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();


gerenciadorCarros.adicionar(meuCarro);
gerenciadorMotos.adicionar(minhaMoto);