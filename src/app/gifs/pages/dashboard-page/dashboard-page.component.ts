import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import GifsSideMenuHeaderComponent from "../../components/gifs-side-menu-header/gifs-side-menu-header.component";
import GifsSideMenuOptionsComponent from "../../components/gifs-side-menu-options/gifs-side-menu-options.component";
import GifsSideMenuComponent from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [RouterOutlet, GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent, GifsSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export  default class DashboardPageComponent {

}
