import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'class', pathMatch: 'full' }, // Rota padrão
    { path: 'class', loadComponent:()  => import('./pages/home/home.component').then(c => c.HomeComponent)},
    { path: 'class/hello', loadComponent: () => import('./hello/hello.component').then(c => c.HelloComponent) },
    // Adicione outras rotas aqui
  ];