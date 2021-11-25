// Just for study purpose
// We can use yargs instead of code below

export function getArgs(args) {
  const res = {};
  const [executer, file, ...rest] = args;

  rest.forEach((val, index, arr) => {
    if (val[0] === '-') {
      if (index === arr.length -1) {
        res[val.substring(1)] = true;
      } else if (arr[index + 1][0] !== '-') {
        res[val.substring(1)] = arr[index + 1];
      } else {
        res[val.substring(1)] = true;
      }
    }
  });

  return res;
}
