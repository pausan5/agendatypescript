import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { telefono } from './telefono';

// creamos 3 personas
const persona1 = new Persona(
  'Lucas',
  'Morales',
  30,
  '36618655B',
  new Date(1990, 4, 20),
  'azul',
  'masculino',
  'Notas de Lucas',
);
const persona2 = new Persona(
  'Emma',
  'Llado',
  25,
  '01145874T',
  new Date(1996, 5, 3),
  'rojo',
  'femenino',
  'Notas de Emma',
);
const persona3 = new Persona(
  'Gerardo',
  'Monclús',
  40,
  '11111111C',
  new Date(1981, 12, 15),
  'verde',
  'masculino',
  'Notas de Gerardo',
);

// agregamos direccion, mail y telefono a las personas
persona1.agregarDireccion(new Direccion('Calle Pallars', 110, 'Barcelona', 'Barcelona', '08018', 4, 'B'));
persona1.agregarMail(new Mail('personal', 'lucasm@gmail.com'));
persona1.agregartelefono(new telefono('móvil', 662333584));

persona2.agregarDireccion(new Direccion('Av Paralelo', 54, 'Barcelona', 'Barcelona', '08004', 2, '3'));
persona2.agregarMail(new Mail('trabajo', 'emma@llado.com'));
persona2.agregartelefono(new telefono('fijo', 912345678));

persona3.agregarDireccion(new Direccion('Calle Palacio', 5, 'Huesca', 'Huesca', '22002', 1, 'B'));
persona3.agregarMail(new Mail('personal', 'gerarmon@gmail.com'));
persona3.agregartelefono(new telefono('móvil', 678901234));

//ordenamos como queremos ver los datos de las personas
const personas: Persona[] = [persona1, persona2, persona3];
for (const persona of personas) {
  console.log(`Nombre: ${persona.nombre}`);
}

for (const persona of personas) {
  console.log(`\nDatos de ${persona.nombre} ${persona.apellidos}:`);
  console.log(`- Edad: ${persona.edad}`);
  console.log(`- DNI: ${persona.dni}`);
  console.log(`- Fecha de nacimiento: ${persona.cumpleanos.toLocaleDateString()}`);
  console.log(`- Color favorito: ${persona.colorFav}`);
  console.log(`- Sexo: ${persona.sexo}`);
  console.log(`- Notas: ${persona.notas}`);
  console.log('- Direcciones:');
  for (const direccion of persona.direcciones) {
    console.log(`  * ${direccion.calle} ${direccion.numero}, ${direccion.poblacion}, ${direccion.provincia}`);
  }
  console.log('- Mails:');
  for (const mail of persona.mails) {
    console.log(`  * ${mail.tipo}: ${mail.direccion}`);
  }
  console.log('- Teléfonos:');
  for (const telefono of persona.telefonos) {
    console.log(`  * ${telefono.tipo}: ${telefono.numero}`);
  }
}

// mostramos todas las personas antes de la modificacion
console.log('Personas antes de la modificación:');
console.log(persona1);
console.log(persona2);
console.log(persona3);

// modificamos la persona2 buscandola por DNI
const personaModificada = persona2.buscarPorDni('01145874T');
if (personaModificada) {
  personaModificada.agregarDireccion(new Direccion('Calle Modesto Lafuente', 92, 'Madrid', 'Madrid', '28003', 4, 'D'));
  personaModificada.agregarMail(new Mail('personal', 'emmallado@gmail.com'));
  personaModificada.agregartelefono(new telefono('móvil', 678901234));
}

// mostramos todas las personas despues de la modificacion
console.log('Personas después de la modificación:');
console.log(persona1);
console.log(persona2);
console.log(persona3);
