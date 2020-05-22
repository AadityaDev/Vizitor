import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitorMobileVerifyPage } from './visitor-mobile-verify.page';

describe('VisitorMobileVerifyPage', () => {
  let component: VisitorMobileVerifyPage;
  let fixture: ComponentFixture<VisitorMobileVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorMobileVerifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorMobileVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
