import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent {

  constructor() {
    setTheme('bs5'); 
  }

}
