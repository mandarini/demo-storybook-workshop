import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaterinaComponent } from './katerina.component';

describe('KaterinaComponent', () => {
  let component: KaterinaComponent;
  let fixture: ComponentFixture<KaterinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaterinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaterinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
