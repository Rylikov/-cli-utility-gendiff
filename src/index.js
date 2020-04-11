import fs from 'fs';
import path from 'path';
import parse from './parsers';
import createAst from './createAst';
import render from './renderers';

const genDiff = (pathFile1, pathFile2, outputFormat = 'standard') => {
  const dataFile1 = fs.readFileSync(pathFile1, 'utf-8');
  const dataFile2 = fs.readFileSync(pathFile2, 'utf-8');

  const formatFile1 = path.extname(pathFile1).substr(1);
  const formatFile2 = path.extname(pathFile2).substr(1);

  const obj1 = parse(dataFile1, formatFile1);
  const obj2 = parse(dataFile2, formatFile2);

  const ast = createAst(obj1, obj2);

  const output = render(ast, outputFormat);

  return output;
};

export default genDiff;
