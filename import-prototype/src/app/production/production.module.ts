import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from "../../environments/environment";

export interface ProductionComponents {
  [key: string]: ComponentFactory<unknown> | undefined;
}

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class ProductionModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public async resolveComponents(): Promise<ProductionComponents> {
    let components: ProductionComponents = {}
    if (environment.production) {
      await import('../production-component/production.component').then(({ ProductionComponent }) => {
        components['production'] = this.componentFactoryResolver.resolveComponentFactory(ProductionComponent)
      })
      await import('../child-production/child-production.component').then(({ ChildProductionComponent }) => {
        components['childProduction'] = this.componentFactoryResolver.resolveComponentFactory(ChildProductionComponent)
      })
    }
    return components;
  }
}
