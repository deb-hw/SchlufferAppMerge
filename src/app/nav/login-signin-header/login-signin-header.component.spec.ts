import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSigninHeaderComponent } from './login-signin-header.component';

describe('LoginSigninHeaderComponent', () => {
  let component: LoginSigninHeaderComponent;
  let fixture: ComponentFixture<LoginSigninHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSigninHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSigninHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
