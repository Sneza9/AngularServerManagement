import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

// Dodajemo FormsModule za submit form
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?:ElementRef<HTMLFormElement>;

  onSubmit(titleInput: string, textInput: string) {
    // Ovako dobijemo ceo objekat
    // console.log(titleInput);
    // Drugaciji nacin logovanja, sa dodatnim objasnjenjima
    // console.dir(titleInput); 

    // Dodajemo novi property kojem dodajemo dekorator kako bi selektovao element
    // Pomaze nam da nadjemo child u tom html-u 
    // u '' prosledjujemo naziv iz html-a sa # a to je kod nas form 
    // ElementRef - genericki tip, ono sto nadje u form wrapuje ga u ElementRef 
    // Ovom elementu ne mozemo pristupiti u constructor-u jer 
    

    console.log(titleInput, textInput);
    this.form?.nativeElement.reset();

    // const enteredTitle = titleInput.value;
    // console.log(enteredTitle);
  }
}
