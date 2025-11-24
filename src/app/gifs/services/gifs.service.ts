import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.iterface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifsService {



  // esto nos permitira hacer peticiones http put, get,  delete ....
private http =  inject(HttpClient);

// ir al app.cinfig.ts y pegar "provideHttpClient(withFetch()),"

trendingGifs = signal<Gif[]>([]);

constructor() {
  this.loadTrendingGifs();
}


// esta es una peticion del tipo GET
  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '20',


      },



  }).subscribe( (resp) => {
    const gifs = GifMapper.mapGiphyItemsToGifArray( resp.data );
    console.log(gifs);
  })


}

}
