import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {CategoryModel} from "../../shared/models/category.model";
import {CategoryService} from "../../shared/services/category.service";

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoryService: CategoryService,
    public alertCtrl: AlertController
  ) {
  }

  onSubmit(form: NgForm) {
    //add item
    let { name, capacity } = form.value;
    const category = new CategoryModel(name, +capacity, "https://image.flaticon.com/icons/svg/550/550638.svg");
    this.categoryService.add(category);
    //form reset
    form.reset();
    form.form.patchValue({capacity: 1});
    //show alert
    this.showAlert();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Успешно!',
      subTitle: 'Категория успешно добавлено!',
      buttons: ['OK']
    });
    alert.present();
  }

}
