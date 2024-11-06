import { Component } from '@angular/core';
import { TicketComponent } from "../tickets/ticket/ticket.component";
import { NewTicketComponent } from "../tickets/new-ticket/new-ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [TicketComponent, NewTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl:'./support-tickets.component.css'
})
export class SupportTicketsComponent {

}
