@echo off

E:

cd E:\CS_GUIDER\docs

echo "start autoDeploy.bat"

git add .
git commit -m "auto deploy daily"
git pull gitee master
git push gitee master
git pull github master
git push github master
