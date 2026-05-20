# PHẦN A — ĐỌC HIỂU (TRACK A - BOOTSTRAP)

### Câu A1 — Grid System
Bảng phân tích Layout:

| Kích thước | < 768px (Mobile) | 768px - 991px (Tablet) | ≥ 992px (Desktop) |
|------------|------------------|------------------------|-------------------|
| **Số cột** | 1 cột (col-12) | 2 cột (col-md-6) | 4 cột (col-lg-3) |
| **Box layout** | Xếp chồng lên nhau (1 hàng 1 box) | 1 hàng chứa 2 box | 1 hàng ngang chứa cả 4 box |

**Câu hỏi thêm:** - `col-md-6` nghĩa là gì? Nghĩa là trên màn hình từ cỡ Medium (md - ≥768px) trở lên, cột này sẽ chiếm 6/12 phần của lưới (tương đương 50% chiều rộng).
- Tại sao không cần viết `col-sm-12`? Vì Bootstrap áp dụng tư duy Mobile-First. Class `col-12` (mặc định) đã thiết lập độ rộng 100% cho mọi kích thước màn hình từ 0px trở lên. Nó sẽ giữ nguyên như vậy cho đến khi gặp điểm ngắt (breakpoint) lớn hơn như `md` hay `lg` để thay đổi. Do đó viết `col-sm-12` là thừa.

### Câu A2 — Utilities & Components
1. **`d-none d-md-block`:** - Element này sẽ **bị ẩn** trên màn hình nhỏ (mobile, <768px) do class `d-none`.
   - Element này sẽ **hiển thị** dưới dạng block (chiếm trọn chiều ngang) trên màn hình từ tablet trở lên (≥768px) do class `d-md-block`.
2. **5 Spacing Utilities:**
   - `mt-3`: margin-top cỡ 3 (khoảng 1rem = 16px).
   - `px-4`: padding-left và padding-right cỡ 4 (khoảng 1.5rem = 24px).
   - `mb-auto`: margin-bottom auto (tự động đẩy phần tử xuống dưới cùng nếu nằm trong flexbox).
   - `py-5`: padding-top và padding-bottom cỡ 5 (cỡ lớn nhất, 3rem = 48px).
   - `mx-auto`: margin-left và margin-right auto (dùng để căn giữa một block element).
3. **Khác biệt của Container:**
   - `.container`: Có chiều rộng cố định, thu phóng theo từng điểm ngắt (breakpoint) nhảy bậc.
   - `.container-fluid`: Luôn luôn chiếm 100% chiều rộng màn hình bất kể thiết bị nào.
   - `.container-md`: Tràn viền 100% ở mobile, nhưng khi màn hình đạt đến cỡ `md` (≥768px) thì nó mới bắt đầu co lại thành chiều rộng cố định và căn giữa giống `.container`.

---

# PHẦN C — PHÂN TÍCH

### Câu C1 — Tùy biến Bootstrap
1. **Đổi màu `$primary`:**
   - Cần cài đặt môi trường Node.js và trình biên dịch SASS/SCSS.
   - Tạo một file `custom.scss`.
   - Khai báo lại biến `$primary: #E63946;` **TRƯỚC** khi gọi lệnh `@import "node_modules/bootstrap/scss/bootstrap";`.
   - Biên dịch file `custom.scss` này ra thành file `.css` cuối cùng và nhúng vào HTML.
2. **Tại sao KHÔNG NÊN override bằng CSS thuần?**
   Nếu viết `.btn-primary { background: red; }`, bạn chỉ đổi màu được cái nút. Các class khác xài màu primary như `text-primary`, `bg-primary`, `border-primary`, v.v. vẫn sẽ giữ màu xanh mặc định. Dùng SASS variables giúp đồng bộ toàn bộ hệ thống màu sắc chỉ với 1 dòng code, dễ bảo trì và không cần dùng đến `!important`.

### Câu C2 — So sánh Bootstrap vs CSS thuần
- **Số dòng code:** CSS thuần tốn hàng chục dòng CSS bên ngoài. Bootstrap tốn 0 dòng CSS, mọi thứ nằm trên class HTML.
- **Thời gian phát triển:** Bootstrap nhanh hơn gấp nhiều lần, chỉ cần lắp ghép (copy-paste) class và component có sẵn.
- **Khả năng tùy biến:** CSS thuần dễ tạo ra giao diện độc bản 100%. Bootstrap khó tùy biến sâu nếu không rành SCSS, dễ làm web trông "công nghiệp" giống hệt các web xài Bootstrap khác.
- **Khi nào NÊN dùng:** Làm các hệ thống Dashboard Admin, web nội bộ, Landing page cần tốc độ lên thớt cực nhanh, dự án thiếu UI Designer.
- **Khi nào KHÔNG NÊN dùng:** Các website mang đậm tính nghệ thuật sáng tạo (như Portfolio cá nhân cao cấp), các website yêu cầu file CSS cực kỳ nhẹ và tối ưu (vì file CSS Bootstrap khá nặng).