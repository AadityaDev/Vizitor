import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-scanner',
  templateUrl: './visitor-scanner.page.html',
  styleUrls: ['./visitor-scanner.page.scss'],
})
export class VisitorScannerPage implements OnInit {

  encodedData = '';
  QRSCANNED_DATA: string;
  isOn = false;
  scannedData: {};

  constructor(private qrScanCtrl: QRScanner, private router: Router) { }

  ngOnInit() {
  }

  goToQrScan() {
    this.qrScanCtrl.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          this.isOn = true;


          // start scanning
          const scanSub = this.qrScanCtrl.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.isOn = false;

            this.QRSCANNED_DATA = text;
            if (this.QRSCANNED_DATA !== '') {
              console.log('QRScanned is empty!!');
              this.closeScanner();
              scanSub.unsubscribe();
              this.router.navigateByUrl('/visitor-mobile-verify');

            }
          });
          this.qrScanCtrl.show();

        } else if (status.denied) {
          console.log('camera permission denied');
          this.qrScanCtrl.openSettings();
        } else {
          console.log('Extra Else section');
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  closeScanner() {
    this.isOn = false;
    this.qrScanCtrl.hide();
    this.qrScanCtrl.destroy();
  }

}
