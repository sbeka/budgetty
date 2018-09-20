import {Injectable} from "@angular/core";
import {AccountModel} from "../models/account.model";

@Injectable()
export class AccountService {

  private accounts: AccountModel[] = [
    {
      id: 1,
      title: "Кошелек",
      balance: 1300,
      icon: "https://image.flaticon.com/icons/svg/550/550638.svg"
    },
    {
      id: 2,
      title: "Kaspi Gold",
      balance: 3000,
      icon: "https://image.flaticon.com/icons/svg/550/550638.svg"
    },
    {
      id: 3,
      title: "HalykBank",
      balance: 1000,
      icon: "https://image.flaticon.com/icons/svg/550/550638.svg"
    }
  ];

  constructor() {}

  getAll(): AccountModel[] {
    return this.accounts;
  }

  add(data: AccountModel) {
    this.accounts.push(data);
  }


}
