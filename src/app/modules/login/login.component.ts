import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRouterService } from 'src/app/shared/app-router.service';
import { setUser } from 'src/app/store/auth/auth.actions';
import * as fromApp from 'src/app/store/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userId: string = '';

  deviceType$: Observable<{deviceType: string}>;

  constructor(private store: Store<fromApp.AppState>, private routerService: AppRouterService) {
    this.deviceType$ = this.store.select('deviceType');
  }

  ngOnInit(): void {
  }

  setUserId(): void {
    this.store.dispatch(setUser({userId: this.userId}));
    this.routerService.goToPage('todos');
  }

}
