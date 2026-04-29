# PHIẾU BÀI TẬP 02: HTML5 FORMS & MEDIA

## PHẦN A: KIỂM TRA ĐỌC HIỂU

### Câu A1: Liệt kê 10 Input Types trong E-Commerce
> tài liệu tham chiếu: `07_forms_interactive.md`

1. **type="email"** → Ô nhập văn bản, tự động kiểm tra định dạng có dấu `@`. **Use case:** Form đăng ký/đăng nhập.
2. **type="password"** → Ô nhập ẩn ký tự (dạng dấu chấm). **Use case:** Nhập mật khẩu tài khoản hoặc mã PIN thanh toán.
3. **type="tel"** → Hiển thị bàn phím số trên thiết bị di động. **Use case:** Nhập số điện thoại nhận hàng.
4. **type="number"** → Ô nhập chỉ cho phép số, có nút tăng/giảm. **Use case:** Chọn số lượng sản phẩm trong giỏ hàng.
5. **type="date"** → Hiển thị giao diện chọn ngày (DatePicker). **Use case:** Chọn ngày sinh hoặc ngày hẹn giao hàng.
6. **type="range"** → Thanh trượt chọn giá trị trong một khoảng. **Use case:** Bộ lọc tìm kiếm sản phẩm theo khoảng giá.
7. **type="color"** → Bảng chọn màu sắc. **Use case:** Chọn màu sắc tùy chỉnh cho các sản phẩm thời trang.
8. **type="search"** → Ô nhập có nút xóa nhanh nội dung. **Use case:** Thanh tìm kiếm sản phẩm trên Header.
9. **type="url"** → Tự động kiểm tra định dạng địa chỉ web (http/https). **Use case:** Nhập link website cá nhân trong phần đánh giá.
10. **type="file"** → Nút chọn tệp từ thiết bị. **Use case:** Tải ảnh thực tế của sản phẩm khi viết Review.

### Câu A2: Dự đoán và Kiểm tra Validation thực tế
> tài liệu tham chiếu: `07_forms_interactive.md`

| Trường hợp | Dự đoán kết quả (Giải thích) |
| :--- | :--- |
| **1 (Required)** | Báo lỗi "Please fill out this field" vì input có thuộc tính `required` nhưng bị để trống. |
| **2 (Email)** | Báo lỗi thiếu ký tự `@` vì `type="email"` yêu cầu định dạng email hợp lệ. |
| **3 (Min/Max)** | Báo lỗi giá trị phải nhỏ hơn hoặc bằng 10 vì `15` vượt quá `max="10"`. |
| **4 (Pattern)** | Báo lỗi không khớp định dạng yêu cầu vì `abc123` chứa chữ, trái với pattern chỉ cho phép 10 chữ số. |
| **5 (Minlength)** | Báo lỗi độ dài tối thiểu vì "123" chỉ có 3 ký tự, trong khi `minlength="8"`. |


### Câu A3: Accessibility trong Form
> tài liệu tham chiếu: `07_forms_interactive.md`

* **Tầm quan trọng của `<label for="email">`:** Liên kết tên trường với ô nhập liệu. Giúp Screen Reader đọc đúng tên ô khi người dùng focus vào. Ngoài ra, click vào label sẽ tự focus vào input, giúp người dùng dễ thao tác hơn.
* **Sử dụng `<fieldset>` + `<legend>`:** Dùng để nhóm các thông tin liên quan (ví dụ: Nhóm thông tin cá nhân, Nhóm địa chỉ giao hàng). 
    * *Ví dụ:* Dùng bọc cụm các Radio Button chọn phương thức thanh toán.
* **Sử dụng `aria-label`:** Dùng khi giao diện không có text hiển thị (ví dụ: nút Search chỉ có icon kính lúp). **Không** nên dùng khi đã có `<label>` vì sẽ gây lặp thông tin cho thiết bị hỗ trợ.

### Câu A4: Media & Tối ưu hóa
> tài liệu tham chiếu: ` `

* **`loading="lazy"`:** Trình duyệt chỉ tải ảnh khi người dùng cuộn đến gần. Giúp giảm dung lượng tải ban đầu, tăng tốc độ trang. **Không** dùng cho ảnh đầu trang (Above the fold) vì làm chậm hiển thị chính.
* **Nhiều `<source>` trong `<video>`:** Nhằm đảm bảo tính tương thích trên nhiều trình duyệt khác nhau. **3 format phổ biến:** `.mp4`, `.webm`, `.ogv`.
* **Thuộc tính `alt`:**
    * *iPhone 16:* `alt="iPhone 16 Pro Max màu Titan tự nhiên mặt trước"`
    * *Ảnh trang trí:* `alt=""` (Để trống để Screen Reader bỏ qua).
    * *Biểu đồ doanh thu:* `alt="Biểu đồ cột doanh thu quý 1/2026, cho thấy mức tăng trưởng 15%."`


### Câu A5: So sánh <figure> vs <img>
> tài liệu tham chiếu: ` `

* **Cách 1 (Chỉ dùng `<img>`):** Dùng khi hình ảnh chỉ mang tính chất minh họa đơn giản, là một phần của dòng văn bản hoặc trang trí, không cần chú thích riêng biệt.
    * *Ví dụ 1:* Các icon mạng xã hội (Facebook, Instagram) ở dưới chân trang.
    * *Ví dụ 2:* Ảnh đại diện (avatar) nhỏ bên cạnh tên người dùng trong phần bình luận.
* **Cách 2 (Dùng `<figure>` + `<figcaption>`):** Dùng khi hình ảnh là một đơn vị nội dung độc lập, quan trọng và cần có chú thích rõ ràng để người đọc hiểu ngữ cảnh hoặc thông số.
    * *Ví dụ 1:* Ảnh chi tiết sản phẩm iPhone 16 kèm chú thích tên phiên bản và giá tiền ngay bên dưới.
    * *Ví dụ 2:* Biểu đồ thống kê doanh số bán hàng trong một bài báo cáo tài chính.

---

## PHẦN C: PHÂN TÍCH & SUY LUẬN

### Câu C1: Debug Form (8 lỗi)
1. **Lỗi 1 (Dòng 2):** Input "Tên" không có `<label for="...">`.
   * **Sửa:** `<label for="name">Tên:</label> <input type="text" id="name" required>`
2. **Lỗi 2 (Dòng 4):** Input Email thiếu `id` để liên kết với label (nếu có) và thiếu `required`.
   * **Sửa:** `<input type="email" id="email" placeholder="..." required>`
3. **Lỗi 3 (Dòng 6):** Input Password không có `minlength` để đảm bảo bảo mật.
   * **Sửa:** `<input type="password" id="pw" minlength="8" required>`
4. **Lỗi 4 (Dòng 7):** Thiếu cơ chế kiểm tra "Nhập lại mật khẩu" (Cần JavaScript nhưng HTML nên có `id` riêng).
   * **Sửa:** `<input type="password" id="confirm_pw" required>`
5. **Lỗi 5 (Dòng 9):** Số điện thoại dùng `type="text"`.
   * **Sửa:** `<input type="tel" pattern="[0-9]{10}" id="phone">`
6. **Lỗi 6 (Dòng 11):** Thẻ `<select>` không có `id` và nhãn mô tả.
   * **Sửa:** `<label for="city">Thành phố:</label> <select id="city">...</select>`
7. **Lỗi 7 (Dòng 16):** Checkbox nằm ngoài thẻ `<label>` mà không có `id` liên kết.
   * **Sửa:** `<label><input type="checkbox" required> Tôi đồng ý...</label>`
8. **Lỗi 8 (Dòng 19):** Sử dụng `<input type="submit">` thay vì `<button type="submit">` (Best practice hiện đại).
   * **Sửa:** `<button type="submit">Gửi</button>`

### Câu C2: Chiến lược Validation cho Ngân hàng số
* **Regex cho CMND/CCCD (12 số):** `pattern="[0-9]{12}"`
* **Regex cho Số tài khoản (10-15 số):** `pattern="[0-9]{10,15}"`
* **HTML5 có đủ an toàn không?** **KHÔNG.** HTML5 validation chỉ ở phía Frontend, người dùng có thể dễ dàng tắt nó đi bằng DevTools. Với ứng dụng ngân hàng, bắt buộc phải có Validation ở phía **Backend** để đảm bảo an toàn dữ liệu.
* **3 loại validation HTML5 không làm được:**
    1. Kiểm tra tính duy nhất (ví dụ: Email đã tồn tại trong hệ thống hay chưa).
    2. So khớp hai trường (ví dụ: Password và Confirm Password có giống nhau không).
    3. Kiểm tra logic phức tạp dựa trên dữ liệu từ Server (ví dụ: Số dư tài khoản có đủ để chuyển tiền không).
* **2 rủi ro nếu chỉ validate Frontend:**
    1. **Bị tấn công Injection:** Hacker gửi dữ liệu rác/mã độc trực tiếp lên Server thông qua công cụ như Postman.
    2. **Sai lệch dữ liệu:** Dữ liệu không hợp lệ chui vào database làm hỏng logic của toàn hệ thống.