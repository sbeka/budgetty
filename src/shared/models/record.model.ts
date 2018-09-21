export class RecordModel {
  constructor(
    public type: string,
    public amount: number,
    public category: string,
    public date: string,
    public description: string
  ) {}
}
