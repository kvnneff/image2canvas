D = ./node_modules/.bin/duo
T = ./node_modules/.bin/duo-test
TESTS = $(wildcard test/*.js)
SRC = $(wildcard index.js)

build.js: node_modules
	@$(D) index.js > build/build.js

build/tests.js:
	@$(D) --development test/index.js > build/tests.js

test: node_modules build/tests.js
	@$(T) -c 'make build/tests.js' --build build/tests.js --reporter spec -P 9000 browser

node_modules:
	npm install

clean:
	rm -fr build components node_modules

.PHONY: clean test test-browser build.js build/tests.js
