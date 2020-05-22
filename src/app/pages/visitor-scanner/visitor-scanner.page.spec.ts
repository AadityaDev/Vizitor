import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitorScannerPage } from './visitor-scanner.page';

describe('VisitorScannerPage', () => {
  let component: VisitorScannerPage;
  let fixture: ComponentFixture<VisitorScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorScannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
