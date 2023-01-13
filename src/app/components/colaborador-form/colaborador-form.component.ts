import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Colaborador } from 'src/app/models/colaborador';
import { Oficina } from 'src/app/models/oficina';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css']
})



export class ColaboradorFormComponent implements OnInit{

  colaborador : Colaborador = new Colaborador();

  oficinas: Oficina[]=[];

  constructor(private colService : ColaboradorService, private activatedRoute: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
      this.colService.getOficina()
      .subscribe(response => this.oficinas = response)

      this.activatedRoute.params
      .subscribe(params => {
        let id: number = params['id'];
        if(id){
          this.colService.obtenerColaborador(id)
          .subscribe(response => this.colaborador = response);
        }
      })
  } 

  insertColaborador( ){
    console.log(this.colaborador)
    this.colService.insertColaborador(this.colaborador)
    .subscribe(response => this.router.navigate(['']));
  }

  actualizarColaborador(){
    this.colService.actualizarColaborador(this.colaborador)
    .subscribe(response => this.router.navigate(['']));
  }

  compararNivelCol(o1: Colaborador, o2:Colaborador): boolean{
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }

}