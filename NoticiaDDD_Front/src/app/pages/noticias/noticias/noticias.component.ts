import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaViewModel } from 'src/app/models/noticiaViewModel/NoticiaViewModel';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
    /**
     *
     */
    constructor(private noticiaService:NoticiaService, private router:Router) {
    }

    noticias!:Array<NoticiaViewModel>;

    ngOnInit(): void {
      this.ListarNoticiasCustomizada();
    }

    ListarNoticiasCustomizada(){
      this.noticiaService.ListarNoticiasCustomizadas()
      .subscribe(noticias=>{
        this.noticias = noticias;
      },
      erro=>{
        this.router.navigate(["/login"]);
      })
    }
}
