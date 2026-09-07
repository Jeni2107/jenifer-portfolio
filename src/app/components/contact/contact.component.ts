import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly portfolio = PORTFOLIO;

  readonly contactItems = [
    {
      icon: '✉',
      label: 'Email',
      value: PORTFOLIO.email,
      href: `mailto:${PORTFOLIO.email}`,
    },
    {
      icon: 'in',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: PORTFOLIO.linkedin,
    },
  ];
}
