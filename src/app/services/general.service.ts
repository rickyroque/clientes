import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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
  ) {
  }

  useService(tmp: any) {
    return this.http.post(`${this.url}JBoxService.php`, JSON.stringify(tmp), {
      headers: this.reqHeader,
    });
  }

}
