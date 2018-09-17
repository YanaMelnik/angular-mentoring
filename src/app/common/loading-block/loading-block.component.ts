import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { AutoUnsubscribe } from '../../core/decorator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})

@AutoUnsubscribe(['loaderSubscription'])
export class LoadingBlockComponent implements OnInit {
  public showLoader: boolean;
  private loaderSubscription: Subscription;

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
}
