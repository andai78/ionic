import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  movies: any[] = ['Malcom x', 'Menace 2 society', 'Black phanters'];

  movieSelected(movie){
    console.log(movie)
  }
}
