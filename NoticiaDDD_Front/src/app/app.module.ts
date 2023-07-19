import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AddNoticiaComponent } from './pages/add-noticia/add-noticia/add-noticia.component';
import { NoticiasComponent } from './pages/noticias/noticias/noticias.component';
import{FormsModule,ReactiveFormsModule} from'@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Interceptor } from './interceptor/interceptor';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario/registro-usuario.component';


const serviceAutentica = [Interceptor];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddNoticiaComponent,
    NoticiasComponent,
    NavbarComponent,
    RegistroUsuarioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
     serviceAutentica,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
