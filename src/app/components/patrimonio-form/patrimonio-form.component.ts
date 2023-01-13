import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patrimonio } from 'src/app/models/patrimonio';
import { PatrimonioService } from 'src/app/services/patrimonio.service';

@Component({
  selector: 'app-patrimonio-form',
  templateUrl: './patrimonio-form.component.html',
  styleUrls: ['./patrimonio-form.component.css']
})
export class PatrimonioFormComponent implements OnInit{

  patrimonio : Patrimonio = new Patrimonio();


  constructor(private patService : PatrimonioService, private activatedRoute: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params => {
      let id: number = params['id'];
      if(id){
        this.patService.listPatrimonio(id)
        .subscribe(response => this.patrimonio = response);
      }
    })
} 

insertPatrimonio( ){
    console.log(this.patrimonio)
    this.patService.insertPatrimonio(this.patrimonio)
    .subscribe(response => this.router.navigate(['patrimonio']));
  }

  updatePatrimonio(){
    this.patService.updatePatrimonio(this.patrimonio)
    .subscribe(response => this.router.navigate(['patrimonio']));
  }

}
 