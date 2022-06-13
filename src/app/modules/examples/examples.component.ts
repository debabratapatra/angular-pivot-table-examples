import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements AfterViewInit {
  adsEnabled = false;
  adsMsg =
    'Please turn off Ads blocker for this page and reload the page. That is the only way to keep this website running. Thank you for turning off Ads blocker.';

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
          overlays: { bottom: true },
        });
      } catch (e) {
        console.error(e);
      }
    }, 10);

    for (let index = 0; index < 6; index++) {
      this.insertAds('div.ads-vertical');
    }

    for (let index = 0; index < 1; index++) {
      this.insertAds('div.left-ads-vertical');
    }

    this.checkAdsBlocker();
    console.log('version 1.9');
  }
  insertAds(selector) {
    setTimeout(() => {
      const ads = `<ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-3506323855246144"
      data-ad-slot="8950106958"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>`;
      const $div = document.createElement('div');
      $div.style.margin = '5px';
      $div.innerHTML = ads;
      document.querySelector(selector).append($div);
      (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
    }, 100);
  }

  checkAdsBlocker() {
    setTimeout(() => {
      //Check if ads are loaded.
      if(document.querySelector('ins.adsbygoogle').innerHTML.length > 0) {
        this.adBlockNotDetected();
      } else {
        this.adBlockDetected();
      }
    }, 4000);
  }

  // Function called if AdBlock is not detected
  adBlockNotDetected() {
    this.adsEnabled = false;
    console.log('AdBlock is not enabled');
  }
  // Function called if AdBlock is detected
  adBlockDetected() {
    this.adsEnabled = true;
    console.log('AdBlock is enabled');
  }

}
