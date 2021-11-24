import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppRouterService } from 'src/app/shared/app-router.service';
import { getTodos } from 'src/app/store/todo/todo.actions';
import { Todo } from 'src/app/store/todo/todo.reducer';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  deviceType!: string;
  userId!: string;
  todos!: Array<Todo>;

  constructor(private store: Store<fromApp.AppState>, private routerService: AppRouterService) {
    this.store.select('todo').subscribe(data => {
      this.todos = data.todos;
    });

    this.store.select('auth').subscribe(data => {
      this.userId = data.userId;
    });

    this.store.select('deviceType').subscribe(data => {
      this.deviceType = data.deviceType;
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
