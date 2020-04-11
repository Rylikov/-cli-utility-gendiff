import _ from 'lodash';

const propertyAction = [
  {
    check: ((obj1, obj2, key) => _.isUndefined(obj2[key])),
    process: ((obj1, obj2, key) => ({
      key,
      type: 'deleted',
      oldValue: obj1[key],
    })),
  },
  {
    check: ((obj1, obj2, key) => _.isEqual(obj1[key], obj2[key])),
    process: ((obj1, obj2, key) => ({
      key,
      type: 'unchanged',
      oldValue: obj2[key],
    })),
  },
  {
    check: ((obj1, obj2, key) => _.isUndefined(obj1[key])),
    process: ((obj1, obj2, key) => ({
      key,
      type: 'added',
      newValue: obj2[key],
    })),
  },
  {
    check: ((obj1, obj2, key) => obj1[key] instanceof Object && obj2[key] instanceof Object),
    process: ((obj1, obj2, key, createChild) => ({
      key,
      type: 'nested',
      children: createChild(obj1[key], obj2[key]),
    })),
  },
  {
    check: ((obj1, obj2, key) => (
      _.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key])),
    process: ((obj1, obj2, key) => ({
      key,
      type: 'changed',
      oldValue: obj1[key],
      newValue: obj2[key],
    })),
  },
];

const getPropertyAction = (obj1, obj2, key) => (
  propertyAction.find(({ check }) => check(obj1, obj2, key)));

const createAst = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const ast = keys.map((key) => {
    const { process } = getPropertyAction(obj1, obj2, key);
    return process(obj1, obj2, key, createAst);
  });
  return ast;
};

export default createAst;
