import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  productosCarrito: Producto[] =[];

  constructor() { }

  //crear observables
  private carritoSubject = new BehaviorSubject<Producto[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private cantidadProductosSubject = new BehaviorSubject<number>(0);

  //getters para acceder a los observables desdes otra parte del proyecto
  get carrito$():Observable<Producto[]>{
    return this.carritoSubject;
  };

  get total$():Observable<number>{
    return this.totalSubject;
  };

  get cantidad$():Observable<number>{
    return this.cantidadProductosSubject;
  };

  //funcion para obtener los valores que cada observable
  obtenerDatos(producto:Producto){
    this.agregarProductoCarrito(producto);
    this.obtenerCantidad();
    this.obtenerTotal();
  };

  //funciona para agregar productos al carrito
  agregarProductoCarrito(producto:Producto){
    //comprobar si un mismo producto ya se encuentra en el carrito
    const productoEnCarrito = this.productosCarrito.find(product => product.id == producto.id);

    //si existe, aumentar su cantidad en uno y modificar su subtotal
    if(productoEnCarrito){
      productoEnCarrito.quantity += 1;
      productoEnCarrito.subTotal = productoEnCarrito.quantity*productoEnCarrito.price
    //si no existe, agregar el nuevo producto al carrito
    }else{
      this.productosCarrito.push({...producto, quantity:1, subTotal:producto.price});
    }
    //enviar el carrito con los productos a traves del observable
    this.carritoSubject.next(this.productosCarrito);
  };

  //quitar productos del carrito mediante el id
  quitarProductoCarrito(id:number){
    //filtro para los productos que tengan un id distinto al que se va a eliminar y los mantengo en el carrito
    this.productosCarrito = this.productosCarrito.filter(producto => {
      return producto.id !== id;
    });
    //envio el carrito sin el producto eliminado
    this.carritoSubject.next(this.productosCarrito);
    //actualizo los datos de los observables
    this.obtenerCantidad();
    this.obtenerTotal();
  };

  //funcion para obtener la cantidad de productos
  obtenerCantidad(){
    //utilizando reduce, en cada iterecion se suma al acumular la cantidad por producto que se encuentra en el carrito
    const cantidadProducto = this.productosCarrito.reduce((acc, producto) => acc+=producto.quantity,0);
    //se envia el resultado a traves del observable
    this.cantidadProductosSubject.next(cantidadProducto);
  };

  //funcion para obtener el total a pagar
  obtenerTotal(){
    //con reduce se suman los resultado de la cantidad por producto multiplicado con su respectivo precio
    const total = this.productosCarrito.reduce((acc, producto) => acc+=(producto.quantity*producto.price),0); 
    //envio el resultado a traves del observable 
    this.totalSubject.next(total);
  };

  //funcion para resetear todos los datos
  resetInfo(){
    //carrito vacio
    this.productosCarrito=[];
    //se envio un arreglo vacio 
    this.carritoSubject.next([]);
    //se envia 0 cantidad de producos
    this.cantidadProductosSubject.next(0);
    //se encio 0 en el total a pagar
    this.totalSubject.next(0);
  };
}

