import {Injectable} from "@angular/core";
import {AccountModel} from "../models/account.model";

@Injectable()
export class AccountService {

  private accounts: AccountModel[] = [
    {
      title: "Кошелек",
      balance: 1300,
      icon: "https://image.flaticon.com/icons/svg/550/550638.svg"
    },
    {
      title: "Kaspi Gold",
      balance: 3000,
      icon: "https://image.flaticon.com/icons/svg/550/550638.svg"
    },
    {
      title: "HalykBank",
      balance: 1000,
      icon: "https://image.flaticon.com/icons/svg/550/550638.svg"
    }
  ];

  constructor() {}

  updateAccount(title: string, balance: number): boolean {
    for (let i in this.accounts) {
      if (this.accounts[i].title === title) {
        this.accounts[i].balance = balance;
        return true;
      }
    }
    return false;
  }

  getAccountByTitle(title: string): AccountModel {
    let res = this.accounts.filter(res => res.title === title);
    return res[0];
  }

  getAll(): AccountModel[] {
    return this.accounts;
  }

  add(data: AccountModel) {
    this.accounts.push(data);
  }

  getAllBalance(): number {
    let sum = 0;
    for (let account of this.accounts) {
      sum += account.balance;
    }
    return sum;
  }

}
