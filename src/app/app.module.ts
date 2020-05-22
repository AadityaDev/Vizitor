import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera } from '@ionic-native/camera/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { SecureStorage } '@ionic-native/secure-storage/ngx';
import { InterceptorService } from './network/interceptor.service';
import { FlagListComponent } from '../app/components/flag-list/flag-list.component';
import { FlagLisModule } from '../app/components/flag-list/flag-list.module';
import { QuestionComponent } from '../app/components/question/question.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    FlagListComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FlagLisModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    QRScanner,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
