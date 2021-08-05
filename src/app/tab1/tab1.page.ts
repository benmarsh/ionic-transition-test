import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loading = false;

  constructor(
    private navController: NavController,
    private api: ApiService
  ) {
    //
  }

  loadAfterTransition() {
    this.navController.navigateForward('/sub-page', {
      state: {
        onViewDidEnter: true
      }
    });
  }

  loadDuringTransition() {
    this.navController.navigateForward('/sub-page', {
      state: {
        onViewWillEnter: true
      }
    });
  }

  loadBeforeTransition() {
    this.loading = true;
    this.api.getPhotos().subscribe((response) => {
      this.navController.navigateForward('/sub-page', {
        state: {
          photos: response
        }
      });
      this.loading = false;
    }, (error) => {
      this.loading = false;
    });
  }
}
