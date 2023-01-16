import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultSalida =[];
    for(const salida of value){
      if(salida.tipo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('sss');
        resultSalida.push(salida);
      }
    }
    return resultSalida;
  }

}
