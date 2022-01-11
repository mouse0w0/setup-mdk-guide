---
article: false
---
# 找不到命令 gradlew
在**PowerShell**运行`gradlew`命令时，提示`找不到命令 gradlew，但它确实存在于当前位置`。

::: details 查看图片
![](./not-found-command-gradlew/1.png)
:::

## 解决方案
将`gradlew`命令改为`.\gradlew`命令，例如：
```powershell
.\gradlew setupDecompWorkspace
```

::: details 其他解决方案
在当前目录下打开**CMD命令提示符**，并运行原命令。
```cmd
gradlew setupDecompWorkspace
```

[怎么在当前文件目录下打开CMD - 百度经验](https://jingyan.baidu.com/article/17bd8e5210b9fec4aa2bb875.html)
:::