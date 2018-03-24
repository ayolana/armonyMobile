import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * This Component need :
 * - flash-card components. Load it in component 
 */

@IonicPage()
@Component({
  selector: 'page-flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardPage {
  // private flashCards = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const flashCards = [
      {
        front: { image: 'assets/img/flashcards/namaste.jpg', title: 'Namaste', subtitle: 'नमस्ते' },
        back: {
          title: 'meaning',
          subtitle: 'Hello, Greetings, I bless the divine in you',
          content: 'It is used to greet people every time they meet. It is usually initiated by the juniors'
        }
      },
      {
        front: {
          image: 'assets/img/flashcards/how_are_you.jpg',
          title: '(Tapailai) Kasto chha?',
          subtitle: '( तपाईंलाई ) कस्तो छ ?'
        },
        back: {
          title: 'meaning',
          subtitle: 'How are you?',
          content: 'It is used to ask people how they are doing or feeling.'
        }
      },
      {
        front: {
          image: 'assets/img/flashcards/sorry.jpg',
          title: 'Maaph garnuhos',
          subtitle: 'माफ गर्नुहोस्'
        },
        back: {
          title: 'meaning',
          subtitle: 'Excuse me/ pardon me / Sorry',
          content: 'It is used to ask for forgiveness when you do make mistakes.'
        }
      }
    ];
    console.log(flashCards);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashCardPage');
  }

}
