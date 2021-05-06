import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Capitán América';
  nombre2: string= 'ferNaNdo antúneZ'
  videoUrl:string ='https://www.youtube.com/embed/fXpMiweCC_o';
  arreglo: Array<number> = [1,2,3,4,5,6,7,8,9];
  PI: number= Math.PI;
  porcentaje: number= 0.234
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = false;
  idioma: string = 'es';

  heroe = {
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle:'Primera',
      casa:20
    }
  }

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');      
    }, 4500);
  });

}
