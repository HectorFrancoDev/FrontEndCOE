import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RetoOtpComponent } from './reto-otp/reto-otp.component';
import { RetoExternoComponent } from './reto-externo/reto-externo.component';
import { FraseRandomComponent } from './frase-random/frase-random.component';

const routes: Routes = [
  {
    path: "otp",
    component: RetoOtpComponent
  },
  {
    path: "externo",
    component: RetoExternoComponent
  },
  {
    path: "frase",
    component: FraseRandomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationRoutingModule { }