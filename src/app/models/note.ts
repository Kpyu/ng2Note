export class Note {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public createTime: Date,
    public summary: string,
  ) { }
}