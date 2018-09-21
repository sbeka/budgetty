import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryModel} from "../../shared/models/category.model";
import {AccountModel} from "../../shared/models/account.model";
import {AddAccountPage} from "../add-account/add-account";
import {AddCategoryPage} from "../add-category/add-category";
import {CategoryService} from "../../shared/services/category.service";
import {AccountService} from "../../shared/services/account.service";
import {RecordService} from "../../shared/services/record.service";
import {AddRecordPage} from "../add-record/add-record";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  accounts: AccountModel[] = [];
  categories: CategoryModel[] = [];
  expences: number = 0;
  balance: number = 0;
  capacity: number = 0;

  constructor(
    public navCtrl: NavController,
    private categoryService: CategoryService,
    private accountService: AccountService,
    private recordService: RecordService
  ) {}

  ngOnInit() {
    //get all category list
    this.categories = this.categoryService.getAll();
    //get all account list
    this.accounts = this.accountService.getAll();
    this.getTopInfo();
  }
  
  ionViewWillEnter() {
    this.getTopInfo();
  }
  
  getTopInfo() {
    //get all expences
    this.expences = this.recordService.getSum();
    //get balance
    this.balance = this.accountService.getAllBalance();
    //get all capacity
    this.capacity = this.categoryService.getSumCapacity();
  }

  addAccount() {
    this.navCtrl.push(AddAccountPage);
  }

  addRecord() {
    this.navCtrl.push(AddRecordPage);
  }

  addCategory() {
    this.navCtrl.push(AddCategoryPage);
  }

  getSumCategory(category: string): number {
    return this.recordService.getSumByCategory(category);
  }

}
