import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitItemComponent } from './twit-item.component';

describe('TwitItemComponent', () => {
  let component: TwitItemComponent;
  let fixture: ComponentFixture<TwitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
