import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ObraSocial } from 'src/app/model/ObraSocial';
import { Plan } from 'src/app/model/Plan';
import { GetPacienteDTO } from 'src/app/model/Paciente';
import { ObraSocialDTO } from 'src/app/model/ObraSocial';
import { PlanDTO } from 'src/app/model/Plan';
import { ObraSocialService } from 'src/app/services/obra-social.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-details',
  templateUrl: './paciente-details.component.html',
  styleUrls: ['./paciente-details.component.scss']
})
export class PacienteDetailsComponent implements OnInit{

  showForm : boolean = false;
  showButtons : boolean = true;

  editedAfiliados : any[]  = []
  isObraSocialSelected : boolean = true;
  isNewPlanSelected : boolean = true;
  isNewObraSocialSelected : boolean = true;
  selectedObrasSociales : any[] = []
  NewObraSocialSelected! : ObraSocial
  NewPlanSelected! : PlanDTO;
  newAfiliado! : string;

  paciente! : GetPacienteDTO
  obras : ObraSocial[] = [] //obras sociales que tiene el paciente sin particular
  actualObraSocial! : ObraSocialDTO
  defaultPlanes : PlanDTO[] = []

  obrasSociales! : ObraSocial[]; //obras sociales QUE NO tiene el paciente
  planes! : Plan[]
  isSubmitted : boolean = false;

  pacienteForm! : FormGroup
  toLoadObrasSociales! : FormArray

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private pacienteService : PacienteService,
    private fb : FormBuilder,
    private obraSocialService : ObraSocialService
  ){}

  ngOnInit(): void {

    this.route.paramMap.subscribe( (paramMap : any) => {
      const {params} = paramMap;
      this.loadPaciente(params.id)
    })
    
  }

  loadPaciente( id : any ){
    this.pacienteService.getPacienteById( id ).subscribe( response => {
      this.paciente = response
      console.log("paciente recibido", response);
      
      this.pacienteForm = this.fb.group({
        userId : [localStorage.getItem('user') , Validators.required],
        id: [this.paciente.id , Validators.required ],
        nombre : [this.paciente.nombre , Validators.required ],
        dni : [this.paciente.dni , Validators.required ],
        mail : [this.paciente.mail , [Validators.required, Validators.email] ],
        tel : [this.paciente.tel , Validators.required ],
        direccion :  [this.paciente.direccion , Validators.required ],
        obrasSociales : this.fb.array([])
      })
        //filtro las obras sociales que tiene el paciente para el array obrasSociales
        this.obraSocialService.getObrasSociales( localStorage.getItem('user') ).subscribe( response => {        
        //las de mi paciente sin particular
        this.obras = response.filter(obra => {
          return obra.nombre !== 'Particular' && this.paciente.obrasSociales.some(os => os.nombre === obra.nombre);
        });
        console.log(this.obras);
        
        // las que no tiene mi paciente sin particular        
        this.obrasSociales = response.filter(obra => {
          const isParticular = obra.nombre === 'Particular';
          const existsInPatient = this.paciente.obrasSociales.some(os => os.nombre === obra.nombre);
          return !isParticular && !existsInPatient;
        });
        // creo los valores default
        for (let obra of this.obras) {
          const selectedObraSocial = this.paciente.obrasSociales.find(os => os.nombre === obra.nombre);
          if (selectedObraSocial != null) {
            this.defaultPlanes.push(selectedObraSocial.plan);
          }
        }
        this.toLoadObrasSociales = this.pacienteForm.get('obrasSociales') as FormArray
      })      
    })
  }

  updatePaciente(){

    console.log("obras sociales editadas",this.selectedObrasSociales);
    console.log("obra social añadida",this.NewObraSocialSelected, this.NewPlanSelected, this.newAfiliado);
    console.log("paciente form", this.pacienteForm);

    if ( this.selectedObrasSociales.length > 0 ){
      for ( let obra of this.selectedObrasSociales ){
        const obraSocial = this.fb.group({
          idObraSocial : obra.obraSocial,
          idPlan : obra.plan,
          afiliado : obra.afiliado
        })
        this.toLoadObrasSociales.push(obraSocial)
      }
    }
    if ( this.NewObraSocialSelected != undefined && this.NewPlanSelected != undefined && this.newAfiliado != undefined ){
      const obraSocial = this.fb.group({
        idObraSocial : this.NewObraSocialSelected.id,
        idPlan : this.NewPlanSelected.id,
        afiliado : this.newAfiliado
      })
      this.toLoadObrasSociales.push(obraSocial)
    }
    this.pacienteService.createPaciente( this.pacienteForm.value ).subscribe( response => {
      console.log(response)
      this.router.navigate(['pacientes'])
    });
    
  }

  getErrorMessage(){
    if(this.pacienteForm.get('mail')?.hasError('required')){
      return 'Este campo es obligatorio'
    }
    return this.pacienteForm.get('mail')?.hasError('email') ? 'El mail que ingresaste no es válido' : ''
  }

  onSelectedObraSocial( plan : any, obraSocial : any, index : number ){
    this.isObraSocialSelected = false;
    this.selectedObrasSociales[index] = {
      obraSocial: obraSocial.id,
      plan: plan.id,
      afiliado: this.paciente.obrasSociales[index].afiliado
    }
    this.editedAfiliados[index] = true;
    console.log(this.editedAfiliados);
    console.log(this.selectedObrasSociales);
    
        
  }

  getSelectedPlan(obra: any): any {
    console.log("sejecuta");
    
    const selectedObraSocial = this.paciente.obrasSociales.find(os => os.nombre === obra.nombre);
    console.log(selectedObraSocial ? selectedObraSocial.plan : null);
    
    return selectedObraSocial ? selectedObraSocial.plan : null;
  }

  onSelectedNewObraSocial( obra : any ){

    this.isNewObraSocialSelected = false

  }

  onSelectedNewPlan( plan : any ){
    this.isNewPlanSelected = false;
  }

  toggleForm(){
    this.showForm = !this.showForm
    this.showButtons = !this.showButtons
  }

}
