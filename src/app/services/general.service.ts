import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  
  url = environment.apiHost;

  reqHeader = new HttpHeaders()
    .set('Content-Type', 'text/plain; charset=utf-8')
    .set('Accept', 'text/plain');
  
  constructor(
    private http: HttpClient,
    private httpWithBackend: HttpClient,
    handler: HttpBackend
  ) {
    this.httpWithBackend = new HttpClient(handler);
  }

  useService(tmp: any) {
    return this.http.post(`${this.url}JBoxService.php`, JSON.stringify(tmp), {
      headers: this.reqHeader,
    });
  }

  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('userfile', image);
    return this.httpWithBackend.post(`${this.url}Imagenes.php`, formData);
  }

}
