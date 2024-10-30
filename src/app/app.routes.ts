import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./sesion/sesion.module').then(m => m.SesionModule) },
    { path: '', loadChildren: () => import('./det-regimen/det-regimen.module').then(m => m.DetRegimenModule) },
    { path: 'sueldos-y-salarios', loadChildren: () => import('./sueldos/sueldos.module').then(m => m.SueldosModule) },
    { path: '', loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule) },
];
