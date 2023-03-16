"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, codigoPostal, poblacion, provincia, piso, letra) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.toString = function () {
        return "".concat(this.calle, " ").concat(this.numero, " ").concat(this.piso, ", ").concat(this.codigoPostal, " ").concat(this.poblacion, " (").concat(this.provincia, ")");
    };
    return Direccion;
}());
exports.Direccion = Direccion;
