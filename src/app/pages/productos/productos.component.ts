import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { CompraService } from 'src/app/services/compra.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private productosSvc: ProductosService, private compraService:CompraService, private activatedRoute:ActivatedRoute) { }

  productos!:Producto[];
  categoria:any;

  ngOnInit(): void {
    // this.productosServices.getAllProducts().subscribe(
    //   (productos) => {
    //   this.productos=productos.products
    //   }
    // );
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      this.categoria = params.get('categoria');
      this.productosSvc.getProductsOfCategory(this.categoria).subscribe(productos => {
        this.productos = productos.products
      })
    });  
    const imgBanner = document.querySelector(".img-banner");
    imgBanner?.setAttribute('src',`../../../assets/img/${this.categoria.toLowerCase()}.jpg`);

  };

  agregarProducto(producto:Producto){
    this.compraService.obtenerDatos(producto);
  };

  

}
