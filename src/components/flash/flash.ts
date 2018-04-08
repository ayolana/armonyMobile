import { Component, ViewChild } from '@angular/core';
import { FlashProvider } from '../../providers/flash/flash';
import { TimeBarComponent } from '../time-bar/time-bar';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'flash',
  templateUrl: 'flash.html',
  animations: [
    trigger('messageState', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in', style({ opacity: '0' }))
      ])
    ])
  ]
})
export class FlashComponent {

  @ViewChild(TimeBarComponent) set tb(timeBar: TimeBarComponent) {

    if (typeof (timeBar) !== 'undefined') {
      timeBar.startTimer(this.duration);
    }

  }

  public active: boolean = false;
  public message: string = '';
  private duration: number;
  private timeout;
  public activeClass = 'secondary';

  constructor(private flashProvider: FlashProvider) {

    this.flashProvider.show = this.show.bind(this);
    this.flashProvider.hide = this.hide.bind(this);

  }

  show(message, duration, type?) {

    this.message = message;
    this.active = true;
    this.duration = duration;

    if (type) {
      this.activeClass = type;
    }

    this.timeout = setTimeout(() => {
      this.active = false;
    }, duration);

  }

  hide() {
    this.active = false;
    clearTimeout(this.timeout);
  }

}