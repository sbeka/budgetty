import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AccountModel} from "../../shared/models/account.model";
import {AccountService} from "../../shared/services/account.service";

@Component({
  selector: 'page-add-account',
  templateUrl: 'add-account.html',
})
export class AddAccountPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private accountService: AccountService,
    public alertCtrl: AlertController
  ) {
  }

  onSubmit(form: NgForm) {
    //add item
    let { name, balance } = form.value;
    const account = new AccountModel(name, +balance, "https://image.flaticon.com/icons/svg/550/550638.svg");
    this.accountService.add(account);
    //reset form
    form.reset();
    form.form.patchValue({capacity: 1});
    //show alert
    this.showAlert();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Успешно!',
      subTitle: 'Счет успешно добавлено!',
      buttons: ['OK']
    });
    alert.present();
  }

}
