import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { environment } from "src/env/environment";

@Injectable({
    providedIn: 'root'
  })
export class BaseServices{

    indicationSubject = new BehaviorSubject(null)
    constructor(private http: HttpClient) {

    }

    get(controllerAndMeyhod: any) {
        return this.http.get<any>(`${environment.appRoot}${controllerAndMeyhod}`);
    }

    post(url: any, body: any) {
        return this.http.post<any>(`${environment.appRoot}${url}`, body);
    }
    //   Put
    put(url: any, body: any) {
        return this.http.put<any>(`${environment.appRoot}${url}`, body);
    }

    delete(url: any) {
        return this.http.delete<any>(`${environment.appRoot}${url}`);
    }

    export(Controller: any){
        return window.open(this.linkCreator(`${environment.appRoot}${Controller}/Export`));
      }

      exportPost(Controller: any,dto: any){
        return this.http.post(`${environment.appRoot}${Controller}/Export` , dto);
      }

      exportUser(Controller: any,userTypeId: any){
        return window.open(this.linkCreator(`${environment.appRoot}${Controller}/Export/${userTypeId}`));
      }

    linkCreator(link: string, ...param: any) {
        let res: string = link;

        for (let index = 0; index < param.length; index++) {
          const element = param[index];
          res += element + '/';
        }

        return res;
      }

      public base64ToBlob(b64Data: any, sliceSize=512) {
        let byteCharacters = atob(b64Data); //data.file there
        let byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);

            let byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            let byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        }

 baseApiUrl='Upload/UploadFileItem'
  upload(req):Observable<any> {

    return this.http
      .request<any[]>(req)
      .pipe(
        finalize(() => {
        })
      );
    //return this.http.post(`${environment.appRoot}${this.baseApiUrl}`, file);
}


}
