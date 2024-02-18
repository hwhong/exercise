export class Dice<I> {
  private main: I;
  private top: I;
  private down: I;
  private left: I;
  private right: I;
  private odd: I;

  constructor(main: I, top: I, down: I, left: I, right: I, odd: I) {
    this.main = main;
    this.top = top;
    this.down = down;
    this.left = left;
    this.right = right;
    this.odd = odd;
  }

  turnLeft(): Dice<I> {
    const oldMain = this.main;
    this.main = this.right;
    this.right = this.odd;
    this.odd = this.left;
    this.left = oldMain;

    return this;
  }

  turnRight(): Dice<I> {
    const oldMain = this.main;
    this.main = this.left;
    this.left = this.odd;
    this.odd = this.right;
    this.right = oldMain;

    return this;
  }

  turnDown(): Dice<I> {
    const oldMain = this.main;
    this.main = this.top;
    this.top = this.odd;
    this.odd = this.down;
    this.down = oldMain;
    return this;
  }

  turnUp(): Dice<I> {
    const oldMain = this.main;
    this.main = this.down;
    this.down = this.odd;
    this.odd = this.top;
    this.top = oldMain;
    return this;
  }

  getMain(): I {
    return this.main;
  }

  getOdd(): I {
    return this.odd;
  }
}
