import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {FormsModule} from "@angular/forms";

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AddAccountPage} from "../pages/add-account/add-account";
import {AddCategoryPage} from "../pages/add-category/add-category";
import {CategoryService} from "../shared/services/category.service";
import {AccountService} from "../shared/services/account.service";
import {RecordService} from "../shared/services/record.service";
import {AddRecordPage} from "../pages/add-record/add-record";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AddAccountPage,
    AddCategoryPage,
    AddRecordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AddAccountPage,
    AddCategoryPage,
    AddRecordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoryService,
    AccountService,
    RecordService
  ]
})
export class AppModule {}
