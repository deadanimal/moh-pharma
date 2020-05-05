import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedicineDataComponent } from './medicine-data/medicine-data.component';
import { MedicineManagementComponent } from './medicine-management/medicine-management.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'medicine',
                children: [
                    { 
                        path: 'data',
                        component: MedicineDataComponent
                    },
                    {
                        path: 'user-management',
                        component: MedicineManagementComponent
                    }
                ]
            }
        ]
    }
]