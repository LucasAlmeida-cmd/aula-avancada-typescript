import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { EstoqueVeiculos } from './classes/EstoqueVeiculos';
import { FiltroVeiculos } from './utils/FiltroVeiculos';

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

const estoqueCarros = new EstoqueVeiculos<Carro>();

estoqueCarros.adicionarEstoque("Civic", 10);
estoqueCarros.adicionarEstoque("Corolla", 5);

estoqueCarros.removerEstoque("Civic");
estoqueCarros.removerEstoque("Civic");
estoqueCarros.removerEstoque("Corolla");
estoqueCarros.removerEstoque("Corolla");

estoqueCarros.listarEstoque();

const estoqueMotos = new EstoqueVeiculos<Moto>();


estoqueMotos.adicionarEstoque("CB500", 7);
estoqueMotos.adicionarEstoque("MT-07", 3);


estoqueMotos.consultarEstoque("MT-07");


estoqueMotos.removerEstoque("CB500");
estoqueMotos.removerEstoque("MT-07");


estoqueMotos.listarEstoque();


const veiculos = [
  new Carro("Civic", "Honda", 2020, 2),
  new Carro("Corolla", "Toyota", 2021,4 ),
  new Carro("Model S", "Tesla", 2023,4),
  new Moto("CB500", "Honda", 2022, 200),
  new Moto("MT-07", "Yamaha", 2023, 200),
  new Moto("Ninja 400", "Kawasaki", 2021, 200)
];

console.log("=== Veículos do ano 2023 ===");
console.log(FiltroVeiculos.filtrarPorAno(veiculos, 2023));

console.log("\n=== Veículos da marca Honda ===");
console.log(FiltroVeiculos.filtrarPorMarca(veiculos, "Honda"));

console.log("\n=== Veículos do modelo MT-07 ===");
console.log(FiltroVeiculos.filtrarPorModelo(veiculos, "MT-07"));