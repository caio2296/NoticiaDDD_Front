import{Injectable} from"@angular/core";

@Injectable(
    {providedIn:'root'}
)
export class AutenticaService{
 private Autenticado: boolean = true;
 
 public DefineToken(token: string){
    sessionStorage.setItem('token',token);
 }
 public ObterToken(){
    return sessionStorage.getItem('token');
 }
 public LimparToken(){
    sessionStorage.removeItem('token');
 }

}