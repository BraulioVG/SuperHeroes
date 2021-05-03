import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {

  constructor() { }
  villanos: string []= ['SANDMAN', 'VENOM', 'LEX LUTHOR', 'THANOS', 'BANE'];
  poder: number []= [50,60,70,80,90];
  base = 1;

  ngOnInit(): void {
  }
  acumular(valor: number, i:number){

    this.poder[i] += valor;
    
  }

}
