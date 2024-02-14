import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContentComponent } from './pages/content/content.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuTitleComponent, BigCardComponent, HomeComponent, ContentComponent, MenuBarComponent,RouterModule]
})
export class AppComponent {
  title = 'angular-blog';
}
