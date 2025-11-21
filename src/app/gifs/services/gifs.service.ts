import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  // esto nos permitira hacer peticiones http put, get,  delete ....
private http =  inject(HttpClient);

// ir al app.cinfig.ts y pegar "provideHttpClient(withFetch()),"

constructor() {
  this.loadTrendingGifs();
}



  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '20',


      }



  })

}

}
