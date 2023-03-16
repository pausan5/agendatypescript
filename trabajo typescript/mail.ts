export class Mail {
    tipo: string;
    direccion: string;
  
    constructor(tipo: string, direccion: string) {
      this.tipo = tipo;
      this.direccion = direccion;
    }
  
    toString() {
      return `${this.tipo}: ${this.direccion}`;
    }
  }
  