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
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as LoadingActions from '../../store/loading/loading.actions';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(LoadingActions.setLoading({payload: true}));

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
        this.store.dispatch(LoadingActions.setLoading({payload: false}));
      })
    );
  }
}
