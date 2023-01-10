import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grilla-productos',
  templateUrl: './grilla-productos.component.html',
  styleUrls: ['./grilla-productos.component.scss']
})
export class GrillaProductosComponent implements OnInit {

  constructor(private router:Router) { }
  
  //al iniciar el componente, se obtienen todos los enlaces y se agrega a cada uno el evento click, para viajar a determinadas rutas
  ngOnInit(): void {
    const enlaces = document.querySelectorAll(".enlace");
    enlaces.forEach(a => a.addEventListener('click', (event:any) => {
      this.router.navigate(['/producto', event.target.innerHTML]);
    })
  );
  }

}
