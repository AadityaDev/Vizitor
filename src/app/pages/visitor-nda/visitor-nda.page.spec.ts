import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitorNdaPage } from './visitor-nda.page';

describe('VisitorNdaPage', () => {
  let component: VisitorNdaPage;
  let fixture: ComponentFixture<VisitorNdaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorNdaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorNdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
