import { RestService } from '../core/services/feathers.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    public _formBuilder: FormBuilder, 
    private _restService: RestService,
    private _router: Router,
  ) { 
    // Build the form group
    this.form = this._formBuilder.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }
  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.form.value['username'],
      password: this.form.value['password']
    }

    this._restService.authenticate(user.username, user.password).then(data => {
      if(data) {
        this._router.navigate(['chat']);
      } else {
        console.log(data);
      }
    }).catch(err => console.log(err));
  }
}


