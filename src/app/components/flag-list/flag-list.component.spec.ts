import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlagListComponent } from './flag-list.component';

describe('FlagListComponent', () => {
  let component: FlagListComponent;
  let fixture: ComponentFixture<FlagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
