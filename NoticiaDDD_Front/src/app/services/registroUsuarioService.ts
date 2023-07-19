import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment.prod";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:"root"
})
export class RegistroUsuarioService{
    private readonly baseUrl= environment["endPoint"];
    /**
     *
     */
    constructor(private httpClient: HttpClient) {
    }

    RegistrarUsuario(object:any){
        return this.httpClient.post<any>
        (`${this.baseUrl}AdicionaUsuarioIdentity/`,object);
    }
}