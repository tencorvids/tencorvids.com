default:
    @just --list

install:
    npm install

dev:
    npm run dev

build:
    npm run build

preview:
    npm run build && npm run preview

clean:
    rm -rf dist node_modules

update:
    npm update
