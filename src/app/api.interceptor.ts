import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    const req = request.clone({ headers: new HttpHeaders().append('X-access-token', 'sadasd') });
    console.log(req);
    // if(request.method = 'GET') {

    // }
    return next.handle(request);
  }
}
