import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/models/loginModel';
import { AutenticaService } from 'src/app/services/Autentica.service';
import { RegistroUsuarioService } from 'src/app/services/registroUsuarioService';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  registroForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    public registroService:RegistroUsuarioService,
    private autenticaService: AutenticaService) {
  }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        senha:['',[Validators.required]],
        celular:['',[Validators.required]]
      });
  }

  submitRegistro(){
    var dadosRegistro = this.registroForm.getRawValue() as loginModel;

    this.registroService.RegistrarUsuario(dadosRegistro)
    .subscribe(sucesso=>{
      alert(sucesso);
      
      this.router.navigate(["/login"]);
    },
    erro =>{

    });
  }

}
