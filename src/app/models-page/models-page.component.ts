import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-models-page',
  templateUrl: './models-page.component.html',
  styleUrls: ['./models-page.component.less']
})
export class ModelsPageComponent {

  list: any[] = [];
  pag: number = 1;
  contador: number = 12;

  constructor(private router: Router) {
    this.list = Array.from({ length: 24 }, (_, index) => ({
      id: index + 1,
      p: `../../assets/images/${index * 10 + 10}.jpg`,
      s: `../../assets/images/${index * 10 + 11}.jpg`,
    }));
     
  }

  navegarParaDetalhes(id: number): void {
    this.router.navigate(['/modelo', id]);
  }

}
