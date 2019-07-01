import { Component } from '@angular/core';

import { MetaService } from './shared/services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Server Side Rendering';

  constructor(
    private meta: MetaService
  ) {
    this.meta.updateTitle();
  }

  

}
