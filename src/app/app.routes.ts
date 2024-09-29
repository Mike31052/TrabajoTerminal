import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./sesion/sesion.module').then(m => m.SesionModule) },
];
