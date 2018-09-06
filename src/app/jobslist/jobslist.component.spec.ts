import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JobsListComponent } from "./jobslist.component";

describe("JobslistComponent", () => {
  let component: JobsListComponent;
  let fixture: ComponentFixture<JobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
