@echo off

E:

cd E:\CS_GUIDER\docs

echo "开始执行部署脚本"

git add .
git commit -m "auto deploy daily"
git pull origin master
git push origin master
git pull github master
git push github master