// src/utils/RelatorioVeiculos.ts
import { Veiculo } from "../interface/Veiculo";

export function gerarRelatorio(veiculos: Veiculo[]): string {
  
  let relatorio = "Relatório de Veículos:\n";
  relatorio += "----------------------------\n";

  veiculos.forEach((veiculo, index) => {
    relatorio += `Veículo ${index + 1}:\n`;
    relatorio += `- Modelo: ${veiculo.modelo}\n`;
    relatorio += `- Marca: ${veiculo.marca}\n`;
    relatorio += `- Ano: ${veiculo.ano}\n`;
  });

  return relatorio;
}
