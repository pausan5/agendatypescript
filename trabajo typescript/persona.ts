import { Direccion } from './direccion';
import { Mail } from './mail';
import { telefono } from './telefono';

export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanos: Date;
  colorFav: string;
  sexo: string;
  notas: string;
  direcciones: Direccion[] = [];
  mails: Mail[] = [];
  telefonos: telefono[] = [];

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: Date,
    colorFav: string,
    sexo: string,
    notas: string,
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFav = colorFav;
    this.sexo = sexo;
    this.notas = notas;
  }

  agregarDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  agregarMail(mail: Mail) {
    this.mails.push(mail);
  }
  
  agregartelefono(telefono: telefono) {
    this.telefonos.push(telefono);
  }

  buscarPorDni(dni: string): Persona | null {
    if (this.dni === dni) {
      return this;
    }
    return null;
  }
}