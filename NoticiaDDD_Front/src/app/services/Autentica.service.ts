import{Injectable} from"@angular/core";

@Injectable(
    {providedIn:'root'}
)
export class AutenticaService{
 private Autenticado: boolean = true;
 private token!:string;
 
 public DefineToken(token: string){
   const tokenString = JSON.stringify(token);
   sessionStorage.setItem('token', tokenString); 
   //sessionStorage.setItem('token',token);
 }
 public ObterToken(){
   const tokenString = sessionStorage.getItem('token');
   return tokenString ? JSON.parse(tokenString) : null; 
   //return sessionStorage.getItem('token');
 }
 public LimparToken(){
    sessionStorage.removeItem('token');
 }

}