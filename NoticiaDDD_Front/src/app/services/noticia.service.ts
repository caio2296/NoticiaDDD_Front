import{Injectable} from "@angular/core";
import { environment } from "src/environment/environment.prod";
import { HttpClient } from "@angular/common/http";
import { NoticiaViewModel } from "../models/noticiaViewModel/NoticiaViewModel";
@Injectable({
    providedIn:"root"
})
export class NoticiaService{
    private readonly baseUrl= environment["endPoint"];

    constructor(private httpCliente:HttpClient) {
    
    }
    ListarNoticias(){
        return this.httpCliente.post<any>(
            `${this.baseUrl}ListarNoticias`,
            null
        );
    }


    ListarNoticiasCustomizadas(){
        return this.httpCliente.post<any>(
            `${this.baseUrl}ListarNoticiasCustomizadas/`,
            null
        );
    }

    AdicionaNoticia(noticia:NoticiaViewModel){
        return this.httpCliente.post<any>(
            `${this.baseUrl}AdicionarNoticia/`,
            noticia
        );
    }

}