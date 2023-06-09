import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInstitutoDTO } from 'src/app/model/Instituto';
import { InstitutoService } from 'src/app/services/instituto.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-instituto-details',
  templateUrl: './instituto-details.component.html',
  styleUrls: ['./instituto-details.component.scss']
})
export class InstitutoDetailsComponent implements OnInit  {

  sendAnimation : boolean = false;
  animation : boolean = false;

  showForm : boolean = false;
  showButtons : boolean = true;

  instituto! : GetInstitutoDTO

  instForm! : FormGroup

  diasSemana : string[] = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']

  constructor(
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private institutoService : InstitutoService,
    private notiService : NotificationService
  ){}

  ngOnInit(): void {
    this.animation = true;
    this.route.paramMap.subscribe( (paramMap : any) => {
      const {params} = paramMap;
      this.loadInstituto(params.id)
    })
  }

  loadInstituto( id : number ){

    this.institutoService.getInsitutoById( id ).subscribe( response => {
      this.instituto = response
      //filtro el instituto acutal y ordeno los horarios
      for ( let medico of this.instituto.medicos ){
        medico.institutos = medico.institutos.filter( instituto => instituto.id == this.instituto.id )
        for ( let instituto of medico.institutos ) {
          instituto.horarios = instituto.horarios.sort( (a , b) => ( a.dia - b.dia ) )
        }
      }      
      this.instForm = this.fb.group({
        userId: [localStorage.getItem('user') ,Validators.required],
        id: [this.instituto.id, Validators.required],
        nombre: [this.instituto.nombre , Validators.required],
        direccion: [this.instituto.direccion , Validators.required],
        cuit: [this.instituto.cuit , Validators.required]
      })
      this.animation = false;
    })

  }

  updateInstituto(){

    this.institutoService.updateInstituto(this.instForm.value).subscribe( 
      response => {
        this.sendAnimation = false;
        this.notiService.OkNotification("Insituto actualizado con éxito!!")
        this.router.navigate([`institutos`])
      }, error => {
        this.sendAnimation = false;
        this.notiService.ErrorNotification("Ups algo salió mal")
        this.router.navigate([`institutos`])
      }
    )
  }

  toggleForm(){
    this.showForm = !this.showForm
    this.showButtons = !this.showButtons
  }

}
