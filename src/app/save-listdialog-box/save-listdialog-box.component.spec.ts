import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveListdialogBoxComponent } from './save-listdialog-box.component';

describe('SaveListdialogBoxComponent', () => {
  let component: SaveListdialogBoxComponent;
  let fixture: ComponentFixture<SaveListdialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveListdialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveListdialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
