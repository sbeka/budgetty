import {Injectable} from "@angular/core";
import {CategoryModel} from "../models/category.model";

@Injectable()
export class CategoryService {

  private categories: CategoryModel[] = [
    {
      title: "Еда",
      capacity: 400,
      icon: "https://image.flaticon.com/icons/svg/168/168570.svg"
    },
    {
      title: "Дом",
      capacity: 12000,
      icon: "https://image.flaticon.com/icons/svg/589/589528.svg"
    },
    {
      title: "Покупки",
      capacity: 5000,
      icon: "https://image.flaticon.com/icons/svg/330/330767.svg"
    },
    {
      title: "Транспорт",
      capacity: 2000,
      icon: "https://image.flaticon.com/icons/svg/234/234788.svg"
    }
  ];

  constructor() {}

  getAll(): CategoryModel[] {
    return this.categories;
  }

  add(data: CategoryModel) {
    this.categories.push(data);
  }

  getSumCapacity(): number {
    let sum = 0;
    for (let category of this.categories) {
      sum += category.capacity;
    }
    return sum;
  }

}
