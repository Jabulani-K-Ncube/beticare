import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-beti-email',
  templateUrl: './beti-email.component.html',
  styleUrls: ['./beti-email.component.css']
})
export class BetiEmailComponent implements OnInit {
  state = '';
  error: any;
  email: string;
  password: string;

  constructor(public afa: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.email = formData.value.email;
    this.password = formData.value.password;

    if (formData.valid) {
      console.log(formData.value);
      this.afa.auth.createUserWithEmailAndPassword(this.email , this.password).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      });
    }

  }
}
