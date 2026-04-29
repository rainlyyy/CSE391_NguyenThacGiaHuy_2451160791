## PHẦN A: KIẾN THỨC CƠ BẢN VỀ TRÌNH DUYỆT VÀ HTML5

### Câu A1: Quy trình tải trang web và Tab Network
> tài liệu tham chiếu: `tuan_1_html5/01_introduction_html_universe.md`
Khi truy cập một trang web (ví dụ: `https://shopee.vn`), trình duyệt thực hiện theo thứ tự 7 bước sau:
1.  **DNS lookup**: Tìm địa chỉ IP của tên miền.
2.  **TCP handshake**: Thiết lập kết nối giữa máy tính và server.
3.  **TLS handshake**: Thiết lập kết nối bảo mật.
4.  **HTTP request**: Trình duyệt gửi yêu cầu dữ liệu đi.
5.  **Server trả Response**: Máy chủ phản hồi và gửi dữ liệu về.
6.  **Parse HTML -> DOM/CSSOM**: Trình duyệt phân tích cấu trúc HTML và CSS.
7.  **Render layout**: Hiển thị giao diện hoàn chỉnh lên màn hình.

Ý 2 Tab **Network** trong DevTools là nơi cung cấp thông tin chi tiết của tất cả các HTTP request diễn ra trong quá trình này.
![Mô tả Tab Network](./screenshots/anhA1.PNG)

---

### Câu A2: Tối ưu SEO bằng Semantic HTML
> tài liệu tham chiếu: `tuan_1_html5/04_semantic_html.md`
Việc không sử dụng thẻ Semantic khiến Google đánh giá SEO thấp vì bot khó hiểu được cấu trúc trang. Dưới đây là 4 lỗi phổ biến và cách sửa:

| Lỗi sai (Sử dụng thẻ Div) | Fix lỗi (Sử dụng thẻ Semantic) | Ý nghĩa việc sửa đổi |
| :--- | :--- | :--- |
| `<div class="header">` | `<header>` | Giúp Google nhận diện đây là phần đầu trang. |
| `<div class="logo">` | `<h1>` | Cung cấp heading chính, xác định cấu trúc nội dung. |
| `<div class="menu">` | `<nav><ul><li><a>` | Giúp Screen reader đọc được đây là phần điều hướng. |
| `<div class="main">` | `<main>` | Xác định rõ ràng khu vực chứa nội dung chính của trang. |

---

### Câu A3: Phân biệt Block Element và Inline Element
> tài liệu tham chiếu: ` `
Dựa trên cấu trúc hiển thị của các thẻ phổ biến:

*   **`<div>` (Block element)**: Luôn bắt đầu trên một dòng mới và chiếm toàn bộ chiều rộng có sẵn. Các phần tử khác không thể nằm cùng dòng với nó.
*   **`<span>` (Inline element)**: Chỉ chiếm đúng phần diện tích của nội dung text, nằm cạnh nhau trên cùng một dòng và không tạo ra ngắt dòng.
*   **`<strong>` (Inline element)**: Có tính chất tương tự thẻ `<span>` nhưng định dạng kiểu chữ đậm (Bold) cho văn bản.

---

### Câu A4: Cấu trúc Table và lý do không dùng Table để dàn trang (Layout)
> tài liệu tham chiếu: `tuan_1_html5/05_tables_hyperlinks.md`
#### 1. Các thẻ thành phần trong Table
*   **`<thead>`**: Chứa hàng tiêu đề cột, giúp xác định ý nghĩa từng cột.
*   **`<tbody>`**: Chứa dữ liệu chính của bảng (có thể có nhiều thẻ `<tbody>`).
*   **`<tfoot>`**: Dùng cho phần tổng kết, thống kê hoặc ghi chú cuối bảng.

#### 2. Tại sao không dùng Table để tạo Layout trang web?
*   **Khả năng phản hồi kém**: Bố cục bảng rất cứng nhắc, gây khó khăn khi thiết kế giao diện linh hoạt (Responsive) bằng CSS.
*   **Bảo trì kém**: Cấu trúc bảng lồng nhau làm mã nguồn cồng kềnh, dễ vỡ bố cục khi thay đổi số lượng cột và làm chậm tốc độ tải trang.
*   **SEO & Accessibility kém**: Screen reader đọc bảng theo thứ tự hàng-cột khiến nội dung bị đọc sai logic nếu dùng để dàn trang.

## PHẦN B: THỰC HÀNH VÀ DEBUG

### Bài B3: Phân tích và Sửa lỗi HTML



#### Các lỗi trong sourcecode

*   **Lỗi 1 (Dòng 1):** Khai báo `<!DOCTYPE>` thiếu `html`.
    *   **Sửa:** `<!DOCTYPE html>`
*   **Lỗi 2 (Dòng 2):** Thẻ `<html>` thiếu thuộc tính ngôn ngữ `lang`.
    *   **Sửa:** `<html lang="vi">`
*   **Lỗi 3 (Dòng 4):** Thẻ `<title>` mở nhưng không có thẻ đóng.
    *   **Sửa:** Bổ sung thẻ đóng `</title>`
*   **Lỗi 4 (Dòng 5):** Thẻ `<charset = "utf8">` sai cú pháp và thiếu thẻ meta.
    *   **Sửa:** `<meta charset="UTF-8">`
*   **Lỗi 5 (Dòng 8):** Thẻ `<h1>` đóng sai cú pháp (thiếu dấu `/`).
    *   **Sửa:** Sửa thành `</h1>`
*   **Lỗi 6 (Dòng 11):** Thuộc tính `href` thiếu dấu `/` và viết sai cấu trúc thẻ.
    *   **Sửa:** `<a href="/home">`
*   **Lỗi 7 (Dòng 11):** Thẻ `<a>` sử dụng thẻ đóng sai.
    *   **Sửa:** Sửa thành `</a>`
*   **Lỗi 8 (Dòng 20):** Thẻ `<img>` thiếu dấu nháy cho `src` và thiếu thuộc tính `alt`.
    *   **Sửa:** `<img src="iphone.jpg" alt="iPhone 15 Pro Max">`
*   **Lỗi 9 (Dòng 22):** Các thẻ `<p>` và `<b>` lồng nhau sai thứ tự đóng.
    *   **Sửa:** `<p>Giá: <b>25.990.000đ</b></p>`
*   **Lỗi 10 (Dòng 27):** Thẻ `<table>` thiếu phần đầu bảng `<thead>` và các ô tiêu đề `<th>`.
    *   **Sửa:** Bổ sung `<thead>` và đổi các thẻ `<td>` ở hàng đầu thành `<th>`.
*   **Lỗi 11 (Dòng 40):** Xuất hiện thẻ `<main>` thứ hai (HTML chỉ cho phép một thẻ main hiển thị).
    *   **Sửa:** Đổi thẻ này thành `<aside>` để chứa nội dung bổ trợ.
*   **Lỗi 12 (Dòng 45):** Thẻ đoạn văn `<p>` chưa được đóng.
    *   **Sửa:** Bổ sung thẻ đóng `</p>`