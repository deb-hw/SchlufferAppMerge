import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSigninFooterComponent } from './login-signin-footer.component';

describe('LoginSigninFooterComponent', () => {
  let component: LoginSigninFooterComponent;
  let fixture: ComponentFixture<LoginSigninFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSigninFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSigninFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
