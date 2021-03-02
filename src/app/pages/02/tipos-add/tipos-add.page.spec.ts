import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiposAddPage } from './tipos-add.page';

describe('TiposAddPage', () => {
  let component: TiposAddPage;
  let fixture: ComponentFixture<TiposAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiposAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
