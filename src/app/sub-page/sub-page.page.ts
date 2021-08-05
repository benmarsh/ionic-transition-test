import {Component, OnInit} from '@angular/core';
import {ApiService, Photo} from '../api.service';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.page.html',
  styleUrls: ['./sub-page.page.scss'],
})
export class SubPagePage implements OnInit {

  photos: Array<Photo> = [];

  constructor(
    private api: ApiService,
  ) {
    console.log(history.state);
  }

  ngOnInit() {
    if (history.state.photos) {
      this.photos = history.state.photos;
    }
  }

  ionViewWillEnter() {
    if (history.state.onViewWillEnter) {
      this.loadPhotos();
    }
  }

  ionViewDidEnter() {
    if (history.state.onViewDidEnter) {
      this.loadPhotos();
    }
  }

  loadPhotos() {
    this.api.getPhotos().subscribe((response) => {
      this.photos = response;
    });
  }

}
