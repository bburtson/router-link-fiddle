import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  template: `
    <article class="route-card">
      <h2>Overview</h2>
      <p>
        This view shows how a select can route using router directives and how routerLinkActive
        reports the active route without custom matchers.
      </p>
      <div class="route-grid">
        <div>
          <h3>Router directives</h3>
          <ul>
            <li>routerLink handles navigation.</li>
            <li>routerLinkActive applies state styles.</li>
            <li>No manual route checks needed.</li>
          </ul>
        </div>
        <div>
          <h3>What to try</h3>
          <ul>
            <li>Switch the select options.</li>
            <li>Watch the chip highlight update.</li>
            <li>Notice the active label text.</li>
          </ul>
        </div>
      </div>
    </article>
  `,
})
export class OverviewPageComponent {}

@Component({
  selector: 'app-components-page',
  standalone: true,
  template: `
    <article class="route-card">
      <h2>Components</h2>
      <p>
        RouterLinkActive binds styling to the router state, so you can keep the template declarative
        and avoid custom matching functions.
      </p>
      <div class="route-callout">
        <span>Active route state:</span>
        <strong>handled by the router</strong>
      </div>
    </article>
  `,
})
export class ComponentsPageComponent {}

@Component({
  selector: 'app-examples-page',
  standalone: true,
  template: `
    <article class="route-card">
      <h2>Examples</h2>
      <p>
        Use routerLink on any clickable element. The select options in this demo route directly and
        still reflect the active route state.
      </p>
      <div class="route-grid">
        <div>
          <h3>Good fit for</h3>
          <ul>
            <li>Quick route pickers</li>
            <li>Simple dashboards</li>
            <li>Prototyping navigation</li>
          </ul>
        </div>
        <div>
          <h3>Works with</h3>
          <ul>
            <li>Exact route matches</li>
            <li>Nested segments</li>
            <li>Query params</li>
          </ul>
        </div>
      </div>
    </article>
  `,
})
export class ExamplesPageComponent {}

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
    <article class="route-card">
      <h2>About</h2>
      <p>
        This sample keeps routing declarative and uses routerLinkActive for stateful UI, avoiding
        custom route matching code.
      </p>
      <div class="route-callout">
        <span>Tip:</span>
        <strong>Use routerLinkActiveOptions for exact matching.</strong>
      </div>
    </article>
  `,
})
export class AboutPageComponent {}

export const routes: Routes = [
  {
    path: '',
    component: OverviewPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'components',
    component: ComponentsPageComponent,
  },
  {
    path: 'examples',
    component: ExamplesPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
