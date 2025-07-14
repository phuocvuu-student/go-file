<p align="center">
  <a href="https://github.com/songquanpeng/go-file"><img src="https://user-images.githubusercontent.com/39998050/108494937-1a573e80-72e3-11eb-81c3-5545d7c2ed6e.jpg" width="200" height="200" alt="go-file"></a>
</p>

<div align="center">

# Go File

_✨ Công cụ chia sẻ tệp, chỉ một tệp thực thi duy nhất, sẵn sàng sử dụng ngay, có thể được sử dụng để chia sẻ tệp và thư mục trong mạng LAN, trực tiếp tối đa hóa băng thông cục bộ ✨_  

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
  <a href="https://github.com/songquanpeng/go-file/projects/1">Kế Hoạch Phát Triển</a>
  ·
  <a href="https://github.com/songquanpeng/go-file/releases">Tải Xuống</a>
  ·
  <a href="https://github.com/songquanpeng/gofile-launcher">Tải Launcher</a>
  ·
  <a href="https://github.com/songquanpeng/gofile-cli">Tải CLI</a>
  ·
  <a href="https://iamazing.cn/page/LAN-SHARE-使用教程">Hướng Dẫn</a>
  ·
  <a href="#demo">Ảnh Chụp Màn Hình</a>
</p>

<p align="center">
  <strong>Ngôn ngữ:</strong>
  <a href="README.md">中文</a> |
  <a href="README.en.md">English</a> |
  <a href="README.vi.md">Tiếng Việt</a> |
  <a href="README.ja.md">日本語</a>
</p>

> **Lưu ý**: Được khuyến nghị sử dụng [Go File Launcher](https://github.com/songquanpeng/gofile-launcher) chính thức, loại bỏ các thao tác dòng lệnh.

## Tính Năng
1. Không cần cấu hình môi trường, chỉ một tệp thực thi duy nhất, **chỉ cần nhấp đúp để bắt đầu sử dụng**.
2. Tự động mở trình duyệt, chia sẻ tệp nhanh chóng.
3. Cung cấp **mã QR** để quét trên thiết bị di động để tải xuống tệp, không cần nhập liên kết thủ công.
4. Hỗ trợ **chia sẻ thư mục cục bộ**.
5. Thích ứng với thiết bị di động.
6. Tích hợp **lưu trữ hình ảnh**, hỗ trợ dán trực tiếp để tải lên hình ảnh, cung cấp API tải lên hình ảnh.
7. Trang **phát video** tích hợp, có thể được sử dụng để xem video từ máy tính của bạn trên các thiết bị khác, dễ dàng phát trực tuyến video đa thiết bị.
8. Hỗ trợ **kéo thả tải lên, sao chép tải lên**.
9. Cho phép thiết lập hạn chế quyền truy cập tệp cho các loại người dùng khác nhau.
10. Giới hạn tốc độ truy cập.
11. Hỗ trợ xác thực Token API, thuận tiện cho việc tích hợp với các hệ thống khác.
12. Tạo **launcher** cho người dùng không quen với dòng lệnh, [xem tại đây](https://github.com/songquanpeng/gofile-launcher).
13. **Hỗ trợ PicGo**, tìm kiếm plugin `gofile` để cài đặt, [xem tại đây](https://github.com/songquanpeng/picgo-plugin-gofile).
14. Công cụ CLI đi kèm, hỗ trợ tải lên tệp qua dòng lệnh, hỗ trợ chia sẻ tệp chế độ P2P, [xem tại đây](https://github.com/songquanpeng/gofile-cli).
15. Triển khai Docker một cú nhấp: `docker run -d --restart always -p 3005:3005 -e TZ=Asia/Shanghai -v /home/ubuntu/data/go-file:/data justsong/go-file`

## Cách Sử Dụng
> Để sử dụng phiên bản v0.3.3 và các phiên bản trước đó, vui lòng [nhấp vào đây](https://github.com/songquanpeng/go-file/tree/52e8303e33e99bbcaf583d2d5a5bb0ec197bc676#使用方法).

Chỉ cần nhấp đúp để sử dụng, cổng mặc định là `3005`. Chương trình sẽ tự động tạo tài khoản quản trị viên khi khởi động lần đầu, tên người dùng là `admin`, mật khẩu là `123456`. Hãy nhớ vào `Quản Lý` -> tab `Quản Lý Tài Khoản` để thay đổi mật khẩu người dùng sau khi đăng nhập.

Chương trình sẽ tự động mở trình duyệt cho bạn. Nhấp vào nút `Tải Lên` ở góc trên bên phải để tải lên tệp. Hỗ trợ kéo thả tải lên và tải lên đồng thời nhiều tệp.

**Sử Dụng Nâng Cao:**
1. Để sửa đổi cổng, chỉ định tham số `port` khi khởi động: `./go-file.exe --port 80`.
2. Để chia sẻ thư mục, chỉ định tham số `path` khi khởi động: `./go-file.exe --path ./this/is/a/path`, sau đó nhấp vào `Tệp` trong thanh điều hướng.
3. Để chia sẻ tài nguyên video cục bộ, thêm tham số `video`: `./go-file.exe --video ./this/is/a/path`, sau đó nhấp vào `Video` trong thanh điều hướng.
4. Để bật kiểm soát tốc độ truy cập, đặt biến môi trường chuỗi kết nối Redis `REDIS_CONN_STRING` trước khi khởi động, ví dụ: `redis://default:redispw@localhost:49153`.
5. Để sử dụng MySQL, trước tiên đăng nhập vào MySQL để tạo cơ sở dữ liệu trống `gofile`, sau đó đặt biến môi trường `SQL_DSN`, ví dụ: `root:123456@tcp(localhost:3306)/gofile`.
6. Để sửa đổi vị trí tệp cơ sở dữ liệu SQLite mặc định, đặt biến môi trường `SQLITE_PATH`. Mặc định là trong thư mục làm việc, tên là `go-file.db`.
7. Để đặt khóa phiên (được tạo ngẫu nhiên theo mặc định), đặt biến môi trường `SESSION_SECRET`.
8. Để đặt đường dẫn tải lên tệp (mặc định là thư mục `upload` dưới thư mục làm việc), đặt biến môi trường `UPLOAD_PATH`.
9. Để tắt việc mở trình duyệt tự động, chỉ định tham số `no-browser` khi khởi động: `./go-file.exe --no-browser true`.
10. Để sử dụng Token để truy cập API, trước tiên hãy vào trang quản lý tài khoản cá nhân để tạo Token, sau đó thêm header HTTP `Authorization` trong các yêu cầu, giá trị là `YOUR_TOKEN` hoặc `Bearer YOUR_TOKEN`.
    + Ví dụ, làm Typora Image Uploader: [./script/typora.py](./script/typora.py)

**Nếu bạn không biết cách thêm tham số:**
1. Mở thư mục nơi go-file được đặt,
2. Giữ shift và nhấp chuột phải vào vùng trống,
3. Chọn `Mở PowerShell tại đây` (đối với Windows 11, bạn cần nhấp vào `Hiển thị thêm tùy chọn` trước),
4. Nhập vào terminal đã mở: `./go-file --port 80 --video ./path/to/video`

Được khuyến nghị sử dụng [launcher](https://github.com/songquanpeng/gofile-launcher) trực tiếp.

**Triển khai bằng Docker:**
Thực thi: `docker run -d --restart always -p 3005:3005 -e TZ=Asia/Shanghai -v /home/ubuntu/data/go-file:/data justsong/go-file`

Dữ liệu sẽ được lưu trong thư mục `/home/ubuntu/data/go-file` trên máy chủ.

**Lưu Ý:**
1. Nếu máy chủ có nhiều địa chỉ IP, hãy sử dụng tham số host để chỉ định địa chỉ IP có thể truy cập được bởi các thiết bị khác, chẳng hạn như: `go-file.exe --host xxx.xxx.xxx.xxx`, nếu không mã QR sẽ được tạo sai.
2. Theo cấu hình mặc định, khách có thể tải lên và tải xuống tệp. Bạn có thể sửa đổi cấu hình quyền trong `Quản Lý` -> `Cài Đặt Hệ Thống`.
3. Nếu triển khai trên mạng công cộng, hãy nhớ thay đổi mật khẩu mặc định ngay lập tức!

## Demo
Dùng thử trực tuyến (tên người dùng là `admin`, mật khẩu là `123456`): https://go-file.onrender.com

Lưu ý: Các ảnh chụp màn hình sau đây có thể không được cập nhật kịp thời.
![index page](https://user-images.githubusercontent.com/39998050/178138784-2fc53a83-917d-4d2e-9aad-6c6c796bd9c8.png)
![file page](https://user-images.githubusercontent.com/39998050/178138792-1d9256f2-2ada-43c4-b646-28a93a919596.png)
![image page](https://user-images.githubusercontent.com/39998050/178138803-2a4da042-c29a-47c5-9e71-ebfac02cdf48.png)
![video page](https://user-images.githubusercontent.com/39998050/177032588-8946abde-a8da-45a2-a389-c16dba9cea34.png)
![setting page](https://user-images.githubusercontent.com/39998050/178138817-3f9caf95-ffc9-45fe-b2af-32c4a2e7b085.png)
![setting page 2](https://user-images.githubusercontent.com/39998050/178138833-d10e6f5a-aeea-4af3-8ae1-c0b3ab1d92f7.png)

Ảnh chụp màn hình [Launcher](https://github.com/songquanpeng/gofile-launcher):

![launcher](https://raw.githubusercontent.com/songquanpeng/gofile-launcher/main/demo.png)

## Khác
[Phiên bản Node.js tại đây](https://github.com/songquanpeng/lan-share)
