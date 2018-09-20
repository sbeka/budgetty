import {Component, OnInit} from '@angular/core';
import { NavController} from 'ionic-angular';
import {CategoryModel} from "../../shared/models/category.model";
import {AccountModel} from "../../shared/models/account.model";
import {AddAccountPage} from "../add-account/add-account";
import {AddCategoryPage} from "../add-category/add-category";
import {CategoryService} from "../../shared/services/category.service";
import {AccountService} from "../../shared/services/account.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  accounts: AccountModel[] = [];
  categories: CategoryModel[] = [];

  constructor(
    public navCtrl: NavController,
    private categoryService: CategoryService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    //get all category list
    this.categories = this.categoryService.getAll();
    //get all account list
    this.accounts = this.accountService.getAll();
  }

  addAccount() {
    this.navCtrl.push(AddAccountPage);
  }

  addCategory() {
    this.navCtrl.push(AddCategoryPage);
  }

}
