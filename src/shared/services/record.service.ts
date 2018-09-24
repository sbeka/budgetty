import {Injectable} from "@angular/core";
import {RecordModel} from "../models/record.model";

@Injectable()
export class RecordService {

  //VARIABLES
  private records: RecordModel[] = [];


  //LIFESYCLE
  constructor() {
    let storageRecords = window.localStorage.getItem('records');
    if (storageRecords) {
      this.records = JSON.parse(storageRecords);
    }
  }




  //GET
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


  //SET
  add(data: RecordModel) {
    this.records.push(data);
    this.saveToStorage();
  }


  //HELPER FUNCTIONS
  saveToStorage() {
    window.localStorage.setItem('records', JSON.stringify(this.records));
  }
}
