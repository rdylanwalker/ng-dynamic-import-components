import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import { ProductionService } from "../production.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.scss' ]
})
export class ChildComponent implements AfterViewInit {
  @ViewChild('child', { read: ViewContainerRef }) child: ViewContainerRef | undefined = undefined;

  constructor(
    private productionService: ProductionService,
  ) {
  }

  ngAfterViewInit() {
    this.productionService.loadProductionFeature('childProduction', this.child);
  }
}
