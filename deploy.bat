@echo off

@REM  Build the website using VuePress
@REM pnpm docs:build

@REM Clone the repository into a temporary directory
git clone --depth=1 https://gitee.com/WLei224/WLei224.git .deploy_git

@REM Copy the built website files to the temporary directory
xcopy /e src\.vuepress\dist\* .\.deploy_git\

@REM Commit and push the changes to the master branch
cd .deploy_git
git add .
git commit -m "Automated deployment"
git push origin master:gh-pages

@REM Clean up the temporary directory
cd ..
rmdir /s /q .deploy_git