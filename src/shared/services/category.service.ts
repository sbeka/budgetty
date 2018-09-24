import {Injectable} from "@angular/core";
import {CategoryModel} from "../models/category.model";

@Injectable()
export class CategoryService {

  //VARIABLES
  private categories: CategoryModel[] = [];


  //LIFESYCLE
  constructor() {
    let storageCategories = window.localStorage.getItem('categories');
    if (storageCategories) {
      this.categories = JSON.parse(storageCategories);
    }else{
      this.categories = [
        {
          title: "Еда",
          capacity: 10000,
          icon: "assets/user-icons/category-icons/wineglass_1.svg"
        },
        {
          title: "Дом",
          capacity: 10000,
          icon: "assets/user-icons/category-icons/home_1.svg"
        },
        {
          title: "Транспорт",
          capacity: 5000,
          icon: "assets/user-icons/category-icons/car_1.svg"
        }
      ];
    }
  }





  //GET
  getAll(): CategoryModel[] {
    return this.categories;
  }
  getSumCapacity(): number {
    let sum = 0;
    for (let category of this.categories) {
      sum += category.capacity;
    }
    return sum;
  }


  //SET
  add(data: CategoryModel) {
    this.categories.push(data);
    this.saveToStorage();
  }


  //HELPER FUNCTIONS
  saveToStorage() {
    window.localStorage.setItem('categories', JSON.stringify(this.categories));
  }

}
