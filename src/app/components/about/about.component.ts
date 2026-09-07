import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly portfolio = PORTFOLIO;
  readonly summaryParagraphs = PORTFOLIO.summary.split('\n\n');
}
