import { Dice } from "./dice";

enum SIDE {
  MAIN = "1",
  TOP = "3",
  DOWN = "4",
  LEFT = "2",
  RIGHT = "5",
  ODD = "6",
}

describe("dice", () => {
  const createDice = () => {
    return new Dice(
      SIDE.MAIN,
      SIDE.TOP,
      SIDE.DOWN,
      SIDE.LEFT,
      SIDE.RIGHT,
      SIDE.ODD
    );
  };

  describe("test", () => {
    it("test1", () => {
      const dice = createDice();
      const main = dice.turnRight().getMain();
      expect(main).toBe("2");
    });

    it("test2", () => {
      const dice = createDice();
      const main = dice.turnUp().getMain();
      expect(main).toBe("4");
    });

    it("test3", () => {
      const dice = createDice();
      const main = dice.turnLeft().getMain();
      expect(main).toBe("5");
    });

    it("test4", () => {
      const dice = createDice();
      const main = dice.turnDown().getMain();
      expect(main).toBe("3");
    });

    it("test5", () => {
      const dice = createDice();
      const main = dice
        .turnUp()
        .turnRight()
        .turnLeft()
        .turnUp()
        .turnLeft()
        .getMain();
      expect(main).toBe("5");
    });

    it("test5", () => {
      const dice = createDice();
      const main = dice
        .turnRight()
        .turnUp()
        .turnLeft()
        .turnDown()
        .turnLeft()
        .turnLeft()
        .turnUp()
        .getMain();
      expect(main).toBe("1");
    });
  });
});
