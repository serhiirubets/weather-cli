import chalk from 'chalk';
import dedent from 'dedent-js';

export function printError(err) {
  console.log(chalk.bgRed(' ERROR ') + ' ' + err);
}

export function printSuccess(msg) {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + msg);
}

export function printHelp() {
  console.log(
    dedent`
      ${chalk.bgBlackBright(' HELP ')} 
      Without params - showing weather
      -h for help
      -c [CITY] for city setup 
      -t [API_KEY] for token setup
    `
  )
}
