# 📝 BÀI LÀM PHIẾU BÀI TẬP 07: JAVASCRIPT BASICS

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — var / let / const
**Dự đoán kết quả:**
* **Đoạn 1:** `undefined`. Giải thích: Do cơ chế *hoisting*, khai báo `var x` được đưa lên đầu phạm vi, nhưng phần gán (`= 5`) thì giữ nguyên tại chỗ. Do đó lúc `console.log`, biến đã tồn tại nhưng chưa có giá trị.
* **Đoạn 2:** Lỗi `ReferenceError`. Giải thích: `let` cũng có hoisting nhưng nằm trong "Vùng chết tạm thời" (Temporal Dead Zone - TDZ) cho đến khi dòng khai báo chạy. Không thể truy cập trước khi khởi tạo.
* **Đoạn 3:** Lỗi `TypeError`. Giải thích: `const` dùng để khai báo hằng số, không thể gán lại giá trị mới sau khi đã khởi tạo.
* **Đoạn 4:** `[1, 2, 3, 4]`. Giải thích: `const` ngăn chặn việc gán lại *tham chiếu* (không thể gán `arr = [...]`), nhưng không đóng băng *nội dung* bên trong đối tượng hay mảng. Ta vẫn có thể push/pop bình thường.
* **Đoạn 5:** `Trong block: 2`, `Ngoài block: 1`. Giải thích: `let` có phạm vi block-scope (giới hạn trong cặp ngoặc nhọn `{}`). Biến `a = 2` chỉ sống trong block đó, không ảnh hưởng đến `a = 1` bên ngoài.

### Câu A2 — Data Types & Coercion
**Dự đoán kết quả:**
* `console.log(typeof null);` → `"object"` (Đây là một lỗi lịch sử nổi tiếng của JS).
* `console.log(typeof undefined);` → `"undefined"`
* `console.log(typeof NaN);` → `"number"` (Not-A-Number nhưng kiểu dữ liệu vẫn thuộc nhóm số).
* `console.log("5" + 3);` → `"53"` (Dấu `+` ưu tiên nối chuỗi).
* `console.log("5" - 3);` → `2` (Dấu `-` chỉ dùng cho toán học, ép chuỗi "5" thành số 5).
* `console.log("5" * "3");` → `15` (Dấu `*` ép cả hai thành số).
* `console.log(true + true);` → `2` (`true` ép thành 1).
* `console.log([] + []);` → `""` (Mảng rỗng ép thành chuỗi rỗng).
* `console.log([] + {});` → `"[object Object]"` (Mảng rỗng nối với chuỗi mặc định của object).
* `console.log({} + []);` → `0` hoặc `"[object Object]"` (Tùy engine JS biên dịch `{}` là block rỗng hay object rỗng).

### Câu A3 — So sánh == vs ===
**Dự đoán kết quả:**
* `console.log(5 == "5");` → `true`
* `console.log(5 === "5");` → `false`
* `console.log(null == undefined);` → `true`
* `console.log(null === undefined);` → `false`
* `console.log(NaN == NaN);` → `false` (Đặc biệt: NaN không bao giờ bằng chính nó).
* `console.log(0 == false);` → `true`
* `console.log(0 === false);` → `false`
* `console.log("" == false);` → `true`

**Quy tắc:** Từ giờ luôn sử dụng `===`. Nó kiểm tra nghiêm ngặt cả *giá trị* lẫn *kiểu dữ liệu*, giúp tránh các lỗi ngầm do JS tự động ép kiểu (type coercion) không mong muốn.

### Câu A4 — Truthy & Falsy
**Danh sách giá trị Falsy trong JS:** `false`, `0`, `-0`, `0n` (BigInt), `""` (chuỗi rỗng), `null`, `undefined`, `NaN`. (Tất cả giá trị khác đều là Truthy).

**Dự đoán:**
* `if ("0")` → **In (A)** (Chuỗi có ký tự là Truthy).
* `if ("")` → **Không in** (Chuỗi rỗng là Falsy).
* `if ([])` → **In (C)** (Mảng, dù rỗng, luôn là object và Truthy).
* `if ({})` → **In (D)** (Object rỗng là Truthy).
* `if (null)` → **Không in** (Falsy).
* `if (0)` → **Không in** (Falsy).
* `if (-1)` → **In (G)** (Số khác 0 là Truthy).
* `if (" ")` → **In (H)** (Chuỗi chứa dấu cách là Truthy).

### Câu A5 — Template Literals
```javascript
// Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;