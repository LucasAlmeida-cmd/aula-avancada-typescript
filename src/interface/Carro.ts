import { Veiculo } from "./Veiculo";

export class Carro implements Veiculo {
    constructor(
      public modelo: string,
      public marca: string,
      public ano: number,
      public portas: number
    ) {}

    acelerar(): string {
        return "aa"
    }
}
  