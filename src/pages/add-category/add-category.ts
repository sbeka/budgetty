import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {CategoryModel} from "../../shared/models/category.model";
import {CategoryService} from "../../shared/services/category.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {

  private iconDir: string = 'assets/user-icons/category-icons/';

  icons = [
    { fileName: 'apple_1.svg' },
    { fileName: 'car_1.svg' },
    { fileName: 'cart_1.svg' },
    { fileName: 'home_1.svg' },
    { fileName: 'wineglass_1.svg' },
    { fileName: 'hamburger.svg' },
    { fileName: 'popcorn.svg' },
    { fileName: 'donut.svg' },
    { fileName: 'lobster.svg' },
    { fileName: 'milk.svg' },
    { fileName: 'hot-dog.svg' },
    { fileName: 'ice-cream.svg' },
    { fileName: 'sushi.svg' },
    { fileName: 'coffee-cup.svg' },
    { fileName: 'key.svg' },
    { fileName: 'apartment.svg' },
    { fileName: 'contract.svg' },
    { fileName: 'home.svg' },
    { fileName: 'house.svg' },
    { fileName: 'paint-roller.svg' },
    { fileName: 'umbrella.svg' },
    { fileName: 'car.svg' },
    { fileName: 'palm-tree.svg' },
    { fileName: 'cocktail.svg' },
    { fileName: 'muscle.svg' },
    { fileName: 'football.svg' },
    { fileName: 'dumbbell.svg' },
    { fileName: 'stethoscope.svg' },
    { fileName: 'pills.svg' },
    { fileName: 'pill.svg' },
    { fileName: 'shirt.svg' },
    { fileName: 'theater.svg' },
    { fileName: 'casino.svg' },
    { fileName: 'theater_1.svg' },
    { fileName: 'group.svg' },
    { fileName: 'share.svg' },
    { fileName: 'relationship.svg' },
    { fileName: 'family.svg' },
    { fileName: 'couple.svg' },
    { fileName: 'eat.svg' },
    { fileName: 'eat_1.svg' },
    { fileName: 'startup.svg' },
    { fileName: 'idea.svg' },
    { fileName: 'startup_1.svg' },
    { fileName: 'coins.svg' },
    { fileName: 'money.svg' },
    { fileName: 'school-bus.svg' },
    { fileName: 'clipboard.svg' },
    { fileName: 'search.svg' },
    { fileName: 'mortarboard.svg' },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoryService: CategoryService,
    public alertCtrl: AlertController,
    private sanitizer: DomSanitizer
  ) {}

  onSubmit(form: NgForm) {
    //add item
    let { name, capacity, icon } = form.value;
    const category = new CategoryModel(name, +capacity, this.iconDir+icon);
    this.categoryService.add(category);
    //form reset
    form.reset();
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

  sanitizerUrl(url): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle("url("+this.iconDir+url+")");
  }

}
