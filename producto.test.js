const Producto=require("./producto");
// const Variantes =require("./productoVariante")
let remera; //, zapatilla,v1,v2,v3 ;
beforeEach(()=>{
    remera= new Producto("remera",100);
    // zapatilla= new Producto("zapatilla",200);
    //v1=new Variantes("s","negro","algodon",20,remera)
    //v2=new Variantes("m","negro","algodon",25,remera)
    //v3=new Variantes("L","negro","algodon",30,remera)

    //v2.setStock(40)
    //zapatilla.setPrecio(150)
});
test('test productos precio', () => {

    expect(remera.getPrecio()).toBe(100);
    remera.setPrecio(500);
    expect(remera.getPrecio()).toBe(500); 
    //expect(pro.getPrecio()).toBe(100);
    //expect(v1.getPrecio()).toBe(100);
    //expect(zapatilla.getPrecio()).toBe(150);
    /*expect(() => {zapatilla.setPrecio(-50)}).toThrow(/Error/);*/
  })