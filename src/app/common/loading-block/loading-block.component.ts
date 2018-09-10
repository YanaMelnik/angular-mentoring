import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit, OnDestroy {
  public showLoader: boolean;
  private loaderSubscription;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.isShowingLoader();
  }

  isShowingLoader() {
    this.loaderSubscription = this.loadingService.shouldDisplay()
      .subscribe(
        (res) => {
          this.showLoader = res;
        }
      );
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}
