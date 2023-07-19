import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/models/loginModel';
import { AutenticaService } from 'src/app/services/Autentica.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
constructor(private formBuilder: FormBuilder,
   private router:Router,
    public loginService: LoginService,
    private autenticaService: AutenticaService) {
  
}
ngOnInit(): void {
  this.loginForm = this.formBuilder.group(
    {
      email:['',[Validators.required, Validators.email]],
      senha:['',[Validators.required]]
    });
  
}

submitLogin(){
  var dadosLogin = this.loginForm.getRawValue() as loginModel;

  this.loginService.LoginUsuario(dadosLogin)
  .subscribe(
    token=>{
      
      this.autenticaService.DefineToken(token);
      this.router.navigate(["/noticias"]);
      
    },
    erro=>{

    }
  )

}
}
