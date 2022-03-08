---
article: false
---
# 编码GBK的不可映射字符
运行`build`任务导出模组时，于代码内容中的中文字符或中文注释处，提示`错误：编码GBK的不可映射字符`。

::: details 查看图片
![](./unmappable-character/1.png)
:::

## 解决方案
在`build.gradle`文件内容末尾添加以下代码：
```groovy
compileJava.options.encoding = 'UTF-8'
```

::: details 其他解决方案
在`build.gradle`文件内容末尾添加以下代码：
```groovy
tasks.withType(JavaCompile) {
    options.encoding = 'UTF-8'
}
```
:::

::: details 其他解决方案②
在`build.gradle`文件内容末尾添加以下代码：
```groovy
[compileJava, compileTestJava]*.options.encoding = 'UTF-8'
```
:::
