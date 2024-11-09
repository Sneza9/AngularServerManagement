import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  // Kako bi moglo da bude samo jedna od te tri vrednosti
  currentStatus: 'online' | 'offline' | 'unknown'='unknown';

  // offline za drugi style
  // currentStatus = 'online';
  // currentStatus = 'offline';
  // currentStatus = 'unknown';

  // Menjanje currentStatus-a na svakih 5 sec
  // setInterval ce se izvrsiti na svakih 5 sec
  constructor() {
    // od 0 do 0.99999999, ne ide do 1
    setInterval(() => {
      const rnd = Math.random();
      console.log(rnd);
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
