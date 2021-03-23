import { Compiler, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'import-prototype';
  production = environment.production;

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef | undefined = undefined;
  // this.child will always be undefined; cannot access template variables beyond this components boundary.
  // This means that the "loadProductionFeatures" would need to be made more generic and then used
  // inside of any component that needs to check if a component should be visible.
  @ViewChild('child', { read: ViewContainerRef }) child: ViewContainerRef | undefined = undefined;

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) {
    if (environment.production) {
      this.loadProductionFeatures();
    }
  }

  loadProductionFeatures() {
    import('./production/production.module').then(({ ProductionModule }) => {
      this.compiler.compileModuleAsync(ProductionModule).then(moduleFactory => {
        const moduleRef = moduleFactory.create(this.injector);
        moduleRef.instance.resolveComponents().then(componentFactory => {
          if (componentFactory.production) {
            this.container?.createComponent(componentFactory.production, undefined, moduleRef.injector);
          }
          if (componentFactory.childProduction) {
            this.child?.createComponent(componentFactory.childProduction, undefined, moduleRef.injector);
          }
        });
      });
    });
  }
}
