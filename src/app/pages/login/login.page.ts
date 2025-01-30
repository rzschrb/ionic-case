import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  loginForm: FormGroup;
  showEmailErrors = false;
  showPasswordErrors = false;
  isAlertOpen = false;
  alertButtons = ['OK'];
  isSubmitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getEmailErrorMessage(): string {
    const control = this.loginForm.get('email');
    if (control?.errors) {
      if (control.errors['required']) {
        return 'Email é um campo obrigatorio.';
      }
      if (control.errors['email']) {
        return 'O email é inválido.';
      }
    }
    return '';
  }

  getPasswordErrorMessage(): string {
    const control = this.loginForm.get('password');
    if (control?.errors) {
      if (control.errors['required']) {
        return 'Senha é obrigatoria.';
      }
      if (control.errors['minlength']) {
        return 'A senha deve ter pelo menos 6 caracteres.';
      }
    }
    return '';
  }

  onFieldBlur(event: any) {
    const formControl = event.target.name;
    if (formControl === 'email') {
      this.showEmailErrors = true;
    } else if (formControl === 'password') {
      this.showPasswordErrors = true;
    }
  }

  setIsAlertOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  login() {
    this.isSubmitted = true;

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password);
    } else {
      this.setIsAlertOpen(true);
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control?.errors) {
          control.markAsTouched();
        }
      });
    }
  }
}