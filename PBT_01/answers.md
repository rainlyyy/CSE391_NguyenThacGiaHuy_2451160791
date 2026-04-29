PHẦN A — KIỂM TRA ĐỌC HIỂU
Câu A1 — HTTP & Browser
Tài liệu tham chiếu: tuan_1_html5/01_introduction_html_universe.md

Thứ tự các bước xảy ra khi gõ [https://shopee.vn](https://shopee.vn):

Bước 1: DNS lookup — Tìm địa chỉ IP của tên miền.

Bước 2: TCP handshake — Thiết lập kết nối giữa máy khách và máy chủ.

Bước 3: TLS handshake — Thiết lập kết nối bảo mật.

Bước 4: HTTP request — Trình duyệt gửi yêu cầu dữ liệu.

Bước 5: Server response — Máy chủ trả về dữ liệu (phản hồi).

Bước 6: Parse HTML — Trình duyệt phân tích mã HTML thành DOM/CSSOM.

Bước 7: Render layout — Tính toán và vẽ giao diện lên màn hình.

Tab Network trong DevTools: Cho phép theo dõi thông tin của tất cả các HTTP request của trang web như trạng thái, dung lượng và thời gian tải file.

Câu A2 — Semantic HTML
Tài liệu tham chiếu: tuan_1_html5/04_semantic_html.md

Trang web bị đánh giá SEO thấp do không sử dụng các thẻ Semantic, khiến công cụ tìm kiếm khó hiểu được cấu trúc nội dung.

Các lỗi và cách sửa:

Lỗi 1: <div class="header"> (Không nhận diện được đầu trang). -> Sửa: Dùng thẻ <header>.

Lỗi 2: <div class="logo">ShopTLU</div> (Thiếu phân cấp nội dung). -> Sửa: Dùng thẻ <h1>ShopTLU</h1>.

Lỗi 3: <div class="menu"> bọc các thẻ <div> chứa link (Không hỗ trợ Screen Reader). -> Sửa: Dùng thẻ <nav> lồng danh sách <ul>, <li> và thẻ <a>.

Lỗi 4: <div class="main"> (Không xác định được nội dung chính). -> Sửa: Dùng thẻ <main>.

Câu A3 — Block vs Inline
Tài liệu tham chiếu:

Mô tả kết quả hiển thị:

Hộp 1: Chiếm trọn một dòng (Block element).

Text A, Text B: Nằm cạnh nhau trên cùng một dòng (Inline elements).

Hộp 2: Tự động nhảy xuống dòng mới (Block element).

Text C, Text D: Nằm cạnh nhau trên cùng một dòng, "Text D" hiển thị in đậm (Inline elements).

Hộp 3: Tự động nhảy xuống dòng mới (Block element).

Giải thích:

Thẻ <div>: Là phần tử khối (block), luôn bắt đầu trên dòng mới và chiếm toàn bộ chiều rộng có sẵn.

Thẻ <span> và <strong>: Là phần tử nội dòng (inline), chỉ chiếm diện tích vừa đủ nội dung và không tạo ra ngắt dòng.

Câu A4 — Table
Tài liệu tham chiếu: tuan_1_html5/05_tables_hyperlinks.md

Ý nghĩa các thẻ:

<thead>: Phần đầu bảng, chứa hàng tiêu đề cột.

<tbody>: Phần thân bảng, chứa dữ liệu chính của bảng.

<tfoot>: Phần cuối bảng, dùng để tổng kết hoặc ghi chú.

Tại sao không nên dùng Table để tạo layout:

Khả năng phản hồi kém: Bố cục bảng cứng nhắc, khó hiển thị linh hoạt trên các thiết bị khác nhau khi dùng CSS.

Khó bảo trì: Cấu trúc bảng lồng nhau làm mã nguồn cồng kềnh, dễ lỗi khi thêm bớt nội dung.

SEO & Accessibility kém: Các trình đọc màn hình sẽ đọc dữ liệu theo thứ tự hàng/cột, làm sai lệch logic nội dung của trang web.