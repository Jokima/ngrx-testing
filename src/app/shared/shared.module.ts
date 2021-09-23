import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MATERIAL
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CustomButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //MATERIAL
    MatIconModule,
  ],
  exports: [
    CustomButtonComponent,
  ],
  providers: [
  ],
})
export class SharedModule {}
