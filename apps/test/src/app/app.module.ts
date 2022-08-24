import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from '@test/lib1';
import { Lib2Module } from '@test/lib2';
import { Lib3Module } from '@test/lib3';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, Lib1Module, Lib2Module, Lib3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
