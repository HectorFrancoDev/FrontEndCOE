import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './interceptors.ts/header-interceptors';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CoreComponent],
  providers:[    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor,  multi: true }]
})
export class CoreModule { }
