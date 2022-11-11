import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GrillaProductosComponent } from './componentes/grilla-productos/grilla-productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { DetalleVentaComponent } from './pages/detalle-venta/detalle-venta.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path:'', component:GrillaProductosComponent},
  {path:'producto/:categoria', component:ProductosComponent},
  {path:'detalle-producto/:id', component:DetalleProductoComponent},
  {path:'detalle-venta', component:DetalleVentaComponent},
  {path:'**', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
