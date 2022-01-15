---
article: false
---
# PKIX 路径构建失败
运行`setupDecompWorkspace`任务时，提示`BUILD FAILED`构建失败。进一步查看`What went wrong`（出了什么问题）下的内容，提示如下内容：
```
* What went wrong:
A problem occurred configuring root project 'example'.
> Could not resolve all dependencies for configuration ':classpath'.
   > Could not resolve net.minecraftforge.gradle:ForgeGradle:2.3-SNAPSHOT.
     Required by:
         :example:unspecified
      > Could not resolve net.minecraftforge.gradle:ForgeGradle:2.3-SNAPSHOT.
         > Unable to load Maven meta-data from https://files.minecraftforge.net/maven/net/minecraftforge/gradle/ForgeGradle/2.3-SNAPSHOT/maven-metadata.xml.
            > Could not GET 'https://files.minecraftforge.net/maven/net/minecraftforge/gradle/ForgeGradle/2.3-SNAPSHOT/maven-metadata.xml'.
               > sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```

::: details 查看图片
![](./pkix-path-building-failed/1.png)
:::

## 解决方案
Java（JRE/JDK）的版本过低，升级Java版本到对应版本的最新版本，安装后可卸载对应版本的旧版本。

JDK 下载：
- [Oracle JDK](https://www.oracle.com/java/technologies/java-se-glance.html)：官方的 JDK 下载，下载需登录，商业使用受限
- [Adoptium（原AdoptOpenJDK）](https://adoptium.net/)：广为人知的预建 OpenJDK
- [Red Hat OpenJDK](https://developers.redhat.com/products/openjdk/download)：红帽提供的预建 OpenJDK
- [BellSoft Liberica JDK](https://bell-sw.com/pages/downloads/)：带有 JavaFX 的完整 OpenJDK