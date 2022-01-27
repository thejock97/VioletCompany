import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaUsuarioComponent } from './area-usuario.component';

describe('AreaUsuarioComponent', () => {
  let component: AreaUsuarioComponent;
  let fixture: ComponentFixture<AreaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
