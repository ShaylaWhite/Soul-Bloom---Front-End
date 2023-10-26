import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Make sure to import the correct guard

describe('AuthGuard', () => {
  let guard: CanActivate;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard] // Provide your AuthGuard here
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
