import standard from './renderStandard';
import plain from './renderToPlain';
import json from './renderToJson';

const outputFormats = {
  standard,
  plain,
  json,
};

export default (ast, format) => outputFormats[format](ast);
