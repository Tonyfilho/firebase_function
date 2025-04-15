import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'class', pathMatch: 'full' }, // Rota padrão
    { path: 'class', loadComponent:()  => import('./pages/home/home.component').then(c => c.HomeComponent)},
    { path: 'class/hello', loadComponent: () => import('./class/hello/hello.component').then(c => c.HelloComponent) },
    { path: 'class/project', loadComponent: () => import('./class/class-project/class-project.component').then(c => c.ClassProjectComponent) },
    // Adicione outras rotas aqui
  ];