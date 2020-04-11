import fs from 'fs';
import genDiff from '../src';

const formatsFile = [
  ['simple', 'standard', 'json'],
  ['simple', 'standard', 'yaml'],
  ['simple', 'standard', 'ini'],
  ['simple', 'plain', 'json'],
  ['simple', 'plain', 'yaml'],
  ['simple', 'plain', 'ini'],
  ['simple', 'json', 'json'],
  ['simple', 'json', 'yaml'],
  ['simple', 'json', 'ini'],
  ['nested', 'standard', 'json'],
  ['nested', 'standard', 'yaml'],
  ['nested', 'standard', 'ini'],
  ['nested', 'plain', 'json'],
  ['nested', 'plain', 'yaml'],
  ['nested', 'plain', 'json'],
  ['nested', 'json', 'json'],
  ['nested', 'json', 'yaml'],
  ['nested', 'json', 'ini'],
];

test.each(formatsFile)('%s diff from %s to %s', (folder, outputFormat, format) => {
  const before = `__tests__/__fixtures__/__${folder}__/before.${format}`;
  const after = `__tests__/__fixtures__/__${folder}__/after.${format}`;
  const result = fs.readFileSync(`__tests__/__fixtures__/__${folder}__/${outputFormat}.txt`, 'utf-8');
  expect(genDiff(before, after, `${outputFormat}`)).toBe(result);
});
