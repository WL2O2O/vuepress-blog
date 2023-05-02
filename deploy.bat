@echo off
git add .
git commit -m "update redis"
git pull origin master
git push origin master

REM Build the website using VuePress
@REM pnpm docs:build

@REM REM Clone the repository into a temporary directory
@REM git clone --depth=1 https://gitee.com/WLei224/WLei224.git .deploy_git

@REM REM Copy the built website files to the temporary directory
@REM xcopy /e src\.vuepress\dist\* .\.deploy_git\

REM Pull changes from the remote repository
@REM cd .deploy_git
@REM git pull origin master

REM Commit and push the changes to the master branch
@REM git add .
@REM git commit -m "Automated deployment"
@REM git push origin master
@REM REM Clean up the temporary directory
@REM cd ..
@REM rmdir /s /q .deploy_git