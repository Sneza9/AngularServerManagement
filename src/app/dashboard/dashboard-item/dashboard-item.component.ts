import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl:'./dashboard-item.component.css', 
  // host:{
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
  // Ocekujemo objekat, definisemo oblik objekta koji ocekujemo 
  // @Input({required:true}) image!:{src: string; alt:string};
  // @Input({required:true}) title!: string; 

  // Mozemo napisati i ovako, isto je 
  // Dodajemo generic type 
  image = input.required<{src:string; alt:string}>();
  title=input.required<string>();
}
