import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../shared/auth/user.service';


@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManifestComponent implements OnInit {

  constructor(public user: UserService,
  ) { }

  ngOnInit() {
    this.user.onManifest = true;
  }

}
