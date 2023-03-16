export class telefono {
    tipo: string;
    numero: number;
  
    constructor(tipo: string, numero: number) {
      this.tipo = tipo;
      this.numero = numero;
    }
  
    toString() {
      return `${this.tipo}: ${this.numero}`;
    }
  }
  