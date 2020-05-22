import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitorActivityPage } from './visitor-activity.page';

describe('VisitorActivityPage', () => {
  let component: VisitorActivityPage;
  let fixture: ComponentFixture<VisitorActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
