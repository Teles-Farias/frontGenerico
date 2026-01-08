import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'upload',
    loadComponent: () =>
      import('./features/upload/pages/upload-page/upload-page.component')
        .then(c => c.UploadPageComponent)
  },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
