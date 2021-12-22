---
article: false
---
# 不支持 diamond 运算符
于旧版本运行`build`任务导出模组时，提示`错误：-source 1.6 中不支持 diamond 运算符`。

::: details 查看图片
![](./unsupported-diamond-operator/1.png)
:::

## 解决方案
在`build.gradle`文件内容末尾添加以下代码：
```groovy
sourceCompatibility = targetCompatibility = '1.8'
```

::: details 其他解决方案
在`build.gradle`文件内容末尾添加以下代码：
```groovy
compileJava {
    sourceCompatibility = targetCompatibility = '1.8'
}
```
:::
