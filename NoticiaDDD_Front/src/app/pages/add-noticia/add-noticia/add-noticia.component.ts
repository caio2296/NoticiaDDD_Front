import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiaViewModel } from 'src/app/models/noticiaViewModel/NoticiaViewModel';
import { NoticiaService } from 'src/app/services/noticia.service';


@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.component.html',
  styleUrls: ['./add-noticia.component.scss']
})
export class AddNoticiaComponent implements OnInit {

  addNoticiaForm!: FormGroup;

  constructor(private formBuild: FormBuilder, private noticiaService:NoticiaService,
    private router:Router) {
    
  }

  ngOnInit(): void {
    this.addNoticiaForm= this.formBuild.group(
     {
      titulo:['',[Validators.required]],
      informacao:['',Validators.required]
     }
    );
  }

  submitAddNoticia(){
    const dadosNovaNoticia = this.addNoticiaForm.getRawValue() as NoticiaViewModel;

    var noticia = new NoticiaViewModel();
    noticia.titulo = dadosNovaNoticia.titulo;
    noticia.informacao = dadosNovaNoticia.informacao;

    this.noticiaService.AdicionaNoticia(noticia)
    .subscribe(erro=>{
      this.router.navigate(["/noticia"]);
    },
    erro=>{
      alert("Erro!")
    });
  }

}
