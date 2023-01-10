import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { CompraService } from 'src/app/services/compra.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  id!:number;
  producto!:Producto;



  constructor(private activatedRoute:ActivatedRoute, private productoSvc:ProductosService, private compraSvc:CompraService) { }

  //al inciar el componente, se cargan los productos que vienen desde el servicio
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productoSvc.getProduct(this.id).subscribe(
      producto => this.producto = producto
    );
  };

  //funcion para agregar productos al carrito
  agregarCarrito(producto:Producto){
    this.compraSvc.obtenerDatos(producto);
  };

}
