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

  //al inicializar el componente, se obtiene el total a pagar desde la funcion del servicio
  ngOnInit(): void {
    this.compraSvc.carrito$.subscribe(
      productos => {
        this.productos = productos;
      }
    );
      this.compraSvc.total$.subscribe(total => this.total = total);
  };

  //funcion para quitar productos del carrito mediante su id
  quitarProductoCarrito(id:number){
    this.compraSvc.quitarProductoCarrito(id)
  };

  //mensaje de confirmacion de la venta
  confirmarCompra(e:Event){
    //innecesario con ngSubmit
    e.preventDefault();

    //paqueta de sweetAlert
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Compra Confirmada',
      text:`Muchas gracias por tu compra ${this.cliente.nombre}`,
      showConfirmButton: false,
      timer: 2000
    });

    //resetear los datos de los observables y cambiar de ruta despues de 2 segundos
    setTimeout(() => {
      this.compraSvc.resetInfo();
      this.router.navigate(['/'])
    }, 2000)
    
  };
}
