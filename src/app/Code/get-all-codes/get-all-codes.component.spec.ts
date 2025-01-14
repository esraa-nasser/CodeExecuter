import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCodesComponent } from './get-all-codes.component';

describe('GetAllCodesComponent', () => {
  let component: GetAllCodesComponent;
  let fixture: ComponentFixture<GetAllCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllCodesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
