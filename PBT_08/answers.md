# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 — Function Declaration vs Expression vs Arrow Function

### Function Declaration

```js
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
}
```

### Function Expression

```js
const tinhThueBaoHiem2 = function (luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

### Arrow Function

```js
const tinhThueBaoHiem3 = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

### Hoisting

Function Declaration được hoisting hoàn toàn nên có thể gọi trước khi khai báo:

```js
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Function Expression và Arrow Function không thể gọi trước khi khai báo:

```js
sayHello();

const sayHello = () => {
    console.log("Hello");
};
```

Kết quả:

```text
ReferenceError: Cannot access 'sayHello' before initialization
```

Kết luận:

* Function Declaration: có hoisting.
* Function Expression: không có hoisting hàm.
* Arrow Function: không có hoisting hàm.

---

## Câu A2 — Scope & Closure

### Đoạn 1

Output:

```text
1
2
3
2
2
```

Giải thích:

Biến `count` nằm trong closure của hàm `counter()`. Sau khi hàm thực thi xong, các hàm con vẫn giữ được quyền truy cập tới biến này.

### Đoạn 2

Output:

```text
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

Giải thích:

* `var` có phạm vi function scope nên toàn bộ callback dùng chung một biến `i`.
* Khi `setTimeout` chạy, vòng lặp đã kết thúc nên `i = 3`.
* `let` có block scope nên mỗi lần lặp tạo ra một biến `j` riêng biệt.

---

## Câu A3 — Array Methods

```js
const nums = [1,2,3,4,5,6,7,8,9,10];
```

### 1. Lấy các số chẵn

```js
nums.filter(n => n % 2 === 0);
```

### 2. Nhân mỗi số với 3

```js
nums.map(n => n * 3);
```

### 3. Tính tổng tất cả

```js
nums.reduce((sum, n) => sum + n, 0);
```

### 4. Tìm số đầu tiên > 7

```js
nums.find(n => n > 7);
```

### 5. Kiểm tra có số > 10 không

```js
nums.some(n => n > 10);
```

### 6. Kiểm tra tất cả đều > 0

```js
nums.every(n => n > 0);
```

### 7. Tạo mảng chuỗi

```js
nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
```

### 8. Đảo ngược mảng không làm thay đổi mảng gốc

```js
[...nums].reverse();
```

---

## Câu A4 — Object Destructuring & Spread

### Destructuring

```js
console.log(name, price, ram, color);
```

Output:

```text
iPhone 16 25990000 8 Titan
```

```js
console.log(specs);
```

Output:

```text
ReferenceError: specs is not defined
```

### Spread

```js
console.log(updated.price);
```

Output:

```text
23990000
```

```js
console.log(updated.sale);
```

Output:

```text
true
```

```js
console.log(product.price);
```

Output:

```text
25990000
```

Object gốc không bị thay đổi.

### Spread Gotcha

```js
const copy = { ...product };
copy.specs.ram = 16;
```

Output:

```text
16
```

Giải thích:

Spread chỉ tạo bản sao nông (shallow copy). Thuộc tính `specs` vẫn tham chiếu tới cùng một object trong bộ nhớ nên thay đổi ở `copy.specs` cũng ảnh hưởng đến `product.specs`.

---

# PHẦN C — SUY LUẬN

## Câu C1 — Refactor Code

### Code sau khi refactor

```js
const processOrders = orders =>
    orders
        .filter(
            ({ status, total }) =>
                status === "completed" &&
                total > 100000
        )
        .map(
            ({
                id,
                customer,
                total
            }) => ({
                id,
                customer,
                total,
                discount: total * 0.1,
                finalTotal: total * 0.9
            })
        )
        .sort(
            (a, b) =>
                b.finalTotal -
                a.finalTotal
        );
```

### Giải thích

* `filter()` dùng để lọc đơn hàng đã hoàn thành và có tổng tiền lớn hơn 100000.
* `map()` tạo object mới chứa các trường cần thiết.
* `sort()` sắp xếp giảm dần theo `finalTotal`.
* Sử dụng destructuring để truy xuất dữ liệu ngắn gọn hơn.
* Sử dụng arrow function giúp code dễ đọc và hiện đại hơn.

---

## Câu C2 — Thiết kế API miniArray

### Cài đặt

```js
const miniArray = {
    map(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }

        return result;
    },

    filter(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }

        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );
        }

        return accumulator;
    }
};
```

### Kiểm thử

```js
console.log(
    miniArray.map(
        [1, 2, 3],
        x => x * 2
    )
);

console.log(
    miniArray.filter(
        [1, 2, 3, 4],
        x => x > 2
    )
);

console.log(
    miniArray.reduce(
        [1, 2, 3, 4],
        (a, b) => a + b,
        0
    )
);
```

### Kết quả

```text
[2, 4, 6]
[3, 4]
10
```

### Giải thích

**map()**: Duyệt qua từng phần tử và trả về mảng mới sau khi áp dụng hàm xử lý.

**filter()**: Duyệt qua từng phần tử và chỉ giữ lại các phần tử thỏa điều kiện.

**reduce()**: Duyệt qua toàn bộ mảng và tích lũy kết quả vào một biến trung gian.

Thư viện `miniArray` mô phỏng cách hoạt động của:

* Array.prototype.map()
* Array.prototype.filter()
* Array.prototype.reduce()

mà không sử dụng các hàm built-in tương ứng.
