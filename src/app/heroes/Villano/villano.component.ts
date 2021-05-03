import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {

  constructor() { }

  base = 1;

  villanos: string []= ['SANDMAN', 'VENOM', 'LEX LUTHOR', 'THANOS', 'VANE'];
  universo: string []= ['MARVEL', 'MARVEL', 'DC', 'MARVEL', 'DC'];
  poder: number []= [0,0,0,0,0];
  

  ngOnInit(): void {
  }
  acumular(valor: number, i:number){

    this.poder[i] += valor;
    
  }

}
