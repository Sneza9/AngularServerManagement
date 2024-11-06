import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  // offline za drugi style
  currentStatus = 'online';
  // currentStatus = 'offline';
  // currentStatus = 'unknown';
}
