import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-email-contact',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './email-contact.component.html',
  styleUrl: './email-contact.component.scss',
  providers: [MessageService]

})
export class EmailContactComponent {
  @Input() email: string = 'Ruben.Farias.1999@Outlook.es';
  constructor(private _messageService: MessageService) {

  }
  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this._messageService.add({ severity: 'info', summary: 'Email copied to clipboard', detail: this.email,key:'tr' });
  }
  sendEmail() {
    window.location.href = `mailto:${this.email}`;
  }
}
