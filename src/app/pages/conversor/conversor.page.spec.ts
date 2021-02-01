import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConversorPage } from './conversor.page';

describe('ConversorPage', () => {
  let component: ConversorPage;
  let fixture: ComponentFixture<ConversorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConversorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
