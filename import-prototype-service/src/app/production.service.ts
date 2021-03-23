import { Compiler, Injectable, Injector, ViewContainerRef } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) {
  }

  loadProductionFeature(component: string, template?: ViewContainerRef) {
    if (environment.production) {
      import('./production/production.module').then(({ ProductionModule }) => {
        this.compiler.compileModuleAsync(ProductionModule).then(moduleFactory => {
          const moduleRef = moduleFactory.create(this.injector);
          moduleRef.instance.resolveComponents().then(componentFactory => {
            if (componentFactory[component]) {
              // @ts-ignore
              template?.createComponent(componentFactory[component], undefined, moduleRef.injector);
            }
          });
        });
      });
    }
  }
}

