import {Injectable} from "@angular/core";
import {AccountModel} from "../models/account.model";

@Injectable()
export class AccountService {

  private accounts: AccountModel[] = [];


  //LIFESYCLE
  constructor() {
    let storageAccounts = window.localStorage.getItem('accounts');
    if (storageAccounts) {
      this.accounts = JSON.parse(storageAccounts);
    }else{
      this.accounts = [
        {
          title: 'Кошелек',
          balance: 5000,
          icon: 'assets/user-icons/account-icons/coin.svg'
        }
      ];
    }
  }





  //GET
  getAccountByTitle(title: string): AccountModel {
    let res = this.accounts.filter(res => res.title === title);
    return res[0];
  }
  getAll(): AccountModel[] {
    return this.accounts;
  }
  getAllBalance(): number {
    let sum = 0;
    for (let account of this.accounts) {
      sum += account.balance;
    }
    return sum;
  }

  //SET
  updateAccount(title: string, balance: number): boolean {
    for (let i in this.accounts) {
      if (this.accounts[i].title === title) {
        this.accounts[i].balance = balance;
        this.saveToStorage();
        return true;
      }
    }
    return false;
  }
  add(data: AccountModel) {
    this.accounts.push(data);
    this.saveToStorage();
  }


  //HELPER FUNCTIONS
  saveToStorage() {
    window.localStorage.setItem('accounts', JSON.stringify(this.accounts));
  }

}
