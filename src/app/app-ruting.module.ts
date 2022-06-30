import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllTransactionComponent } from "./tracking-cuentas-bancarias/pages/all-transaction/all-transaction.component";
import { CreateComponent } from "./tracking-cuentas-bancarias/pages/create/create.component";
import { DescriptionComponent } from "./tracking-cuentas-bancarias/pages/description/description.component";



const routes: Routes = [
  {
    path: '',
    component: AllTransactionComponent,
    pathMatch: 'full'
  },
  {
    path: 'transaction/:id',
    component: DescriptionComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
