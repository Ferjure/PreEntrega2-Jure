let nombreLocal= prompt('Ingrese el nombre del local')
let numero_de_producto_a_comprar = prompt('Ingrese mediante un numero entero el numero de producto a ingresar');


let contador = 0;
let listaProductos = []

class local {
    constructor(nombre, producto) {

        this._nombre = function () {
            return nombre;
        };

        this._producto = function () {
            return producto || [];
        };


    }
    getName() {
        return this._nombre();
    }
    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    agregarProducto(producto) {
        this.producto.push(producto);
    }

    getProductos() {

        this._producto().forEach(function (elemento, index) {
            console.log(`Numero del Producto: ${index}`);
            console.log(`Nombre: ${elemento._nombre()}`);
            console.log(`Marca: ${elemento._marca()}`);
            console.log(`Color: ${elemento._color()}`);
            console.log(`Precio: ${elemento._precio()}`);
        });

    }

    getValorTotalProductos(){
        let valorProductos = []
        this._producto().forEach(function (elemento, index) {
            valorProductos.push(elemento._precio());
        });
        console.log('Valor total de los productos', valorProductos.reduce( ( valorAnterior, valorActual ) => valorAnterior+valorActual, 0 ))
    }

    getProductoNombre( busquedaDeNombre ) {

        this._producto().forEach(function (elemento, index) {

            if (elemento._nombre() == busquedaDeNombre) {

                console.log(`Numero de Producto: ${index}`);
                console.log(`Nombre: ${elemento._nombre()}`);
                console.log(`Marca: ${elemento._marca()}`);
                console.log(`Color: ${elemento._color()}`);
                console.log(`Precio: ${elemento._precio()}`);

            }

        });

    }
}

class Producto {

    constructor( nombre, marca, color, precio,) {

        this._nombre = function () {
            return nombre;
        };

        this._marca = function () {
            return marca;
        };

        this._color = function () {
            return color;
        };

        this._precio = function () {
            return precio;
        };

    }
    getName() {
        return this._nombre();
    }
    getMarca() {
        return this._marca();
    }
    getColor() {
        return this._color();
    }
    getPrecio() {
        return this._precio();
    }

    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    setMarca(nueva_marca) {
        this._marca = function () {
            return nueva_marca;
        };
    }
    setColor(nuevo_color) {
        this._color = function () {
            return nuevo_color;
        };
    }
    setPrecio(nuevo_precio) {
        this._precio = function () {
            return nuevo_precio;
        };
    }
}


while( contador < numero_de_producto_a_comprar ){

    let nombre = prompt('Ingrese el nombre del producto')
    let marca = prompt('Ingrese la marca del producto')
    let color = prompt('Ingrese el color')
    let precio = parseInt(prompt('Ingrese el precio'))
    let producto = new Producto( nombre, marca, color, precio )
    listaProductos.push( producto )
    contador++
}

let buscar = prompt('Ingrese el nombre del producto que desea buscar')

const imprimirLocal = ( local, productos, buscar )=>{

    console.log( 'Nombre del local:', local.getName() )
    console.log('NOMBRE DEL PRODUCTO A BUSCAR = ' + buscar)

    // console.log( 'Salida de ARRAY OBJETOS PACIENTES',pacientes )
    for(let producto of productos){
        console.log('Salida del producto', producto._nombre())
    }
    console.log('_____________PRODUCTOS POR LOCAL____________________')
    local.getProductos();
    console.log('________PRODUCTO BUSCADO POR NOMBRE_________________')
    local.getProductoNombre(buscar);
    console.log('_____________TOTAL PRECIO DE PRODUCTOS______________')
    local.getValorTotalProductos();
}

let locales = new local( nombreLocal, listaProductos )

imprimirLocal( locales,listaProductos, buscar )



