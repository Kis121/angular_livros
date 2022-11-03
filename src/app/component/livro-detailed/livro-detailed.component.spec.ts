import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDetailedComponent } from './livro-detailed.component';

describe('LivroDetailedComponent', () => {
  let component: LivroDetailedComponent;
  let fixture: ComponentFixture<LivroDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
