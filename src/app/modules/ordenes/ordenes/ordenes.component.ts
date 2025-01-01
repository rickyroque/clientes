import { Component, ElementRef, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent {

  messages: { text: string; sender: 'user' | 'system' }[] = [];
  newMessage: string = '';

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private chatService: GeneralService) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      
      this.messages.push({ text: this.newMessage.trim(), sender: 'user' });
  
      
      this.chatService.sendMessage(this.newMessage.trim()).subscribe({
        next: (response) => {
         
          if (response && response.response) {
            this.messages.push({ text: response.response, sender: 'system' });
          } else {
            this.messages.push({
              text: 'Respuesta no válida del servidor.',
              sender: 'system',
            });
          }
          this.scrollToBottom();
        },
        error: (err) => {
          console.error('Error al enviar el mensaje:', err);
          this.messages.push({
            text: 'Hubo un error al procesar tu mensaje.',
            sender: 'system',
          });
          this.scrollToBottom();
        },
      });

      this.newMessage = '';
    }
  }

  scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

}
