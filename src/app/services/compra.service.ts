import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  productosCarrito: Producto[] =[];

  constructor() { }

  private carritoSubject = new BehaviorSubject<Producto[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private cantidadProductosSubject = new BehaviorSubject<number>(0);

  get carrito$():Observable<Producto[]>{
    return this.carritoSubject;
  };

  get total$():Observable<number>{
    return this.totalSubject;
  };

  get cantidad$():Observable<number>{
    return this.cantidadProductosSubject;
  };

  obtenerDatos(producto:Producto){
    this.agregarProductoCarrito(producto);
    this.obtenerCantidad();
    this.obtenerTotal();
  };

  agregarProductoCarrito(producto:Producto){
    const productoEnCarrito = this.productosCarrito.find(product => product.id == producto.id);

    if(productoEnCarrito){
      productoEnCarrito.quantity += 1;
      productoEnCarrito.subTotal = productoEnCarrito.quantity*productoEnCarrito.price
    }else{
      this.productosCarrito.push({...producto, quantity:1, subTotal:producto.price});
    }
    this.carritoSubject.next(this.productosCarrito);
  };

  quitarProductoCarrito(id:number){
    this.productosCarrito = this.productosCarrito.filter(producto => {
      return producto.id !== id;
    });
    this.carritoSubject.next(this.productosCarrito);
    this.obtenerCantidad();
    this.obtenerTotal();
  };

  obtenerCantidad(){
    const cantidadProducto = this.productosCarrito.reduce((acc, producto) => acc+=producto.quantity,0);
    this.cantidadProductosSubject.next(cantidadProducto);
  };

  obtenerTotal(){
    const total = this.productosCarrito.reduce((acc, producto) => acc+=(producto.quantity*producto.price),0); 
    this.totalSubject.next(total);
  };
}

