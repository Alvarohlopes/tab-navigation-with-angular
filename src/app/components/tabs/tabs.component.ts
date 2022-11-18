import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Route, Router, RoutesRecognized } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export interface Tab {
  name: string;
  component: any;
  active: boolean;
  route: Route | any;
  key: string;
}

@UntilDestroy()
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {

  tabs: Tab[] = [];

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(untilDestroyed(this))
      .subscribe(route => {
        if (route instanceof RoutesRecognized) {
          this.createTabs(route);
        }
      });
  }

  closeTab(tab: Tab): void {
    if (this.tabs.length > 1) {
      this.tabs = this.tabs.filter((item: Tab) => item.key !== tab.key);

      if (tab.active) {
        this.deactivateTabs();
        this.router.navigateByUrl(this.tabs[this.tabs.length - 1].route.path);
      }
    }
  }

  setTab(index: number): void {
    this.deactivateTabs();
    this.tabs[index].active = true;
  }

  createTabs(route: RoutesRecognized): void {
    const comp: any = route.state.root.firstChild?.component;

    this.deactivateTabs();

    if (this.tabs.find((tab: Tab) => tab.name == comp['name']) == null) {
      this.tabs.push({
        name: comp['name'],
        component: comp,
        key: comp['name'],
        active: true,
        route: route.state.root.firstChild?.routeConfig
      });
    } else {
      const tabToActivate = this.tabs.find((tab: Tab) => tab.name == comp['name']);
      if (tabToActivate) {
        tabToActivate.active = true;
      }
    }

    this.cd.markForCheck();
  }

  deactivateTabs(): void {
    this.tabs.forEach((tab: Tab) => tab.active = false);
  }

}
