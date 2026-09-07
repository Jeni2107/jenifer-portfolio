import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly portfolio = PORTFOLIO;

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (!img.src.includes('profile-fallback.svg')) {
      img.src = 'assets/images/profile-fallback.svg';
    }
  }
}
