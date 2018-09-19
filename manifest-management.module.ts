import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManifestRouting } from './manifest.routing';
import { ManifestComponent } from './manifest/manifest.component';

@NgModule({
  imports: [
    CommonModule,
    ManifestRouting
  ],
  declarations: [ManifestComponent]
})
export class ManifestManagementModule { }
