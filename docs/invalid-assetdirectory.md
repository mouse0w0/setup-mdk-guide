---
article: false
---
# 环境变量'assetDirectory'必须为有效路径
在IDE中运行客户端时，提示如下内容：
```log
Exception in thread "main" java.lang.IllegalArgumentException: Environment variable 'assetDirectory' must be set to a valid path.
	at net.minecraftforge.userdev.LaunchTesting.main(LaunchTesting.java:76)
```

::: details 查看图片
![](./invalid-assetdirectory/1.png)
:::

## 解决方案
请按照下表运行相应的生成运行配置任务（`genXxxxxRuns`），重新生成运行配置：

|集成开发环境（IDE）|运行任务|
|---|---|
|IntelliJ IDEA|`gradlew genIntelliJRuns`|
|Eclipse|`gradlew genEclipseRuns`|
|VSCode|`gradlew genVSCodeRuns`|