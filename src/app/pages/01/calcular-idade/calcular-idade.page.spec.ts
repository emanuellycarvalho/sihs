import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcularIdadePage } from './calcular-idade.page';

describe('CalcularIdadePage', () => {
  let component: CalcularIdadePage;
  let fixture: ComponentFixture<CalcularIdadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularIdadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularIdadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
