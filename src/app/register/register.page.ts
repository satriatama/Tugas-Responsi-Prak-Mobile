import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: any;
  password: any;
  nama: any;
  constructor(private api: AuthenticationService, private router: Router) {}

  ngOnInit() {}
  prosesRegist(): void {
    if (this.username != null && this.password != null) {
      const data = {
        username: this.username,
        password: this.password,
        nama: this.nama,
      };
      this.api.postMethod(data, 'tambah.php').subscribe({
        next: (hasil) => {
          if (hasil.status_register == 'berhasil') {
            this.api.message('Register Berhasil');
            this.router.navigateByUrl('/login');
          } else {
            this.api.message('Register Gagal');
          }
        },
      });
    }
  }
}
