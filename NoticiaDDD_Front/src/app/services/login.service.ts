import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment.prod";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:"root"
})
export class LoginService{
    private readonly baseUrl = environment["endPoint"];

    constructor(private httpClient: HttpClient) {
        

    }

    LoginUsuario(object: any){
       return this.httpClient.post<any>
        (`${this.baseUrl}CriarTokenIdentity/`,object)
    }
}