import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routing';
import { CoreModule } from '../../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    CoreModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule { }
