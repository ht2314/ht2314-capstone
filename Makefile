install:
	npm install

test:
	npm run test

lint:
	npm run lint

all: install test lint
