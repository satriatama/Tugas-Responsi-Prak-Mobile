import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-mahasiswa',
  templateUrl: './update-mahasiswa.page.html',
  styleUrls: ['./update-mahasiswa.page.scss'],
})
export class UpdateMahasiswaPage implements OnInit {
  nama: any;
  NIM: any;
  alamat: any;
  id: any;
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //get id from home page
  ionViewWillEnter() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}
  prosesUpdate(): void {
    console.log(this.id);
    if (this.nama != null && this.NIM != null && this.alamat != null) {
      const data = {
        nama: this.nama,
        NIM: this.NIM,
        alamat: this.alamat,
        id: this.id,
      };
      this.api.postMethod(data, '/ubahMahasiswa.php').subscribe({
        next: (hasil) => {
          if (hasil.status_ubah == 'berhasil') {
            this.api.message('Register Berhasil');
            this.router.navigateByUrl('/home');
          } else {
            this.api.message('Register Gagal');
          }
        },
      });
    }
  }
}
