import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../pages/auth/services/token/token.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-token': this.tokenService.getToken()
        });

        headers.set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

        const reqClone = request.clone({
            headers
        });

        return next.handle(reqClone);
    }
}

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            headers: req.headers.set('Access-Control-Allow-Origin', '*')

        });
        return next.handle(newReq);
    }
}