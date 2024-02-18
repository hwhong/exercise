export enum SIDE {
  MAIN = "1",
  TOP = "3",
  DOWN = "4",
  LEFT = "2",
  RIGHT = "5",
  ODD = "6",
}

// export enum RPS {
//   MAIN = "Scissor",
//   TOP = "Rock",
//   DOWN = "Paper",
//   LEFT = "Scissor",
//   RIGHT = "Paper",
//   ODD = "Rock",
// }

export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export enum Sign {
  Scissor = "Scissor",
  Paper = "Paper",
  Rock = "Rock",
}

export const dirs: { pos: { x: number; y: number }; dir: Direction }[] = [
  { pos: { x: 1, y: 0 }, dir: Direction.RIGHT },
  { pos: { x: 0, y: 1 }, dir: Direction.DOWN },
  { pos: { x: -1, y: 0 }, dir: Direction.LEFT },
  { pos: { x: 0, y: -1 }, dir: Direction.UP },
];
