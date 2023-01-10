import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  //se recibe la categoria desde el componente padre
  @Input() categoria!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
