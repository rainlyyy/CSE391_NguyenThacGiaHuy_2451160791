# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 — DOM Tree

### DOM Tree

```text
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
```

### Query Selectors

#### Chọn thẻ h1

```js
document.querySelector("h1");
```

#### Chọn input trong form

```js
document.querySelector("#todoForm input");
```

#### Chọn tất cả .todo-item

```js
document.querySelectorAll(".todo-item");
```

#### Chọn link active

```js
document.querySelector("nav a.active");
```

#### Chọn li đầu tiên

```js
document.querySelector("#todoList li:first-child");
```

#### Chọn tất cả a trong nav

```js
document.querySelectorAll("nav a");
```

---

## Câu A2 — innerHTML vs textContent

### innerHTML

* Đọc hoặc ghi HTML.
* Trình duyệt sẽ parse HTML.

Ví dụ:

```js
element.innerHTML = "<b>Hello</b>";
```

Kết quả:

```html
<b>Hello</b>
```

được render thành chữ đậm.

### textContent

* Chỉ xử lý văn bản.
* Không parse HTML.

Ví dụ:

```js
element.textContent = "<b>Hello</b>";
```

Kết quả hiển thị:

```text
<b>Hello</b>
```

### Khi nào dùng

* Dùng `innerHTML` khi cần tạo HTML động.
* Dùng `textContent` khi hiển thị dữ liệu người dùng nhập.

### XSS

Code nguy hiểm:

```js
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;
```

Nếu user nhập:

```html
<img src=x onerror="alert('Hacked!')">
```

trình duyệt sẽ thực thi JavaScript.

### Cách sửa

```js
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;
```

Lúc này chuỗi được hiển thị như văn bản thông thường và không thực thi mã độc.

---

## Câu A3 — Event Bubbling

### Không dùng stopPropagation()

Output:

```text
BUTTON
INNER
OUTER
```

Giải thích:

Event nổi bọt từ phần tử được click lên các phần tử cha.

```text
button
  ↑
inner
  ↑
outer
```

### Có stopPropagation()

```js
document.querySelector("#btn")
.addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});
```

Output:

```text
BUTTON
```

Giải thích:

`stopPropagation()` chặn event bubbling nên event không truyền lên `inner` và `outer`.

---

# PHẦN C — DEBUG & PHÂN TÍCH

## Câu C1 — Debug DOM Code

### Các lỗi trong chương trình

#### Lỗi 1

```js
document.querySelector("#decrementBtn")
.addEventListener("onclick", ...)
```

Sai:

```js
"onclick"
```

Đúng:

```js
"click"
```

---

#### Lỗi 2

```js
countDisplay = count;
```

Sai vì đang gán cho biến DOM.

Đúng:

```js
countDisplay.textContent = count;
```

---

#### Lỗi 3

```js
historyList.innerHTML = null;
```

Đúng:

```js
historyList.innerHTML = "";
```

---

#### Lỗi 4

```js
item.remove;
```

Thiếu dấu ngoặc.

Đúng:

```js
item.remove();
```

---

#### Lỗi 5

```js
count = localStorage.getItem("count");
```

Trả về string.

Đúng:

```js
count = Number(
    localStorage.getItem("count")
) || 0;
```

---

#### Lỗi 6

History được lưu nhưng không được load lại.

Thiếu:

```js
historyList.innerHTML =
    localStorage.getItem("history") || "";
```

---

#### Lỗi 7

Các item history sau khi load lại sẽ mất sự kiện click để xóa.

Nên dùng Event Delegation:

```js
historyList.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});
```

---

#### Lỗi 8

```js
countDisplay.innerHTML = count;
```

Nên dùng:

```js
countDisplay.textContent = count;
```

vì chỉ hiển thị text.

---

### Code cải thiện

```js
document.querySelector("#decrementBtn")
.addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});
```

---

## Câu C2 — Performance

### Vì sao bind event cho 1000 elements là không tốt

Ví dụ:

```js
items.forEach(item => {
    item.addEventListener("click", handler);
});
```

Với 1000 phần tử:

* Tạo 1000 event listeners.
* Tốn bộ nhớ.
* Khó quản lý.
* Chậm khi thêm/xóa phần tử động.

### Event Delegation

Thay vì gắn vào từng item:

```js
parent.addEventListener("click", e => {
    if (e.target.matches(".item")) {
        console.log("clicked");
    }
});
```

Chỉ cần 1 listener trên phần tử cha.

Ưu điểm:

* Tiết kiệm bộ nhớ.
* Dễ bảo trì.
* Hỗ trợ phần tử được thêm động.

---

### Refactor bằng DocumentFragment

Code ban đầu:

```js
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);
}
```

Code tối ưu:

```js
const fragment =
    document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;

    fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

### Tại sao nhanh hơn

Code cũ:

* 1000 lần append vào DOM.
* Có thể gây nhiều lần reflow và repaint.

Code mới:

* Thao tác trên bộ nhớ tạm (`DocumentFragment`).
* Chỉ append vào DOM đúng 1 lần.
* Giảm số lần reflow.
* Hiệu năng tốt hơn đáng kể khi số lượng phần tử lớn.
