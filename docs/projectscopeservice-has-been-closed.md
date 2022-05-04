---
article: false
---
# ProjectScopeService 已被关闭
配置开发环境时提示构建失败（`BUILD FAILED`），提示如下内容：
```log
java.lang.IllegalStateException: ProjectScopeService has been closed.
```

## 解决方案
在当前目录下打开**CMD命令提示符**，并运行如下命令：
```cmd
gradlew --stop
```