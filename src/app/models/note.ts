export class Note {
  private id: string;
  private createTime: Date;
  constructor(
    public title: string,
    public content: string,
    public summary?: string,
  ) {
    this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    this.createTime = new Date(Date.now());
  }
}
