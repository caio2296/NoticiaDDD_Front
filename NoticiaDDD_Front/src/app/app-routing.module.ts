import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNoticiaComponent} from'./pages/add-noticia/add-noticia/add-noticia.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticiasComponent } from './pages/noticias/noticias/noticias.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario/registro-usuario.component';

const routes: Routes = [{
  path: "",
  pathMatch:"full",
  redirectTo:"login"

},
{
path:"login", component:LoginComponent
},
{
  path:"addnoticia", component:AddNoticiaComponent
},
{
  path:"noticias",component:NoticiasComponent
},{
  path:"registro", component:RegistroUsuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
