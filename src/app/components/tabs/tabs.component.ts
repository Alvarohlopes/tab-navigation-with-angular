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
  ) { 
    router.events
    .pipe(untilDestroyed(this))
    .subscribe(route => {
      if (route instanceof RoutesRecognized) {
        this.createTabByTypeRoute(route);
      }
    });
  }

  ngOnInit(): void {
   
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

  setTab(tab: Tab): void { 
    this.router.navigate(['/' + tab.route.path]);
  }

  createTabByTypeRoute(route: RoutesRecognized): void {
    this.deactivateTabs();
    
    // This method may vary according to the number of route levels
    
    // Component Route - first layer of routes - default
    const componentNoLazy: any = route.state.root.firstChild?.component;
    const routeNoLazy: any = route.state.root.firstChild?.routeConfig;
    
    // Lazy Load Route - first and second layer of routes - third page
    const componentUsingLazy: any = route.state.root.firstChild?.firstChild?.component;
    const routeUsingLazyNoPath: any = route.state.root.firstChild?.firstChild?.routeConfig;
    const routeUsingLazy: any = {
      ...routeUsingLazyNoPath,
      path: route.state.url
    }

    // Lazy Load Route - third layer of routes - first page
    const componentUsingLazyThirdLayer: any = route.state.root.firstChild?.firstChild?.firstChild?.component;
    const routeUsingLazyNoPathThirdLayer: any = route.state.root.firstChild?.firstChild?.firstChild?.routeConfig;
    const routeUsingLazyThirdLayer: any = {
      ...routeUsingLazyNoPathThirdLayer,
      path: route.state.url
    }
    
    if (componentNoLazy) {
      this.createTab(componentNoLazy, routeNoLazy);
    } else if(componentUsingLazy ){
      this.createTab(componentUsingLazy, routeUsingLazy);
    } else if (componentUsingLazyThirdLayer) {
      this.createTab(componentUsingLazyThirdLayer, routeUsingLazyThirdLayer);
    }

    this.cd.markForCheck();
  }

  createTab(component: any, route: any): void {       
    if (this.tabs.find((tab: Tab) => tab.name == component['name']) == null) {
      this.tabs.push({
        name: component['name'],
        component: component,
        key: component['name'],
        active: true,
        route: route
      });
    } else {
      const tabToActivate = this.tabs.find((tab: Tab) => tab.name == component['name']);
      if (tabToActivate) {
        tabToActivate.active = true;
      }
    }
    
  }

  deactivateTabs(): void {
    this.tabs.forEach((tab: Tab) => tab.active = false);
  }

}
