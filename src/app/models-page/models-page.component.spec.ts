import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsPageComponent } from './models-page.component';

describe('ModelsPageComponent', () => {
  let component: ModelsPageComponent;
  let fixture: ComponentFixture<ModelsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelsPageComponent]
    });
    fixture = TestBed.createComponent(ModelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
