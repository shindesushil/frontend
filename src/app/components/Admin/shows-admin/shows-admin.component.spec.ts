import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsAdminComponent } from './shows-admin.component';

describe('ShowsAdminComponent', () => {
  let component: ShowsAdminComponent;
  let fixture: ComponentFixture<ShowsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
