import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByCatagoryComponent } from './view-product-by-catagory.component';

describe('ViewProductByCatagoryComponent', () => {
  let component: ViewProductByCatagoryComponent;
  let fixture: ComponentFixture<ViewProductByCatagoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductByCatagoryComponent]
    });
    fixture = TestBed.createComponent(ViewProductByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
