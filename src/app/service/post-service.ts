import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

class QuoteCb {
  // when: string;
  //
  // constructor(when: string) {
  //   this.when = when;
  // }
}

@Injectable()
export class PostService {
  private _reqOptionsArgs= { headers: new HttpHeaders().set( 'Content-Type', 'application/json' ) };
  constructor(private http: HttpClient) {
  }
  getCurrentQuote(): Observable<QuoteCb> {
    return this.http.get('http://localhost:8080/stock/transaction', this._reqOptionsArgs);
  }
}
