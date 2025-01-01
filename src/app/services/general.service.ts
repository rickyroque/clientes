import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  
  private apiUrl = 'https://www.leadschat.app/customers/api/chatgpt/'; 

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const payload = { message }; 
    return this.http.post(this.apiUrl, payload);
  }

}
