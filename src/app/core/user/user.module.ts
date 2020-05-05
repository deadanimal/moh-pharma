import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  ModalModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedicineDataComponent } from './medicine-data/medicine-data.component';
import { MedicineManagementComponent } from './medicine-management/medicine-management.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MedicineDataComponent,
    MedicineManagementComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(UserRoutes),
    ModalModule.forRoot()
  ]
})
export class UserModule { }
