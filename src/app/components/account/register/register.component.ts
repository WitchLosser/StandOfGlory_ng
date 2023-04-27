import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { IRegisterRequest } from '../account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  register(): void {
    if (!this.registerForm.valid) {
      alert("Invalid value, please enter again!");
      return;
    }

    let request = this.registerForm.value as IRegisterRequest;

    // send POST request
    this.accountService.register(request).subscribe(res => {
      console.log("success registration!");
      this.router.navigateByUrl('movie-list');
    });
  }
}
