import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificarNumeroPage } from './verificar-numero.page';

describe('VerificarNumeroPage', () => {
  let component: VerificarNumeroPage;
  let fixture: ComponentFixture<VerificarNumeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarNumeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificarNumeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
