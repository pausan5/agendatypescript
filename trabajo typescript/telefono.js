"use strict";
exports.__esModule = true;
exports.telefono = void 0;
var telefono = /** @class */ (function () {
    function telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    telefono.prototype.toString = function () {
        return "".concat(this.tipo, ": ").concat(this.numero);
    };
    return telefono;
}());
exports.telefono = telefono;
