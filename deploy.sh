set -e

npm run build
git add -f dist && git commit -m "release: Release dist"
git push origin `git subtree split --prefix dist master`:gh-pages --force