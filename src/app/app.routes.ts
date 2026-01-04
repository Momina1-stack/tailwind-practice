import { Routes } from '@angular/router';

export const routes: Routes = [

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
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
