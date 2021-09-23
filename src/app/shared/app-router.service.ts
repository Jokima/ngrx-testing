import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  constructor(private router: Router) { }

  goToPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
