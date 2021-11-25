#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import {printHelp} from './services/log.service.js';

function initCLI() {
  const args = getArgs(process.argv);

  if (args.c) {
    // save city
  }

  if (args.h) {
    printHelp();
  }

  if (args.t) {
    // save token
  }
  console.log(args);
}

initCLI();
