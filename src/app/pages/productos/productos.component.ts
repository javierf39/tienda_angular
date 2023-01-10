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

  //al iniciar el componente, se obtiene la categoria del producto mediante activatedRouter y obtener los productos por categoria
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      this.categoria = params.get('categoria');
      this.productosSvc.getProductsOfCategory(this.categoria).subscribe(productos => {
        this.productos = productos.products
      })
    });  
    //mostramos la imagen del banner segun la categoria del producto seleccionado
    const imgBanner = document.querySelector(".img-banner");
    imgBanner?.setAttribute('src',`../../../assets/img/${this.categoria.toLowerCase()}.jpg`);

  };

  //funcion para agregar productos al carrito
  agregarProducto(producto:Producto){
    this.compraService.obtenerDatos(producto);
  };

  

}
