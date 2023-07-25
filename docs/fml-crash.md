---
article: false
---
# 运行游戏时FML导致崩溃
于ForgeGradle 3.+版本（Forge 1.12.2-14.23.5.2854及以上版本）运行游戏时崩溃，日志提示：`Caught exception from Forge Mod Loader (FML)`。

::: details 详细崩溃报告
```
net.minecraftforge.fml.common.LoaderExceptionModCrash: Caught exception from Forge Mod Loader (FML)
Caused by: java.lang.NullPointerException
	at net.minecraftforge.fml.common.network.NetworkRegistry.newChannel(NetworkRegistry.java:207)
	at net.minecraftforge.fml.common.network.internal.FMLNetworkHandler.registerChannel(FMLNetworkHandler.java:185)
	at net.minecraftforge.fml.common.FMLContainer.modConstruction(FMLContainer.java:92)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.google.common.eventbus.Subscriber.invokeSubscriberMethod(Subscriber.java:91)
	at com.google.common.eventbus.Subscriber$SynchronizedSubscriber.invokeSubscriberMethod(Subscriber.java:150)
	at com.google.common.eventbus.Subscriber$1.run(Subscriber.java:76)
	at com.google.common.util.concurrent.MoreExecutors$DirectExecutor.execute(MoreExecutors.java:399)
	at com.google.common.eventbus.Subscriber.dispatchEvent(Subscriber.java:71)
	at com.google.common.eventbus.Dispatcher$PerThreadQueuedDispatcher.dispatch(Dispatcher.java:116)
	at com.google.common.eventbus.EventBus.post(EventBus.java:217)
	at net.minecraftforge.fml.common.LoadController.sendEventToModContainer(LoadController.java:219)
	at net.minecraftforge.fml.common.LoadController.propogateStateMessage(LoadController.java:197)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.google.common.eventbus.Subscriber.invokeSubscriberMethod(Subscriber.java:91)
	at com.google.common.eventbus.Subscriber$SynchronizedSubscriber.invokeSubscriberMethod(Subscriber.java:150)
	at com.google.common.eventbus.Subscriber$1.run(Subscriber.java:76)
	at com.google.common.util.concurrent.MoreExecutors$DirectExecutor.execute(MoreExecutors.java:399)
	at com.google.common.eventbus.Subscriber.dispatchEvent(Subscriber.java:71)
	at com.google.common.eventbus.Dispatcher$PerThreadQueuedDispatcher.dispatch(Dispatcher.java:116)
	at com.google.common.eventbus.EventBus.post(EventBus.java:217)
	at net.minecraftforge.fml.common.LoadController.distributeStateMessage(LoadController.java:136)
	at net.minecraftforge.fml.common.Loader.loadMods(Loader.java:595)
	at net.minecraftforge.fml.client.FMLClientHandler.beginMinecraftLoading(FMLClientHandler.java:232)
	at net.minecraft.client.Minecraft.init(Minecraft.java:467)
	at net.minecraft.client.Minecraft.run(Minecraft.java:378)
	at net.minecraft.client.main.Main.main(SourceFile:123)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at net.minecraft.launchwrapper.Launch.launch(Launch.java:135)
	at net.minecraft.launchwrapper.Launch.main(Launch.java:28)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at net.minecraftforge.legacydev.Main.start(Main.java:86)
	at net.minecraftforge.legacydev.MainClient.main(MainClient.java:29)
```
:::

## 解决方案
在`build.gradle`文件的`dependencies`块中添加以下代码：
```groovy
dependencies {
    // 添加以下代码强制使用旧版本mergetool
    implementation ("net.minecraftforge:mergetool:0.2.3.3") { force = true }

    // 其它依赖...
}
```

## 参考资料
- [Minecraft Forge Mod Loader (FML) Loading and crashing MC](https://stackoverflow.com/questions/68377027/minecraft-forge-mod-loader-fml-loading-and-crashing-mc)