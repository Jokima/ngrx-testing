import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule,
    // MATERIAL
    MatIconModule,
  ],
  providers: [
  ]
})
export class TodosModule { }
