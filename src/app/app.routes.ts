import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  },
  {
    path: 'upload',
    loadComponent: () =>
      import('./features/upload/pages/upload-page/upload-page.component')
        .then(c => c.UploadPageComponent)
  }
];
