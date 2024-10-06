import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./sesion/sesion.module').then(m => m.SesionModule) },
    { path: '', loadChildren: () => import('./det-regimen/det-regimen.module').then(m => m.DetRegimenModule) },
];
