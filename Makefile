dependencies:
	npm install

build:
	npm run build
	hugo

run-server: build
	hugo serve
