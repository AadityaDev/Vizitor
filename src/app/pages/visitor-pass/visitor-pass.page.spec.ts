import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitorPassPage } from './visitor-pass.page';

describe('VisitorPassPage', () => {
  let component: VisitorPassPage;
  let fixture: ComponentFixture<VisitorPassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorPassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
