import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateDevicetype } from './store/deviceType/deviceType.actions';
import * as fromApp from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading!: boolean;

  constructor(private store: Store<fromApp.AppState>) {
    this.store.select('loading').subscribe(data => {
      this.isLoading = data.isLoading;
    });
  }

  ngOnInit() {
    this.onResize();
  }

  // ESCUTA POR EVENTOS DE REDIMENSIONAMENTO DA TELA E ATRIBIU O TIPO DE DISPOSITIVO USADO POR RESOLUÇÃO
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (top!.innerWidth >= 768 && top!.innerWidth < 1080) {
      this.store.dispatch(updateDevicetype({payload: 'tablet'}));
    } else {
      if (top!.innerWidth < 768) {
        this.store.dispatch(updateDevicetype({payload: 'mobile'}));
      } else {
        this.store.dispatch(updateDevicetype({payload: 'desktop'}));
      }
    }
  }
}
