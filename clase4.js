/* Listas:
Para poder definir una lista se necesita una cabeza y una cola, se necesita saber cuándo empieza y cuándo termina
Una lista está vacía cuando no tiene cabeza
*/
//Lista anidada:
class Tarea {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.subtareas = [];
    }

    append(subtarea) {
        this.subtareas.push(subtarea);
    }

    peek() {
        return this.subtareas[0];
    }

    size() {
        return this.subtareas.length;
    }

    remove(subtarea) {
        const index = this.subtareas.indexOf(subtarea);
        if (index !== -1) {
            this.subtareas.splice(index, 1);
        }
    }

    print() {
        let nodo = this.head;
        while (node != null){
            console.log(`Valor ${node.value} | Next: ${nodo.siguiente?.value || null}`)
            node = nodo.siguiente;
        }
    }
}

const tareaPrincipal = new Tarea("Completar proyecto", "Terminar el desarrollo del sitio web");
const tarea1 = new Tarea("Investigar", "Investigar tecnologías y herramientas");
const tarea2 = new Tarea("Escribir código", "Desarrollar funcionalidades");
const tarea3 = new Tarea("Hacer pruebas", "Realizar pruebas de funcionamiento");

tareaPrincipal.append(tarea1);
tareaPrincipal.append(tarea2);
tareaPrincipal.append(tarea3);

tareaPrincipal.print();

//Lista doblemente anidada:
class Nodo {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDobleEnlazada {
    constructor() {
        this.cabecera = null;
    }

    append(titulo, descripcion) {
        const nuevoNodo = new Nodo(titulo, descripcion);
        if (!this.cabecera) {
            this.cabecera = nuevoNodo;
        } else {
            let nodoActual = this.cabecera;
            while (nodoActual.siguiente) {
                nodoActual = nodoActual.siguiente;
            }
            nodoActual.siguiente = nuevoNodo;
            nuevoNodo.anterior = nodoActual;
        }
    }

    peek() {
        return this.cabecera;
    }

    size() {
        let count = 0;
        let nodoActual = this.cabecera;
        while (nodoActual) {
            count++;
            nodoActual = nodoActual.siguiente;
        }
        return count;
    }

    remove(titulo) {
        let nodoActual = this.cabecera;
        while (nodoActual) {
            if (nodoActual.titulo === titulo) {
                if (nodoActual.anterior) {
                    nodoActual.anterior.siguiente = nodoActual.siguiente;
                } else {
                    this.cabecera = nodoActual.siguiente;
                }
                if (nodoActual.siguiente) {
                    nodoActual.siguiente.anterior = nodoActual.anterior;
                }
                break;
            }
            nodoActual = nodoActual.siguiente;
        }
    }

    print() {
        let nodoActual = this.cabecera;
        while (nodoActual) {
            console.log(`Tarea: ${nodoActual.titulo}`);
            console.log(`Descripción: ${nodoActual.descripcion}`);
            nodoActual = nodoActual.siguiente;
        }
    }
}

const listaDoble = new ListaDobleEnlazada();
listaDoble.append("Completar proyecto", "Terminar el desarrollo del sitio web");
listaDoble.append("Investigar", "Investigar tecnologías y herramientas");
listaDoble.append("Escribir código", "Desarrollar funcionalidades");
listaDoble.append("Hacer pruebas", "Realizar pruebas de funcionamiento");

listaDoble.print()