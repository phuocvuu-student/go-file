<p align="center">
  <a href="https://github.com/songquanpeng/go-file"><img src="https://user-images.githubusercontent.com/39998050/108494937-1a573e80-72e3-11eb-81c3-5545d7c2ed6e.jpg" width="200" height="200" alt="go-file"></a>
</p>

<div align="center">

# Go File

_✨ ファイル共有ツール、単一の実行可能ファイル、すぐに使用可能、LAN内でのファイルとフォルダ共有に使用でき、ローカル帯域幅を最大限活用 ✨_  

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
  <a href="https://github.com/songquanpeng/go-file/projects/1">開発計画</a>
  ·
  <a href="https://github.com/songquanpeng/go-file/releases">ダウンロード</a>
  ·
  <a href="https://github.com/songquanpeng/gofile-launcher">ランチャーダウンロード</a>
  ·
  <a href="https://github.com/songquanpeng/gofile-cli">CLIダウンロード</a>
  ·
  <a href="https://iamazing.cn/page/LAN-SHARE-使用教程">チュートリアル</a>
  ·
  <a href="#demo">スクリーンショット</a>
</p>

<p align="center">
  <strong>言語:</strong>
  <a href="README.md">中文</a> |
  <a href="README.en.md">English</a> |
  <a href="README.vi.md">Tiếng Việt</a> |
  <a href="README.ja.md">日本語</a>
</p>

> **注意**: 公式の[Go File ランチャー](https://github.com/songquanpeng/gofile-launcher)の使用を推奨します。コマンドライン操作が不要になります。

## 機能
1. 環境設定不要、単一の実行可能ファイル、**ダブルクリックですぐに使用開始**。
2. ブラウザを自動で開き、ファイル共有を迅速に。
3. **QRコード**を提供し、モバイルでスキャンしてファイルをダウンロード、手動でのリンク入力が不要。
4. **ローカルフォルダ共有**をサポート。
5. モバイル対応。
6. 内蔵**画像ホスティング**、直接ペーストで画像アップロードをサポート、画像アップロードAPIを提供。
7. 内蔵**ビデオプレイヤー**ページ、他のデバイスでコンピュータのビデオを視聴可能、簡単にクロスデバイスオンラインビデオストリーミング。
8. **ドラッグアンドドロップアップロード、コピーアップロード**をサポート。
9. 異なるタイプのユーザーに対してファイルアクセス権限制限の設定を許可。
10. アクセス頻度制限。
11. Token API認証をサポート、他のシステムとの統合に便利。
12. コマンドラインに不慣れなユーザー向けに**ランチャー**を作成、[こちらを参照](https://github.com/songquanpeng/gofile-launcher)。
13. **PicGoをサポート**、`gofile`プラグインを検索してインストール、[こちらを参照](https://github.com/songquanpeng/picgo-plugin-gofile)。
14. 付属のCLIツール、コマンドラインファイルアップロードをサポート、P2Pモードファイル共有をサポート、[こちらを参照](https://github.com/songquanpeng/gofile-cli)。
15. Dockerワンクリックデプロイ: `docker run -d --restart always -p 3005:3005 -e TZ=Asia/Shanghai -v /home/ubuntu/data/go-file:/data justsong/go-file`

## 使用方法
> v0.3.3以前のバージョンの使用方法については、[こちらをクリック](https://github.com/songquanpeng/go-file/tree/52e8303e33e99bbcaf583d2d5a5bb0ec197bc676#使用方法)してください。

ダブルクリックするだけで使用可能、デフォルトポートは`3005`です。プログラムは初回起動時に管理者アカウントを自動作成します。ユーザー名は`admin`、パスワードは`123456`です。ログイン後、`管理` -> `アカウント管理`タブでユーザーパスワードを変更することを忘れないでください。

プログラムが自動的にブラウザを開きます。右上の`アップロード`ボタンをクリックしてファイルをアップロードします。ドラッグアンドドロップアップロードと複数ファイルの同時アップロードをサポートします。

**高度な使用法:**
1. ポートを変更するには、起動時に`port`パラメータを指定: `./go-file.exe --port 80`。
2. フォルダを共有するには、起動時に`path`パラメータを指定: `./go-file.exe --path ./this/is/a/path`、その後ナビゲーションバーの`ファイル`をクリック。
3. ローカルビデオリソースを共有するには、`video`パラメータを追加: `./go-file.exe --video ./this/is/a/path`、その後ナビゲーションバーの`ビデオ`をクリック。
4. アクセス頻度制御を有効にするには、起動前にRedis接続文字列環境変数`REDIS_CONN_STRING`を設定、例: `redis://default:redispw@localhost:49153`。
5. MySQLを使用するには、まずMySQLにログインして空のデータベース`gofile`を作成し、その後`SQL_DSN`環境変数を設定、例: `root:123456@tcp(localhost:3306)/gofile`。
6. デフォルトのSQLiteデータベースファイルの場所を変更するには、`SQLITE_PATH`環境変数を設定。デフォルトは作業ディレクトリ内の`go-file.db`です。
7. セッションシークレットを設定するには（デフォルトでランダム生成）、`SESSION_SECRET`環境変数を設定。
8. ファイルアップロードパスを設定するには（デフォルトは作業ディレクトリ下の`upload`ディレクトリ）、`UPLOAD_PATH`環境変数を設定。
9. 自動ブラウザ起動を無効にするには、起動時に`no-browser`パラメータを指定: `./go-file.exe --no-browser true`。
10. TokenでAPIにアクセスするには、まず個人アカウント管理ページでTokenを生成し、その後リクエストに`Authorization` HTTPヘッダーを追加、値は`YOUR_TOKEN`または`Bearer YOUR_TOKEN`。
    + 例えば、Typora Image Uploaderとして: [./script/typora.py](./script/typora.py)

**パラメータの追加方法がわからない場合:**
1. go-fileが配置されているフォルダを開く、
2. shiftを押しながら空白エリアを右クリック、
3. `PowerShellをここで開く`を選択（Windows 11の場合、まず`その他のオプションを表示`をクリックする必要があります）、
4. 開いたターミナルで入力: `./go-file --port 80 --video ./path/to/video`

[ランチャー](https://github.com/songquanpeng/gofile-launcher)を直接使用することを推奨します。

**Dockerを使用したデプロイ:**
実行: `docker run -d --restart always -p 3005:3005 -e TZ=Asia/Shanghai -v /home/ubuntu/data/go-file:/data justsong/go-file`

データはホストマシンの`/home/ubuntu/data/go-file`ディレクトリに保存されます。

**注意:**
1. ホストに複数のIPアドレスがある場合、hostパラメータを使用して他のデバイスからアクセス可能なIPアドレスを指定してください。例: `go-file.exe --host xxx.xxx.xxx.xxx`。そうしないとQRコードが正しく生成されません。
2. デフォルト設定では、ゲストはファイルのアップロードとダウンロードが可能です。`管理` -> `システム設定`で権限設定を変更できます。
3. パブリックネットワークにデプロイする場合は、すぐにデフォルトパスワードを変更することを忘れないでください！

## デモ
オンライン試用（ユーザー名は`admin`、パスワードは`123456`）: https://go-file.onrender.com

注意: 以下のスクリーンショットは時宜を得ずに更新されない可能性があります。
![index page](https://user-images.githubusercontent.com/39998050/178138784-2fc53a83-917d-4d2e-9aad-6c6c796bd9c8.png)
![file page](https://user-images.githubusercontent.com/39998050/178138792-1d9256f2-2ada-43c4-b646-28a93a919596.png)
![image page](https://user-images.githubusercontent.com/39998050/178138803-2a4da042-c29a-47c5-9e71-ebfac02cdf48.png)
![video page](https://user-images.githubusercontent.com/39998050/177032588-8946abde-a8da-45a2-a389-c16dba9cea34.png)
![setting page](https://user-images.githubusercontent.com/39998050/178138817-3f9caf95-ffc9-45fe-b2af-32c4a2e7b085.png)
![setting page 2](https://user-images.githubusercontent.com/39998050/178138833-d10e6f5a-aeea-4af3-8ae1-c0b3ab1d92f7.png)

[ランチャー](https://github.com/songquanpeng/gofile-launcher)スクリーンショット:

![launcher](https://raw.githubusercontent.com/songquanpeng/gofile-launcher/main/demo.png)

## その他
[Node.jsバージョンはこちら](https://github.com/songquanpeng/lan-share)
