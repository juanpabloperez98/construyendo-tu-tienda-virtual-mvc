import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home/main',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'introduccion_patron_diseno_mvc',
        loadChildren: () =>
          import('../modules/module1/module1.module').then(
            (m) => m.Module1Module
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home/main',
  },
]
