import { provideRouter, RouterConfig } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent} from './heroes.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes : RouterConfig = [
    {
        path : 'heroes',
        component : HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }

];

export const appRouteProviders = [
    provideRouter(routes)
];