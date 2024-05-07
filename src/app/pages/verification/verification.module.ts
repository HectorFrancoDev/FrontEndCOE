import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetoOtpComponent } from './reto-otp/reto-otp.component';
import { FraseRandomComponent } from './frase-random/frase-random.component';
import { RetoExternoComponent } from './reto-externo/reto-externo.component';
import { VerificationRoutingModule } from './verification.routing';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    VerificationRoutingModule,
    FormsModule,
    CoreModule
  ],
  declarations: [RetoOtpComponent, FraseRandomComponent, RetoExternoComponent],
  exports: [RetoOtpComponent, FraseRandomComponent, RetoExternoComponent]

})
export class VerificationModule { }
