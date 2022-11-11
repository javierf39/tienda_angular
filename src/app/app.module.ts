import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { GrillaProductosComponent } from './componentes/grilla-productos/grilla-productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { DetalleVentaComponent } from './pages/detalle-venta/detalle-venta.component';

import { FormsModule } from '@angular/forms';
import { BannerComponent } from './componentes/banner/banner.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
    ProductoComponent,
    GrillaProductosComponent,
    DetalleProductoComponent,
    DetalleVentaComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
