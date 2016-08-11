import {provideRouter, RouterConfig} from '@angular/router';

import {
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent
} from "./+heroes/index";

const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent
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
]

export const appRouterProviders = [
    provideRouter(routes)
];