import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


import { DescriptionComponent } from './pages/description/description.component';
import { AllTransactionComponent } from './pages/all-transaction/all-transaction.component';
import { ResultComponent } from './components/result/result.component';
import { CreateComponent } from './pages/create/create.component';



@NgModule({
  declarations: [
    DescriptionComponent,
    AllTransactionComponent,
    ResultComponent,
    CreateComponent
  ],
  exports:[
    DescriptionComponent,
    AllTransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TrackingCuentasBancariasModule { }
