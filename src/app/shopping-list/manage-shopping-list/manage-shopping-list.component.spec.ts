import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShoppingListComponent } from './manage-shopping-list.component';

describe('ManageShoppingListComponent', () => {
  let component: ManageShoppingListComponent;
  let fixture: ComponentFixture<ManageShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
