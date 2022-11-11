import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() producto!: Producto
  @Output() enviarProducto = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.enviarProducto.emit(this.producto)
  };


}
