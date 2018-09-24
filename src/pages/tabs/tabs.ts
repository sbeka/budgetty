import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {HistoryPage} from "../history/history";
import {ReportPage} from "../report/report";
import {SettingsPage} from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoryPage;
  tab3Root = ReportPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
