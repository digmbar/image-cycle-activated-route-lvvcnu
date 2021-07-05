import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hello',
  template: `
    <div>{{ activeImage }}</div>
    <button (click)="prev()">Prev</button>
    <button (click)="next()">Next</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class ImagesComponent {
  images = ['firstimage.jpg', 'secondimage.jpg', 'thirdimage.jpg'];

  activeId = 0;

  get activeImage() {
    return this.images[this.activeId];
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map(params => params.get('id') || 0),
        map(n => Number(n))
      )
      .subscribe(id => (this.activeId = id));
  }

  next() {
    const next =
      this.activeId + 1 >= this.images.length - 1
        ? this.images.length - 1
        : this.activeId + 1;

    this.router.navigate([next]);
  }

  prev() {
    const prev = this.activeId - 1 < 0 ? 0 : this.activeId - 1;

    this.router.navigate([prev]);
  }
}
