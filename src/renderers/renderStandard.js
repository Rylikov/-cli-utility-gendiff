import _ from 'lodash';

const indentSize = depth => ' '.repeat(depth * 2);

const stringify = (value, depth) => {
  if (!(value instanceof Object)) {
    return value;
  }
  const result = _.keys(value).map(key => `${indentSize(depth + 2)}${key}: ${value[key]}`);
  return ['{', ...result, `${indentSize(depth)}}`].join('\n');
};

const propertyActions = {
  added: ((depth, key, oldValue, newValue) => `${indentSize(depth + 1)}+ ${key}: ${stringify(newValue, depth + 2)}`),

  unchanged: ((depth, key, oldValue) => `${indentSize(depth + 1)}  ${key}: ${stringify(oldValue, depth + 2)}`),

  deleted: ((depth, key, oldValue) => `${indentSize(depth + 1)}- ${key}: ${stringify(oldValue, depth + 2)}`),

  changed: ((depth, key, oldValue, newValue) => `${indentSize(depth + 1)}- ${key}: ${stringify(oldValue, depth + 2)}
${indentSize(depth + 1)}+ ${key}: ${stringify(newValue, depth + 2)}`),

  nested: ((depth, key, oldValue, newValue, children, render) => `${indentSize(depth + 2)}${key}: {\n${render(children, depth + 2)}\n${indentSize(depth + 2)}}`),
};

const render = (ast, depth = 0) => {
  const result = ast.map((obj) => {
    const {
      key,
      type,
      oldValue,
      newValue,
      children,
    } = obj;

    return propertyActions[type](depth, key, oldValue, newValue, children, render);
  });
  const output = _.flatten(result).join('\n');
  return output;
};

export default ast => `{\n${render(ast, 0)}\n}`;
