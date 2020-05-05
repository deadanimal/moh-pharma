import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  BsDatepickerModule,
  ModalModule,
  AccordionModule,
  TabsModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as mapbox from 'mapbox-gl';
(mapbox as any).accessToken = environment.mapbox.accessToken

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ManagementComponent } from './management/management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MedicineManagementComponent } from './medicine-management/medicine-management.component';
import { MedicineData1Component } from './medicine-data1/medicine-data1.component';
import { MedicineData2Component } from './medicine-data2/medicine-data2.component';
import { MedicineData3Component } from './medicine-data3/medicine-data3.component';
import { MedicinePublicPriceComponent } from './medicine-public-price/medicine-public-price.component';
import { MedicinePricingComponent } from './medicine-pricing/medicine-pricing.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    AnalyticsComponent,
    ReportComponent,
    ProfileComponent,
    SettingsComponent,
    MedicineManagementComponent,
    MedicineData1Component,
    MedicineData2Component,
    MedicineData3Component,
    MedicinePublicPriceComponent,
    MedicinePricingComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    HttpClientModule,
    LeafletModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot()
  ]
})
export class AdminModule { }
