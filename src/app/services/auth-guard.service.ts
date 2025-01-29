import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.authService.authStatus.pipe(
      map(status => {
        if (!status) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
