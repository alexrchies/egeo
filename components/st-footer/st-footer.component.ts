import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { StFooterLink } from './st-footer.model';

@Component({
  selector: 'st-footer',
  templateUrl: './st-footer.component.html',
  styleUrls: ['./st-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StFooterComponent {

  @Input() rightsText: string;
  @Input() links: Array<StFooterLink> = [];
  @Input() qaTag: string;
  @Input() image: string;
  @Output() link: EventEmitter<StFooterLink> = new EventEmitter<StFooterLink>();

  constructor(
     private router: Router
  ) { }

  goToLink(link: StFooterLink): void {
     if (link.url) {
        window.open(link.url, '_blank');
     }

     if (link.router) {
        this.router.navigate([link.router]);
     }

     this.link.emit(link);
  }


}
