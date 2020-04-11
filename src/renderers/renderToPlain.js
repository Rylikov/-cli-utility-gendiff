const stringify = (value) => {
  if (value instanceof Object) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const renderParent = parent => (parent ? `${parent}.` : '');

const propertyActions = {
  added: ((parent, type, key, oldValue, newValue) => `Property '${renderParent(parent)}${key}' was ${type} with value: ${stringify(newValue)}`),

  unchanged: () => null,

  deleted: ((parent, type, key) => `Property '${renderParent(parent)}${key}' was ${type}`),

  changed: ((parent, type, key, oldValue, newValue) => `Property '${renderParent(parent)}${key}' was ${type}. From ${stringify(oldValue)} to ${stringify(newValue)}`),

  nested: ((parent, type, key, oldValue, newValue, children, render) => `${render(children, `${renderParent(parent)}${key}`)}`),
};

const render = (ast, parent) => {
  const result = ast.map((obj) => {
    const {
      key,
      type,
      oldValue,
      newValue,
      children,
    } = obj;
    return propertyActions[type](parent, type, key, oldValue, newValue, children, render);
  });
  const output = result.filter(node => node).join('\n');
  return output;
};

export default ast => render(ast, '');
