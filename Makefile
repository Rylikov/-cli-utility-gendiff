install: 
		npm install
start: 
		npx babel-node -- src/bin/gendiff.js
publish:
		npm publish
lint:
		npx eslint .
test: 
		npm test
testwatch:
		npm run test:watch
testcoverage:
		npm run test:coverage