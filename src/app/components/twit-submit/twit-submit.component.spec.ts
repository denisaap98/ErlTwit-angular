import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitSubmitComponent } from './twit-submit.component';

describe('TwitSubmitComponent', () => {
  let component: TwitSubmitComponent;
  let fixture: ComponentFixture<TwitSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
