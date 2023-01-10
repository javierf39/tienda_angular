import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  //recibir los productos desde el componente padre
  @Input() producto!: Producto
  //enviar los productos que se agregaran al carrito de compras
  @Output() enviarProducto = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  //emitir el evento creado
  agregarProducto(){
    this.enviarProducto.emit(this.producto)
  };


}
