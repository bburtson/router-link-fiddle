import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  private readonly router = inject(Router);

  protected readonly title = signal('router-link-fiddle');
  protected readonly routes = [
    { label: 'Overview', link: '/' },
    { label: 'Components', link: '/components' },
    { label: 'Examples', link: '/examples' },
    { label: 'About', link: '/about' },
  ];
  protected selectedRoute = '/';
  protected selectedRouteLabel = 'Overview';

  constructor() {
    this.syncSelectedRoute();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        this.syncSelectedRoute();
      });
  }

  protected onRouteSelect(route: string): void {
    void this.router.navigateByUrl(route);
  }

  private syncSelectedRoute(): void {
    const routeWithoutQuery = this.router.url.split('?')[0].split('#')[0] || '/';
    const currentRoute = this.routes.find((route) => route.link === routeWithoutQuery) ?? this.routes[0];

    this.selectedRoute = currentRoute.link;
    this.selectedRouteLabel = currentRoute.label;
  }
}
