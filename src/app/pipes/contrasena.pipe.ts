import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    // return !activar ? '*'.repeat(value.length) : value; Método corto
    if (activar) {
      return value;
    } else {
      let cantidades: string = '';
      for (let index = 0; index < value.length; index++) {
        cantidades = cantidades + '*'
      }
      return cantidades;
    }
  }
}
