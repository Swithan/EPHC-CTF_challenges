import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Challenge2Component } from './challenge_2.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Challenge2Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Challenge2Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('should render title', () => {
    const fixture = TestBed.createComponent(Challenge2Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('elec app is running!');
  });
});
