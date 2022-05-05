export class Cats {
  private id: string;
  private url: string;
  private width: number;
  private heigth: number;

  constructor(id: string, url: string, width: number, heigth: number) {
    this.id = id;
    this.url = url;
    this.width = width;
    this.heigth = heigth;
  }
}
