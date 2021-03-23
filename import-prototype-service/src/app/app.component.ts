import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { environment } from "../environments/environment";
import { ProductionService } from "./production.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {
  title = 'import-prototype';
  production = environment.production;

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef | undefined = undefined;

  constructor(
    private productionService: ProductionService,
  ) {
  }

  ngAfterViewInit() {
    this.productionService.loadProductionFeature('production', this.container);
  }
}
