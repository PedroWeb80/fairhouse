import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {   
        path:'',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title:'Details page',
    },
    {
        path: '**',
        component: NotfoundComponent

    }
    
];
