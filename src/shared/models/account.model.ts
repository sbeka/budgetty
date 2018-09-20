export class AccountModel {
  constructor(
    public title: string,
    public balance: number,
    public icon: string,
    public id?: number
  ) {}
}
