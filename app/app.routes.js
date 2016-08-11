"use strict";
var router_1 = require('@angular/router');
var index_1 = require("./+heroes/index");
var routes = [
    {
        path: 'heroes',
        component: index_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: index_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: index_1.HeroDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map