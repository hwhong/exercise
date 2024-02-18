export class Dice {
  private main: string;
  private top: string;
  private down: string;
  private left: string;
  private right: string;
  private odd: string;

  constructor(
    main: string,
    top: string,
    down: string,
    left: string,
    right: string,
    odd: string
  ) {
    this.main = main;
    this.top = top;
    this.down = down;
    this.left = left;
    this.right = right;
    this.odd = odd;
  }

  turnLeft(): Dice {
    const oldMain = this.main;
    this.main = this.right;
    this.right = this.odd;
    this.odd = this.left;
    this.left = oldMain;

    return this;
  }

  turnRight(): Dice {
    const oldMain = this.main;
    this.main = this.left;
    this.left = this.odd;
    this.odd = this.right;
    this.right = oldMain;

    return this;
  }

  turnDown(): Dice {
    const oldMain = this.main;
    this.main = this.top;
    this.top = this.odd;
    this.odd = this.down;
    this.down = oldMain;
    return this;
  }

  turnUp(): Dice {
    const oldMain = this.main;
    this.main = this.down;
    this.down = this.odd;
    this.odd = this.top;
    this.top = oldMain;
    return this;
  }

  getMain(): string {
    return this.main;
  }

  getOdd(): string {
    return this.odd;
  }
}
