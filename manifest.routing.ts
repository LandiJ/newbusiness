import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManifestComponent } from './manifest/manifest.component';

const routes: Routes = [
  {
    path: 'driver',
    component: ManifestComponent
  }
]

export const ManifestRouting: ModuleWithProviders = RouterModule.forChild(routes)