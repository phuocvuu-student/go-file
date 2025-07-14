<p align="center">
  <a href="https://github.com/songquanpeng/go-file"><img src="https://user-images.githubusercontent.com/39998050/108494937-1a573e80-72e3-11eb-81c3-5545d7c2ed6e.jpg" width="200" height="200" alt="go-file"></a>
</p>

<div align="center">

# Go File

_✨ File sharing tool, single executable file, ready to use out of the box, can be used for file and folder sharing within LAN, directly maxing out local bandwidth ✨_  

</div>

<p align="center">
  <a href="https://raw.githubusercontent.com/songquanpeng/go-file/master/LICENSE">
    <img src="https://img.shields.io/github/license/songquanpeng/go-file?color=brightgreen" alt="license">
  </a>
  <a href="https://github.com/songquanpeng/go-file/releases/latest">
    <img src="https://img.shields.io/github/v/release/songquanpeng/go-file?color=brightgreen&include_prereleases" alt="release">
  </a>
  <a href="https://github.com/songquanpeng/go-file/releases/latest">
    <img src="https://img.shields.io/github/downloads/songquanpeng/go-file/total?color=brightgreen&include_prereleases" alt="release">
  </a>
  <a href="https://hub.docker.com/repository/docker/justsong/go-file">
    <img src="https://img.shields.io/docker/pulls/justsong/go-file?color=brightgreen" alt="docker pull">
  </a>
  <a href="https://goreportcard.com/report/github.com/songquanpeng/go-file">
  <img src="https://goreportcard.com/badge/github.com/songquanpeng/go-file" alt="GoReportCard">
  </a>
</p>

<p align="center">
  <a href="https://github.com/songquanpeng/go-file/projects/1">Development Plan</a>
  ·
  <a href="https://github.com/songquanpeng/go-file/releases">Download</a>
  ·
  <a href="https://github.com/songquanpeng/gofile-launcher">Launcher Download</a>
  ·
  <a href="https://github.com/songquanpeng/gofile-cli">CLI Download</a>
  ·
  <a href="https://iamazing.cn/page/LAN-SHARE-使用教程">Tutorial</a>
  ·
  <a href="#demo">Screenshots</a>
</p>

<p align="center">
  <strong>Languages:</strong>
  <a href="README.md">中文</a> |
  <a href="README.en.md">English</a> |
  <a href="README.vi.md">Tiếng Việt</a> |
  <a href="README.ja.md">日本語</a>
</p>

> **Note**: It is recommended to use the official [Go File Launcher](https://github.com/songquanpeng/gofile-launcher), eliminating command line operations.

## Features
1. No environment configuration required, single executable file, **just double-click to start using**.
2. Automatically opens browser, file sharing made easy.
3. Provides **QR code** for mobile scanning to download files, no more manual link input.
4. Supports **sharing local folders**.
5. Mobile responsive.
6. Built-in **image hosting**, supports direct paste upload images, provides image upload API.
7. Built-in **video player** page, can be used to watch videos from your computer on other devices, easily cross-device online video streaming.
8. Supports **drag and drop upload, copy upload**.
9. Allows setting file access permission restrictions for different types of users.
10. Access rate limiting.
11. Supports Token API authentication, convenient for integration with other systems.
12. Created a **launcher** for users unfamiliar with command line, [see here](https://github.com/songquanpeng/gofile-launcher).
13. **Supports PicGo**, search `gofile` plugin to install, [see here](https://github.com/songquanpeng/picgo-plugin-gofile).
14. Accompanying CLI tool, supports command line file upload, supports P2P mode file sharing, [see here](https://github.com/songquanpeng/gofile-cli).
15. Docker one-click deployment: `docker run -d --restart always -p 3000:3000 -e TZ=Asia/Shanghai -v /home/ubuntu/data/go-file:/data justsong/go-file`

## Usage
> For usage of v0.3.3 and earlier versions, please [click here](https://github.com/songquanpeng/go-file/tree/52e8303e33e99bbcaf583d2d5a5bb0ec197bc676#使用方法).

Just double-click to use, default port is `3000`. The program will automatically create an administrator account on first startup, username is `admin`, password is `123456`. Remember to go to `Management` -> `Account Management` tab to change your user password after logging in.

The program will automatically open the browser for you. Click the `Upload` button in the upper right corner to upload files. Supports drag and drop upload and simultaneous upload of multiple files.

**Advanced Usage:**
1. To modify the port, specify the `port` parameter when starting: `./go-file.exe --port 80`.
2. To share folders, specify the `path` parameter when starting: `./go-file.exe --path ./this/is/a/path`, then click `Files` in the navigation bar.
3. To share local video resources, add `video` parameter: `./go-file.exe --video ./this/is/a/path`, then click `Videos` in the navigation bar.
4. To enable access rate control, set the Redis connection string environment variable `REDIS_CONN_STRING` before starting, for example: `redis://default:redispw@localhost:49153`.
5. To use MySQL, first log into MySQL to create an empty database `gofile`, then set the `SQL_DSN` environment variable, for example: `root:123456@tcp(localhost:3306)/gofile`.
6. To modify the default SQLite database file location, set the `SQLITE_PATH` environment variable. Default is in the working directory, named `go-file.db`.
7. To set session secret (randomly generated by default), set the `SESSION_SECRET` environment variable.
8. To set file upload path (default is `upload` directory under working directory), set the `UPLOAD_PATH` environment variable.
9. To disable automatic browser opening, specify the `no-browser` parameter when starting: `./go-file.exe --no-browser true`.
10. To use Token to access API, first go to personal account management page to generate Token, then add `Authorization` HTTP header in requests, value is `YOUR_TOKEN` or `Bearer YOUR_TOKEN`.
    + For example, as Typora Image Uploader: [./script/typora.py](./script/typora.py)

**If you don't know how to add parameters:**
1. Open the folder where go-file is located,
2. Hold shift and right-click on empty area,
3. Select `Open PowerShell here` (for Windows 11, you need to click `Show more options` first),
4. Enter in the opened terminal: `./go-file --port 80 --video ./path/to/video`

It is recommended to use the [launcher](https://github.com/songquanpeng/gofile-launcher) directly.

**Deploy using Docker:**
Execute: `docker run -d --restart always -p 3000:3000 -e TZ=Asia/Shanghai -v /home/ubuntu/data/go-file:/data justsong/go-file`

Data will be saved in the `/home/ubuntu/data/go-file` directory on the host machine.

**Notes:**
1. If the host has multiple IP addresses, use the host parameter to specify an IP address accessible by other devices, such as: `go-file.exe --host xxx.xxx.xxx.xxx`, otherwise the QR code will be generated incorrectly.
2. By default configuration, guests can upload and download files. You can modify permission configuration in `Management` -> `System Settings`.
3. If deploying on public network, remember to change the default password immediately!

## Demo
Online trial (username is `admin`, password is `123456`): https://go-file.onrender.com

Note: The following screenshots may not be updated in time.
![index page](https://user-images.githubusercontent.com/39998050/178138784-2fc53a83-917d-4d2e-9aad-6c6c796bd9c8.png)
![file page](https://user-images.githubusercontent.com/39998050/178138792-1d9256f2-2ada-43c4-b646-28a93a919596.png)
![image page](https://user-images.githubusercontent.com/39998050/178138803-2a4da042-c29a-47c5-9e71-ebfac02cdf48.png)
![video page](https://user-images.githubusercontent.com/39998050/177032588-8946abde-a8da-45a2-a389-c16dba9cea34.png)
![setting page](https://user-images.githubusercontent.com/39998050/178138817-3f9caf95-ffc9-45fe-b2af-32c4a2e7b085.png)
![setting page 2](https://user-images.githubusercontent.com/39998050/178138833-d10e6f5a-aeea-4af3-8ae1-c0b3ab1d92f7.png)

[Launcher](https://github.com/songquanpeng/gofile-launcher) screenshot:

![launcher](https://raw.githubusercontent.com/songquanpeng/gofile-launcher/main/demo.png)

## Others
[Node.js version here](https://github.com/songquanpeng/lan-share)
