#!/bin/bash -e

rm -fr public
git worktree add -B gh-pages public origin/gh-pages

make dependencies
make build

git -C public add --all
git config user.email "tech@ulule.com"
git config user.name "Tech @ Ulule"
git -C public commit -m "Publishing to gh-pages" || exit 0
git push origin gh-pages
