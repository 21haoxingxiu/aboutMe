
#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 部署到自定义域名，没有自定义域名可注释掉
# echo 'chanshiyu.com' > CNAME

git init
git add -A
git commit -m 'deploy:dev'
git push -u origin master -f 

cd -