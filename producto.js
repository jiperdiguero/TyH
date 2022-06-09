class Producto {
    constructor(nombre,precio) {
        this.nombre=nombre
        this.precio=precio
    }

    getPrecio(){
        return this.precio
    }
    setPrecio(valor){
        this.precio=valor
    }
}

module.exports=Producto