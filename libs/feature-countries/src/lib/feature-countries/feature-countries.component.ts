import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-countries.component.html',
  styleUrl: './feature-countries.component.scss',
})
export class FeatureCountriesComponent {}
