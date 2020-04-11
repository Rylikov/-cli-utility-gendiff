#!/usr/bin/env node

import program from 'commander';
import { version } from '../../package.json';
import genDiff from '..';

program
  .version(version)
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output formats: standard, plain, json')
  .action((firstConfig, secondConfig) => (
    console.log(genDiff(firstConfig, secondConfig, program.format))
  ))
  .parse(process.argv);
