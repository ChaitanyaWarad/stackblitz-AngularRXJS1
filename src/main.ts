import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  ngOnInit(): void {
    of(2, 4, 6, 8, 10).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item ${item}`),
      error: (err) => console.log(`Error item ${err}`),
      complete: () => console.log(`completed`),
    });

    of('a1', 'a2', 'a3').subscribe({
      next: (apple) => console.log(`A emiited ${apple}`),
      error: (err) => console.log(`Error Occured ${err}`),
      complete: () => console.log(`Completed`),
    });
  }
}

bootstrapApplication(App);
