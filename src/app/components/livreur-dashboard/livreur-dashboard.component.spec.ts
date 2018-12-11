import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurDashboardComponent } from './livreur-dashboard.component';

describe('LivreurDashboardComponent', () => {
  let component: LivreurDashboardComponent;
  let fixture: ComponentFixture<LivreurDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreurDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
