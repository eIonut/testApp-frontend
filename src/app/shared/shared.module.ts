import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [InputComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [InputComponent],
})
export class SharedModule {}
