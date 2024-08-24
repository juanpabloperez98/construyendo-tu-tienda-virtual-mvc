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
    path: '',
    children: [
      {
        path: 'configuracion-ide',
        loadChildren: () =>
          import('../modules/module2/module2.module').then(
            (m) => m.Module2Module
          ),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'databases',
        loadChildren: () =>
          import('../modules/module3/module3.module').then(
            (m) => m.Module3Module
          ),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'creando-modelo-mvc',
        loadChildren: () =>
          import('../modules/module4/module4.module').then(
            (m) => m.Module4Module
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home/main',
  },
]
