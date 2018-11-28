import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAccountComponent } from './modif-account.component';

describe('ModifAccountComponent', () => {
  let component: ModifAccountComponent;
  let fixture: ComponentFixture<ModifAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
