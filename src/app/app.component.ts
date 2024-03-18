import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CountriesListComponent } from '@angular-graphql-apollo/feature-countries';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CountriesListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-graphql-apollo';
}
