import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string []= ['Hulk', 'Saitama', 'Superman', 'Thor', 'Goku'];
  messages: string [] = [];

  add(message: string){
    this.messages.push(message);
    
  }
  
  Borrar() {
   var heroe=this.messages.push(this.heroes[0]);
    this.heroes.shift();
     return heroe;
    
    }

}

