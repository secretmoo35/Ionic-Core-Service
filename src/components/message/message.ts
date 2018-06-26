import { Component, Input} from '@angular/core';

/**
 * Generated class for the MessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {
  @Input() type: string = '';
  @Input() message: string = '';
  // text: string;

  constructor() {
    console.log('Hello MessageComponent Component');
    // this.text = 'Hello World';
  }

}
