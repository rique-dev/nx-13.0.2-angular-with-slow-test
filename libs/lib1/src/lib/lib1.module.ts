import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1Component } from './lib1.component';

@NgModule({
  imports: [CommonModule],
  exports: [Lib1Component],
  declarations: [Lib1Component],
})
export class Lib1Module {}
