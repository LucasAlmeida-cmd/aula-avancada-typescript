
export class EstoqueVeiculos<T> {
    private estoque: Record<string, number> = {};
  
    adicionarEstoque(modelo: string, quantidade: number): void {
      if (this.estoque[modelo]) {
        this.estoque[modelo] += quantidade;
      } else {
        this.estoque[modelo] = quantidade;
      }
      console.log(`Adicionado ${quantidade} unidades do modelo ${modelo} ao estoque.`);
    }
  
    removerEstoque(modelo: string): void {
      if (this.estoque[modelo]) {
        if (this.estoque[modelo] > 0) {
          this.estoque[modelo]--;
          console.log(`Removido 1 unidade do modelo ${modelo} do estoque.`);
        } else {
          console.log(`O modelo ${modelo} está sem estoque!`);
        }
      } else {
        console.log(`O modelo ${modelo} não existe no estoque.`);
      }
    }
  
    consultarEstoque(modelo: string): void {
      if (this.estoque[modelo]) {
        console.log(`Estoque do modelo ${modelo}: ${this.estoque[modelo]} unidades.`);
      } else {
        console.log(`O modelo ${modelo} não existe no estoque.`);
      }
    }
  
    listarEstoque(): void {
      console.log("Estoque Atual:");
      console.log(this.estoque);
    }
  }
  