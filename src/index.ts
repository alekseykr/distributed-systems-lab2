interface IResult {
  min: number;
  max: number;
}

export const indexOfMaxAndMin = (input: Array<number>): IResult => {
  return {
    max: input.indexOf(Math.max(...input)),
    min: input.indexOf(Math.min(...input)),
  };
};

const input = [5, 1, 3, 6, 2, 7, 32];

const result = indexOfMaxAndMin(input);

console.log(result); // -> output: { max: 6, min: 1 }
