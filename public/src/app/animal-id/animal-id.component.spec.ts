import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalIDComponent } from './animal-id.component';

describe('AnimalIDComponent', () => {
  let component: AnimalIDComponent;
  let fixture: ComponentFixture<AnimalIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
