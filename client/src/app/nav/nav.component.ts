import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {}

  constructor (public accountService: AccountService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {

  }


  login() { //kad radis sa http requestovima zapravo i ne moras da se unsubscribe, jer se request zavrsava i sub se zavrsava
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'), // _ isto sto i () i kaze da ne koristimo argument za ovu metodu koju pozivamo next
      error: error => this.toastr.error(error.error)
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
