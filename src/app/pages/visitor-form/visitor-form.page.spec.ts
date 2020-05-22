import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitorFormPage } from './visitor-form.page';

describe('VisitorFormPage', () => {
  let component: VisitorFormPage;
  let fixture: ComponentFixture<VisitorFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
