import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatListModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule, MatListModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}