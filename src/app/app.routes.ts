import { Routes } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { Login } from './login/login';

export const routes: Routes = [
{path:"" , component : Dashboard},
// {path:"login/" , component :Login} static route
// {path:"login/:id" , component :Login} dynamic route
     {
        path: "",
        loadComponent: () =>
          import("../dashboard/dashboard").then((m) => m.Dashboard),
      },
  {
        path: "login",
        loadComponent: () =>
          import("../app/login/login").then((m) => m.Login),
      },
   {
        path: "sports",
        loadComponent: () =>
          import("../app/sports/sports").then((m) => m.Sports),
      },
];
