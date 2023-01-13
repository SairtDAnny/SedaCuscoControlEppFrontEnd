import { Component, OnInit} from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})

export class ColaboradorComponent implements OnInit {

  colaboradores: Colaborador[] = [];

  constructor(private colService : ColaboradorService) { }

  ngOnInit(): void {
      this.colService.getColaborador()
      .subscribe(response => this.colaboradores = response);
  }

  eliminarProducto(id : number){
    this.colService.eliminarColaborador(id)
    .subscribe(response =>{
      this.colaboradores = this.colaboradores.filter(cola=>cola.id !=id);
    })
  }

}
 