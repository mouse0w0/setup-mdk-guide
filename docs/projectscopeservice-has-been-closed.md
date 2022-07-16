---
article: false
---
# ProjectScopeService 已被关闭
配置开发环境时提示构建失败（`BUILD FAILED`），提示如下内容：
```log
java.lang.IllegalStateException: ProjectScopeService has been closed.
```

## 解决方案
先退出 Eclipse 或 IntelliJ IDEA 等软件；  
然后打开任务管理器，在「详细信息」选项卡中找到进程「java.exe」并结束任务

::: details 查看图片  
![](./projectscopeservice-has-been-closed/1.png)  
:::