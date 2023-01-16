import { Component, OnInit } from '@angular/core';
import { ListarporDni } from 'src/app/model/ListarporDni';
import { Salida } from 'src/app/models/salida';
import { SalidaService } from 'src/app/services/salida.service';

@Component({
  selector: 'app-list-dni-colaborador',
  templateUrl: './list-dni-colaborador.component.html',
  styleUrls: ['./list-dni-colaborador.component.css']
})
export class ListDniColaboradorComponent implements OnInit {


  salidasDni : ListarporDni[]=[];
  salidaDni : ListarporDni = new ListarporDni();

  constructor(private salService : SalidaService) { }

  ngOnInit(): void {
}
listDniColaborador(colaborador : String){
  console.log("primero:"+colaborador+"-")
  this.salService.getDniSalida(colaborador)
    .subscribe(response => this.salidasDni = response);
    console.log(colaborador);
}


}
 