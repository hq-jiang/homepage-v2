set -e

parcel build index.html
echo "hanqiu-jiang.science" > dist/CNAME
git add -f dist && git commit -m "release: Release dist"
git push origin `git subtree split --prefix dist master`:gh-pages --force 