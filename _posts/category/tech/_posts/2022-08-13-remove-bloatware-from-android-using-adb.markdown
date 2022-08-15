---
layout: post
title: "Remove Bloatware from Android usign ADB"
date: 2022-08-13 12:00:00 +0530
author: Baiju Dodhia
category: technology
tags: android adb bloatware
excerpt: A guide to removing bloatware from android devices with android debug bridge (adb) command-line tool and no-root required.
---

![Wallpaper](https://source.unsplash.com/1600x600/?apps,bloatware)

## Requirements

1. Android Platform Tools for Windows.
2. Developer Options and USB Debugging Enabled in Android Smartphone.

## Steps

1. Connect Android Smartphone to Windows PC/Laptop.
2. Open Command Line/Powershell and change directory to Android Platform Tools folder.

## Commands

{% highlight bash linenos %}

adb start-server # Start the server
adb devices # Check for connected devices
adb shell # Enter Shell
pm list packages # List installed packages on connected device
pm list users # List profile currently on connected device [Primary User=0, Work Profile User=11]
pm uninstall --user 0 com.package.name # Uninstall package for User 0
pm disable-user --user 0 com.package.name # Disable package for User 0
pm enable com.package.name # Enable disabled package

{% endhighlight %}

## References

1. [Android SDK Platform Tools](https://technastic.com/android-sdk-platform-tools-download/)
2. [ADB Shell Commands](https://adbshell.com/)
3. [Reinstall an accidently uninstalled package](https://android.stackexchange.com/questions/215313/how-to-reinstall-an-accidentally-uninstalled-app-through-adb/236011#236011)
4. [Bloatware list for MIUI](https://devcondition.com/article/removing-unneeded-miui-applications/)
5. [ADB Commands Cheatsheet](https://technastic.com/adb-commands-list-adb-cheat-sheet/)