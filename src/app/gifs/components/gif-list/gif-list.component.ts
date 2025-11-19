import { Component, Input } from '@angular/core';
import GifListItemComponent from "./gif-list-item/gif-list-item.component";

@Component({
  selector: 'gif-list',
  standalone: true,
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export default  class GifListComponent {

  @Input() imagenes: string[] = [];

}
