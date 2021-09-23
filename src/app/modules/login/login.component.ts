import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRouterService } from 'src/app/shared/app-router.service';
import { setUser } from 'src/app/store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userId: string = '';

  deviceType$: Observable<{deviceType: string}>;

  constructor(private store: Store<{global: {deviceType: string}}>, private routerService: AppRouterService) {
    this.deviceType$ = this.store.select('global');
  }

  ngOnInit(): void {
  }

  setUserId(): void {
    this.store.dispatch(setUser({userId: this.userId}));
    this.routerService.goToPage('todos');
  }

}
