import { Dice } from "./dice";
import { Direction, Sign, dirs } from "./util";

class Game {
  private grid: Sign[][] = [
    [Sign.Scissor, Sign.Rock, Sign.Scissor, Sign.Paper],
    [Sign.Rock, Sign.Paper, Sign.Scissor, Sign.Rock],
    [Sign.Scissor, Sign.Paper, Sign.Rock, Sign.Paper],
    [Sign.Paper, Sign.Rock, Sign.Scissor, Sign.Scissor],
  ];

  private position = { x: 0, y: 0 };
  private dice = new Dice<Sign>(
    Sign.Scissor,
    Sign.Rock,
    Sign.Paper,
    Sign.Scissor,
    Sign.Paper,
    Sign.Rock
  );

  findPath(numMoves: number): Direction[][] {
    const result = [];
    this.recurseFind(result, [], this.position, numMoves);
    return result;
  }

  private recurseFind(
    directions: Direction[][],
    builder: Direction[],
    position: { x: number; y: number },
    numMoves: number
  ) {
    if (numMoves === 0) {
      directions.push(builder);
      return;
    }

    dirs.forEach(({ pos, dir }) => {
      const newX = position.x + pos.x;
      const newY = position.y + pos.y;

      let sign = Sign.Scissor;
      switch (dir) {
        case Direction.DOWN:
          sign = this.dice.turnDown().getMain();
          break;
        case Direction.UP:
          sign = this.dice.turnUp().getMain();
          break;
        case Direction.LEFT:
          sign = this.dice.turnLeft().getMain();
          break;
        case Direction.RIGHT:
          sign = this.dice.turnRight().getMain();
          break;
      }

      if (
        newX >= 0 &&
        newY <= this.grid.length - 1 &&
        this.rpsComp(sign, this.grid[newY][newX]) === 1
      ) {
        builder.push(dir);
        this.recurseFind(
          directions,
          builder,
          { x: newX, y: newY },
          numMoves - 1
        );
        builder.pop();
      }
    });
  }

  private rpsComp(mine: Sign, theirs: Sign): number {
    if (mine === theirs) {
      return 0;
    }
    if (
      (mine === Sign.Rock && theirs === Sign.Scissor) ||
      (mine === Sign.Scissor && theirs === Sign.Paper) ||
      (mine === Sign.Paper && theirs === Sign.Rock)
    ) {
      return 1;
    }
    return -1;
  }
}
