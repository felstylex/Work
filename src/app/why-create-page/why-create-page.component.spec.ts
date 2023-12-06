import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCreatePageComponent } from './why-create-page.component';

describe('WhyCreatePageComponent', () => {
  let component: WhyCreatePageComponent;
  let fixture: ComponentFixture<WhyCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyCreatePageComponent]
    });
    fixture = TestBed.createComponent(WhyCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
