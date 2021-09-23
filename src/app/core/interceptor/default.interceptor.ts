import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError, timeout, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { setLoading } from 'src/app/store/app.actions';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private store: Store<{global: AppState}>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(setLoading({payload: true}));

    return next.handle(req).pipe(
      timeout(10000),
      catchError((error: HttpErrorResponse) => {
        console.log('Erro na requisição:', error);
        return throwError(error.message || 'server error.');
      }),
      tap((event) => {
        // TO-DO
      }),
      finalize(() => {
        this.store.dispatch(setLoading({payload: false}));
      })
    );
  }
}
