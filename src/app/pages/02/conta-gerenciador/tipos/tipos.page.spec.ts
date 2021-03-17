import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiposPage } from './tipos.page';

describe('TiposPage', () => {
  let component: TiposPage;
  let fixture: ComponentFixture<TiposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
