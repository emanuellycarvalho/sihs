import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GerenciadorContasPage } from './gerenciador-contas.page';

describe('GerenciadorContasPage', () => {
  let component: GerenciadorContasPage;
  let fixture: ComponentFixture<GerenciadorContasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorContasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GerenciadorContasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
