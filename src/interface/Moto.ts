import { Veiculo } from "./Veiculo";
export class Moto implements Veiculo {
    constructor(
      public modelo: string,
      public marca: string,
      public ano: number,
      public cilindradas: number
    ) {}

    acelerar(): string {
        return "aa"
    }
}
  