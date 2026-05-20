# PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — Viewport & Mobile-First
1. **Thẻ `<meta viewport>` chuẩn:**
   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
   - `width=device-width`: Đặt chiều rộng của trang web bằng đúng chiều rộng vật lý của màn hình thiết bị.
   - `initial-scale=1.0`: Mức độ thu phóng ban đầu là 100% (không bị zoom to hay zoom nhỏ khi mới load).
2. **Nếu thiếu thẻ này:** Trình duyệt trên điện thoại (như Safari trên iPhone) sẽ giả lập màn hình là màn hình Desktop (thường rộng 980px), sau đó thu nhỏ toàn bộ trang web lại cho vừa màn hình điện thoại. Kết quả là chữ và hình ảnh sẽ cực kỳ bé, người dùng phải zoom bằng tay mới đọc được.
3. **Mobile-First vs Desktop-First:**
   - **Mobile-First:** Code CSS mặc định cho màn hình nhỏ trước (Mobile). Màn hình lớn hơn thì dùng `@media (min-width: ...)` để ghi đè.
     *Ví dụ:* `.box { width: 100%; } @media (min-width: 768px) { .box { width: 50%; } }`
   - **Desktop-First:** Code CSS mặc định cho màn hình to trước. Màn hình nhỏ dùng `@media (max-width: ...)` để bóp lại.
     *Ví dụ:* `.box { width: 50%; } @media (max-width: 767px) { .box { width: 100%; } }`
   - **Lý do khuyên dùng Mobile-First:** Giúp tối ưu hóa hiệu suất cho thiết bị di động (tải ít CSS phức tạp hơn, tải nhanh hơn), phù hợp với xu hướng người dùng duyệt web bằng điện thoại là chủ yếu hiện nay.

### Câu A2 — Breakpoints Chuẩn (Bootstrap 5)
- **< 576px:** Điện thoại dọc (Smartphone portrait) — Lưới: 1 cột.
- **576px:** Điện thoại ngang (Smartphone landscape) — Lưới: 1 - 2 cột.
- **768px:** Máy tính bảng (Tablet / iPad) — Lưới: 2 - 3 cột.
- **992px:** Desktop nhỏ (Laptop) — Lưới: 3 - 4 cột.
- **1200px:** Desktop lớn — Lưới: 4 cột.
- **1400px:** Màn hình siêu lớn (Ultra-wide).

### Câu A3 — Media Queries (Điền bảng)

| Chiều rộng màn hình | `.container` width | Giải thích |
|---------------------|--------------------|------------|
| 375px (iPhone SE)   | **100%** | Dưới 576px, nhận CSS mặc định ở ngoài. |
| 600px               | **540px** | Lọt vào min-width: 576px. |
| 800px               | **720px** | Lọt vào min-width: 768px (ghi đè cái 576). |
| 1000px              | **960px** | Lọt vào min-width: 992px. |
| 1400px              | **1140px** | Lọt vào min-width: 1200px. |

### Câu A4 — SCSS Basics
1. **Variables:** Cho phép lưu trữ màu sắc, font, kích thước để dùng lại nhiều lần. Đổi 1 chỗ là đổi toàn trang.
   *Ví dụ:* `$primary-color: #3498db; body { color: $primary-color; }`
2. **Nesting:** Cho phép viết CSS lồng nhau theo đúng cấu trúc phân cấp của HTML, code dễ đọc hơn.
   *Ví dụ:* `.nav { ul { margin: 0; } a { color: red; } }`
3. **Mixins:** Gom một đoạn code CSS lại thành 1 "hàm" để gọi lại ở nhiều nơi (có thể truyền tham số).
   *Ví dụ:* `@mixin flex-center { display: flex; justify-content: center; align-items: center; } .box { @include flex-center; }`
4. **@extend:** Cho phép một class "kế thừa" toàn bộ thuộc tính CSS của một class khác.
   *Ví dụ:* `.btn { padding: 10px; } .btn-red { @extend .btn; background: red; }`
- **Tại sao browser không đọc được:** Trình duyệt chỉ được lập trình để hiểu CSS thuần (CSS chuẩn).
- **Cách chuyển đổi:** Cần một trình biên dịch (Compiler) như thư viện `sass` của Node.js, hoặc extension "Live Sass Compiler" trên VS Code để dịch file `.scss` thành file `.css`.

---

# PHẦN C — PHÂN TÍCH RESPONSIVE TRANG WEB THỰC TẾ

### Câu C1 — Phân tích trang web Shopee.vn 

1. **Navigation thay đổi:**
   - Desktop: Có thanh tìm kiếm to, menu ngang đầy đủ link.
   - Mobile/Tablet: Bị rút gọn thành icon kính lúp, thêm icon Hamburger (☰) hoặc thanh Bottom Navigation.
2. **Lưới content (Sản phẩm gợi ý):**
   - Desktop (1440px): 6 cột.
   - Tablet (768px): 3 hoặc 4 cột.
   - Mobile (375px): 2 cột (hoặc kéo vuốt ngang).
3. **Elements bị ẩn:** Các banner quảng cáo phụ 2 bên, menu danh mục con dài dòng thường bị ẩn trên mobile để tiết kiệm diện tích.
4. **Font size:** Trên mobile font thường to hơn một chút hoặc giữ nguyên, khoảng cách (padding/margin) bị ép nhỏ lại.
- Mobile

![mobile](screenshots/mobile.png)

- Desktop

![desktop](screenshots/desktop.png)

- Tablet

![tablet](screenshots/tablet.png)


### Câu C2 — Thiết kế Strategy Đặt bàn nhà hàng

**1. Sơ đồ bố cục (Wireframes):**

**📱 Mobile (< 768px): Layout 1 cột**
- Các phần tử phụ bị ẩn: Menu chi tiết (ẩn trong Hamburger ☰), Sidebar.
- Form đặt bàn: Nằm dọc ngay dưới Hero image. Bản đồ nằm cuối trang.

```text

┌──────────────────────────┐
│ [Logo]                [☰]│ <- Header
├──────────────────────────┤
│                          │
│       HERO IMAGE         │
│                          │
├──────────────────────────┤
│ Form Đặt Bàn (Dọc)       │ <- Form nằm trên
├──────────────────────────┤
│ Grid Món ăn (1 cột)      │
│ [Ảnh]                    │
│ [Ảnh]                    │
├──────────────────────────┤
│ Bản đồ Google Maps       │ <- Map nằm dưới
├──────────────────────────┤
│ Footer                   │
└──────────────────────────┘
```

**💻 Tablet (≥ 768px): Layout 2 cột cho Grid**
- Grid ảnh: Chia 2 cột.
- Bản đồ: Bắt đầu được đưa lên nằm song song với Form (nếu đủ chỗ) hoặc vẫn nằm dưới Form nhưng Form chia 2 cột.

```text
┌──────────────────────────┐
│ [Logo]     [Hotline] [☰] │
├──────────────────────────┤
│       HERO IMAGE         │
├──────────────────────────┤
│ Form Đặt Bàn             │
│ [Ngày] [Giờ] [Số người]  │
├──────────────────────────┤
│ Grid Món ăn (2 cột)      │
│ [Ảnh 1]   │   [Ảnh 2]    │
│ [Ảnh 3]   │   [Ảnh 4]    │
├──────────────────────────┤
│ Bản đồ Google Maps (Full)│
├──────────────────────────┤
│ Footer                   │
└──────────────────────────┘
```

**🖥️ Desktop (≥ 1024px): Layout lớn, nhiều cột**
- Grid ảnh: Chia 3 cột.
- Không dùng Sidebar cho phần này để tập trung vào Form.
- Form và Bản đồ: Nằm cạnh nhau trên cùng 1 hàng (Form 60%, Map 40%).

```text
┌──────────────────────────────────────────────────┐
│ [Logo]          [Home] [Menu] [About]  [Hotline] │
├──────────────────────────────────────────────────┤
│                                                  │
│                   HERO IMAGE                     │
│                                                  │
├──────────────────────────────────────────────────┤
│ Grid Món ăn (3 cột)                              │
│    [Ảnh 1]        [Ảnh 2]        [Ảnh 3]         │
│    [Ảnh 4]        [Ảnh 5]        [Ảnh 6]         │
├────────────────────────┬─────────────────────────┤
│                        │                         │
│   FORM ĐẶT BÀN         │    GOOGLE MAPS          │
│   (Chiếm 60% chiều     │    (Chiếm 40% chiều     │
│    rộng màn hình)      │     rộng màn hình)      │
│                        │                         │
├────────────────────────┴─────────────────────────┤
│                      FOOTER                      │
└──────────────────────────────────────────────────┘
``` 

**2. Chi tiết phân tích:**
- Mobile: Menu bị ẩn vào icon Hamburger. Ảnh thu về 1 cột. Các input trong Form xếp chồng lên nhau thành 1 cột dọc.
- Tablet: Grid ảnh chuyển thành 2 cột. 
- Desktop: Menu bung ra hàng ngang. Form đặt bàn nằm bên trái, Google Map nằm ngay bên phải Form. Layout Grid 3 cột.

**3. CSS Skeleton (Grid + Mobile-First):**
```css
/* Layout chung - Mobile First (1 cột) */
.restaurant-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.food-grid {
    display: grid;
    grid-template-columns: 1fr; /* 1 cột trên Mobile */
    gap: 15px;
}

/* TABLET */
@media (min-width: 768px) {
    .food-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 cột trên Tablet */
    }
}

/* DESKTOP */
@media (min-width: 1024px) {
    .food-grid {
        grid-template-columns: repeat(3, 1fr); /* 3 cột trên Desktop */
    }
    
    /* Gom Form và Map lên cùng 1 hàng */
    .booking-section {
        display: grid;
        grid-template-columns: 6fr 4fr; /* Form 60% | Map 40% */
        gap: 30px;
    }
}
