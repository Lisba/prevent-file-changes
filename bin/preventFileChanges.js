#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { preventFileChanges } from '../src/index.js';

const argv = yargs(hideBin(process.argv))
  .option('filesPaths', {
    alias: 'f',
    type: 'array',
    description: `List file's paths to protect`,
    demandOption: false,
  })
  .option('filesPatterns', {
    alias: 'p',
    type: 'array',
    description: `List of regex patterns of file's names to protect`,
    demandOption: false,
  })
  .help().argv;

preventFileChanges({
  files: argv.filesPaths,
  patterns: argv.filesPatterns,
});
