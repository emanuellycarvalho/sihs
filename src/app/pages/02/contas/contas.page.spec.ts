import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContasPage } from './contas.page';

describe('ContasPage', () => {
  let component: ContasPage;
  let fixture: ComponentFixture<ContasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
