import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppRouterService } from 'src/app/shared/app-router.service';
import { getTodos } from 'src/app/store/app.actions';
import { AppState, Todo } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  deviceType!: string;
  userId!: string;
  todos!: Array<Todo>;

  constructor(private store: Store<{global: AppState}>, private routerService: AppRouterService) {
    this.store.select('global').subscribe(data => {
      this.deviceType = data.deviceType;
      this.userId = data.userId;
      this.todos = data.todos;
    });

    if (this.userId != '') {
      this.store.dispatch(getTodos({userId: this.userId}));
    } else {
      this.routerService.goToPage('');
    }
  }

  ngOnInit(): void {
  }

}
