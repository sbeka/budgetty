import {Injectable} from "@angular/core";
import {RecordModel} from "../models/record.model";

@Injectable()
export class RecordService {

  private records: RecordModel[] = [
    {
      type: "out",
      amount: 400,
      category: "Еда",
      date: "01.01.18 22:10",
      description: "Купил напиток"
    },
    {
      type: "out",
      amount: 700,
      category: "Еда",
      date: "01.01.18 13:10",
      description: "Купил обед"
    }
  ];

  constructor() {}

  getAll(): RecordModel[] {
    return this.records;
  }

  getSumByCategory(category: string): number {
    let sum = 0;
    let resCategories = this.records.filter(res => res.category === category);
    if (resCategories.length > 0) {
      for (let resCategory of resCategories) {
        sum += resCategory.amount;
      }
    }
    return sum;
  }

  getSum(): number {
    let sum = 0;
    for(let record of this.records) {
      sum += record.amount;
    }
    return sum;
  }

  add(data: RecordModel) {
    this.records.push(data);
  }
}
