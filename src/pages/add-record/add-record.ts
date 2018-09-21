import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {CategoryService} from "../../shared/services/category.service";
import {CategoryModel} from "../../shared/models/category.model";
import {AccountModel} from "../../shared/models/account.model";
import {AccountService} from "../../shared/services/account.service";
import {NgForm} from "@angular/forms";
import {RecordModel} from "../../shared/models/record.model";
import * as moment from 'moment';
import {RecordService} from "../../shared/services/record.service";

@Component({
  selector: 'page-add-record',
  templateUrl: 'add-record.html',
})
export class AddRecordPage implements OnInit{

  categories: CategoryModel[] = [];
  accounts: AccountModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private categoryService: CategoryService,
    private accountService: AccountService,
    private recordService: RecordService
  ) {}

  ngOnInit() {
    this.categories = this.categoryService.getAll();
    this.accounts = this.accountService.getAll();
  }

  onSubmit(form: NgForm) {
    let { account, category, amount, description } = form.value;
    if (+amount < 0) amount *= -1;

    let account_s = this.accountService.getAccountByTitle(account);

    let value = 0;
    if (amount > account_s.balance) {
      this.presentToast(`На счету недостаточно средств. Вам не хватает: ${amount - account_s.balance} тенге`);
      return;
    } else {
      value = account_s.balance - amount;
    }

    if (this.accountService.updateAccount(account_s.title, value)) {
      const record = new RecordModel('out', +amount, category, moment().format('DD.MM.YYYY HH:mm:ss'), description);
      this.recordService.add(record);
      this.presentToast('Расход успешно добавлен!');
      this.navCtrl.pop();
    }else{
      this.presentToast('Ошибка при добавлении расхода');
    }

  }

  presentToast(text: string) {
    const toast = this.toastCtrl.create({
      message: text,
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

}
