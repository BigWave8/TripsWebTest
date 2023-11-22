import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(path: string, params?: {}): Observable<any> {
    return this.http.get(path, params).pipe(catchError((err) => err.error))
  }
}
