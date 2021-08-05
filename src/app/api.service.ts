import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
    //
  }

  getPhotos() {
    return this.http.get<Array<Photo>>('https://jsonplaceholder.typicode.com/albums/1/photos', {});
  }
}

export interface Photo {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
