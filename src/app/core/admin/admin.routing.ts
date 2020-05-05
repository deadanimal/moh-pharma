import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { MedicineManagementComponent } from './medicine-management/medicine-management.component';
import { MedicineData1Component } from './medicine-data1/medicine-data1.component';
import { MedicineData2Component } from './medicine-data2/medicine-data2.component';
import { MedicineData3Component } from './medicine-data3/medicine-data3.component';
import { MedicinePublicPriceComponent } from './medicine-public-price/medicine-public-price.component';
import { MedicinePricingComponent } from './medicine-pricing/medicine-pricing.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'medicine',
                children: [
                    {
                        path: 'management',
                        component: MedicineManagementComponent
                    },
                    {
                        path: 'data1',
                        component: MedicineData1Component
                    },
                    {
                        path: 'data2',
                        component: MedicineData2Component
                    },
                    {
                        path: 'data3',
                        component: MedicineData3Component
                    },
                    {
                        path: 'public-price',
                        component: MedicinePublicPriceComponent
                    },
                    {
                        path: 'certification',
                        component: MedicinePricingComponent
                    }
                ]
            }
        ]
    }
]