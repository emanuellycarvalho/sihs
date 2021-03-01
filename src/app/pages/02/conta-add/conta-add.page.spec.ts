import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContaAddPage } from './conta-add.page';

describe('ContaAddPage', () => {
  let component: ContaAddPage;
  let fixture: ComponentFixture<ContaAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
