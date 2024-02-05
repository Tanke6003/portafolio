import { Component } from '@angular/core';
import { SectionComponent } from "../../../core/components/section/section.component";
import { EmailContactComponent } from "../../../core/components/email-contact/email-contact.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SectionComponent, EmailContactComponent]
})
export class HomeComponent {

}
