import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'process-group', loadChildren: './config/process-group/process-group.module#ProcessGroupPageModule' },
  { path: 'process-group-input', loadChildren: './config/process-group-input/process-group-input.module#ProcessGroupInputPageModule' },
  { path: 'process', loadChildren: './config/process/process.module#ProcessPageModule' },
  { path: 'process-input', loadChildren: './config/process-input/process-input.module#ProcessInputPageModule' },
  { path: 'procedure', loadChildren: './config/procedure/procedure.module#ProcedurePageModule' },
  { path: 'procedure-input', loadChildren: './config/procedure-input/procedure-input.module#ProcedureInputPageModule' },
  { path: 'case', loadChildren: './config/case/case.module#CasePageModule' },
  { path: 'case-input', loadChildren: './config/case-input/case-input.module#CaseInputPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'state', loadChildren: './config/state/state.module#StatePageModule' },
  { path: 'state-input', loadChildren: './config/state-input/state-input.module#StateInputPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
