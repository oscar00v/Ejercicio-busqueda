function numeroMasRepetido(arr) {
    const conteo = {};
    let maxRepeticiones = 0;
    let numeroMasRepetido;
  
    arr.forEach(num => {
      conteo[num] = (conteo[num] || 0) + 1;
      if (conteo[num] > maxRepeticiones) {
        maxRepeticiones = conteo[num];
        numeroMasRepetido = num;
      }
    });
  
    return numeroMasRepetido;
  }
  
  // Ejemplo de uso:
  const array1 = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
  console.log(numeroMasRepetido(array1)); // Salida: 6
  
  function encontrarLetras(arr) {
    return arr.filter(elemento => typeof elemento === 'string');
  }
  
  // Ejemplo de uso:
  const array2 = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
  console.log(encontrarLetras(array2)); // Salida: ['e', 'a', 'd', 'f']
  
  function numeroMasGrande(arr) {
    return Math.max(...arr);
  }
  
  // Ejemplo de uso:
  const array3 = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
  console.log(numeroMasGrande(array3)); // Salida: 12

  function numeroMasPequeno(arr) {
    return Math.min(...arr);
  }
  
  // Ejemplo de uso:
  const array4 = [1, 4, 5, -1, -7, 2, 3, 9];
  console.log(numeroMasPequeno(array4)); // Salida: -7
  

  class Contacto {
    constructor(nombre, apellidos, telefono) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
    }
  }
  
  class ListaContactos {
    constructor() {
      this.contactos = [];
    }
  
    agregarContacto(contacto) {
      this.contactos.push(contacto);
    }
  
    buscarContactoPorNombre(nombre) {
      return this.contactos.filter(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase());
    }
  }
  
  // Ejemplo de uso:
  const lista = new ListaContactos();
  const contacto1 = new Contacto('Juan', 'Pérez', '123456789');
  const contacto2 = new Contacto('María', 'González', '987654321');
  
  lista.agregarContacto(contacto1);
  lista.agregarContacto(contacto2);
  
  console.log(lista.buscarContactoPorNombre('juan')); // Muestra el contacto de Juan
  