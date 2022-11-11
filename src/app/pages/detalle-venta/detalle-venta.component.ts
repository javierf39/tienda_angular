import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { CompraService } from 'src/app/services/compra.service';

import swal from'sweetalert2';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.scss']
})
export class DetalleVentaComponent implements OnInit {

  constructor(private compraSvc:CompraService, private router:Router) { }

  productos!:Producto[];
  total!:number;

  cliente={
    nombre:'',
    direccion:'',
    celular:'',
    correo:''
  };

  ngOnInit(): void {
    this.compraSvc.carrito$.subscribe(
      productos => {
        this.productos = productos;
      }
    );
      this.compraSvc.total$.subscribe(total => this.total = total);
  };

  quitarProductoCarrito(id:number){
    this.compraSvc.quitarProductoCarrito(id)
  };

  confirmarCompra(e:Event){
    e.preventDefault();

    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Compra Confirmada',
      text:`Muchas gracias por tu compra ${this.cliente.nombre}`,
      showConfirmButton: false,
      timer: 2000
    });

    
    setTimeout(() => {
      this.compraSvc.resetInfo();
      this.router.navigate(['/'])
    }, 2000)
    
  };
}
