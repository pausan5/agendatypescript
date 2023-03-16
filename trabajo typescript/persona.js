"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFav, sexo, notas) {
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFav = colorFav;
        this.sexo = sexo;
        this.notas = notas;
    }
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.agregartelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.buscarPorDni = function (dni) {
        if (this.dni === dni) {
            return this;
        }
        return null;
    };
    return Persona;
}());
exports.Persona = Persona;
