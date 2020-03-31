import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SparePartsComponent } from './spare-parts.component';

describe('SparePartsComponent', () => {
  let component: SparePartsComponent;
  let fixture: ComponentFixture<SparePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparePartsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SparePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
