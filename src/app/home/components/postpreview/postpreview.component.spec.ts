import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpreviewComponent } from './postpreview.component';

describe('PostpreviewComponent', () => {
  let component: PostpreviewComponent;
  let fixture: ComponentFixture<PostpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostpreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
