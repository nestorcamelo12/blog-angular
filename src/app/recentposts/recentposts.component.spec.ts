import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentpostsComponent } from './recentposts.component';

describe('RecentpostsComponent', () => {
  let component: RecentpostsComponent;
  let fixture: ComponentFixture<RecentpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentpostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
