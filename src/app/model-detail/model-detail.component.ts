import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.less']
})
export class ModelDetailComponent {

  id: number;
  list: any;

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get("id")) - 1;

    this.list = {
      i1: `../../assets/images/${this.id * 10 + 12}.jpg`,
      i2: `../../assets/images/${this.id * 10 + 13}.jpg`,
      i3: `../../assets/images/${this.id * 10 + 14}.jpg`
    };
  }

}
