import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PessoaAddPage } from './pessoa-add.page';

describe('PessoaAddPage', () => {
  let component: PessoaAddPage;
  let fixture: ComponentFixture<PessoaAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PessoaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
