import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallComponentComponent } from './getall-component.component';

describe('GetallComponentComponent', () => {
  let component: GetallComponentComponent;
  let fixture: ComponentFixture<GetallComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
