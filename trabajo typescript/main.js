"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
// creamos 3 personas
var persona1 = new persona_1.Persona('Lucas', 'Morales', 30, '36618655B', new Date(1990, 4, 20), 'azul', 'masculino', 'Notas de Lucas');
var persona2 = new persona_1.Persona('Emma', 'Llado', 25, '01145874T', new Date(1996, 5, 3), 'rojo', 'femenino', 'Notas de Emma');
var persona3 = new persona_1.Persona('Gerardo', 'Monclús', 40, '11111111C', new Date(1981, 12, 15), 'verde', 'masculino', 'Notas de Gerardo');
// agregamos direccion, mail y telefono a las personas
persona1.agregarDireccion(new direccion_1.Direccion('Calle Pallars', 110, 'Barcelona', 'Barcelona', '08018', 4, 'B'));
persona1.agregarMail(new mail_1.Mail('personal', 'lucasm@gmail.com'));
persona1.agregartelefono(new telefono_1.telefono('móvil', 662333584));
persona2.agregarDireccion(new direccion_1.Direccion('Av Paralelo', 54, 'Barcelona', 'Barcelona', '08004', 2, '3'));
persona2.agregarMail(new mail_1.Mail('trabajo', 'emma@llado.com'));
persona2.agregartelefono(new telefono_1.telefono('fijo', 912345678));
persona3.agregarDireccion(new direccion_1.Direccion('Calle Palacio', 5, 'Huesca', 'Huesca', '22002', 1, 'B'));
persona3.agregarMail(new mail_1.Mail('personal', 'gerarmon@gmail.com'));
persona3.agregartelefono(new telefono_1.telefono('móvil', 678901234));

//ordenamos como queremos ver los datos de las personas
var personas = [persona1, persona2, persona3];
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
    var persona = personas_1[_i];
    console.log("Nombre: ".concat(persona.nombre));
}
for (var _a = 0, personas_2 = personas; _a < personas_2.length; _a++) {
    var persona = personas_2[_a];
    console.log("\nDatos de ".concat(persona.nombre, " ").concat(persona.apellidos, ":"));
    console.log("- Edad: ".concat(persona.edad));
    console.log("- DNI: ".concat(persona.dni));
    console.log("- Fecha de nacimiento: ".concat(persona.cumpleanos.toLocaleDateString()));
    console.log("- Color favorito: ".concat(persona.colorFav));
    console.log("- Sexo: ".concat(persona.sexo));
    console.log("- Notas: ".concat(persona.notas));
    console.log('- Direcciones:');
    for (var _b = 0, _c = persona.direcciones; _b < _c.length; _b++) {
        var direccion = _c[_b];
        console.log("  * ".concat(direccion.calle, " ").concat(direccion.numero, ", ").concat(direccion.poblacion, ", ").concat(direccion.provincia));
    }
    console.log('- Mails:');
    for (var _d = 0, _e = persona.mails; _d < _e.length; _d++) {
        var mail = _e[_d];
        console.log("  * ".concat(mail.tipo, ": ").concat(mail.direccion));
    }
    console.log('- Teléfonos:');
    for (var _f = 0, _g = persona.telefonos; _f < _g.length; _f++) {
        var telefono_2 = _g[_f];
        console.log("  * ".concat(telefono_2.tipo, ": ").concat(telefono_2.numero));
    }
}
// mostramos todas las personas antes de la modificacion
console.log('Personas antes de la modificación:');
console.log(persona1);
console.log(persona2);
console.log(persona3);
// modificamos la persona2 buscandola por DNI
var personaModificada = persona2.buscarPorDni('01145874T');
if (personaModificada) {
    personaModificada.agregarDireccion(new direccion_1.Direccion('Calle Modesto Lafuente', 92, 'Madrid', 'Madrid', '28003', 4, 'D'));
    personaModificada.agregarMail(new mail_1.Mail('personal', 'emmallado@gmail.com'));
    personaModificada.agregartelefono(new telefono_1.telefono('móvil', 678901234));
}
// mostramos todas las personas despues de la modificacion
console.log('Personas después de la modificación:');
console.log(persona1);
console.log(persona2);
console.log(persona3);
