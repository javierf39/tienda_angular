import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //carrito con los valores enviados a traves del observable
  productosCarrito = this.compraSvc.cantidad$;

  constructor(private compraSvc: CompraService) { }

  ngOnInit(): void {
  }
  
 
}
