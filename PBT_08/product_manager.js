const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", stock: 15, rating: 4.5 },
    { id: 2, name: "MacBook Pro", price: 45990000, category: "laptop", stock: 8, rating: 4.8 },
    { id: 3, name: "AirPods Pro", price: 6990000, category: "accessory", stock: 50, rating: 4.3 },
    { id: 4, name: "iPad Air", price: 16990000, category: "tablet", stock: 0, rating: 4.6 },
    { id: 5, name: "Samsung S24", price: 22990000, category: "phone", stock: 20, rating: 4.4 },
    { id: 6, name: "Dell XPS 15", price: 35990000, category: "laptop", stock: 5, rating: 4.7 },
    { id: 7, name: "Galaxy Buds", price: 3490000, category: "accessory", stock: 100, rating: 4.1 },
    { id: 8, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", stock: 25, rating: 4.2 },
    { id: 9, name: "Pixel 9", price: 19990000, category: "phone", stock: 12, rating: 4.6 },
    { id: 10, name: "ThinkPad X1", price: 32990000, category: "laptop", stock: 3, rating: 4.5 }
];

// 1. Lọc sản phẩm còn hàng
function getInStock(arr) {
    return arr.filter(p => p.stock > 0);
}

// 2. Lọc theo category VÀ khoảng giá
function filterProducts(arr, category, minPrice, maxPrice) {
    return arr.filter(p => p.category === category && p.price >= minPrice && p.price <= maxPrice);
}

// 3. Sắp xếp theo giá (tăng/giảm - spread để không mutate gốc)
function sortByPrice(arr, order = "asc") {
    return [...arr].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
}

// 4. Tìm sản phẩm rẻ nhất mỗi category
function cheapestByCategory(arr) {
    return arr.reduce((acc, curr) => {
        // Nếu category chưa có trong accumulator HOẶC giá hiện tại rẻ hơn giá đang lưu
        if (!acc[curr.category] || curr.price < acc[curr.category].price) {
            acc[curr.category] = curr;
        }
        return acc;
    }, {});
}

// 5. Tính tổng giá trị kho (price × stock cho mỗi SP)
function totalInventoryValue(arr) {
    return arr.reduce((total, p) => total + (p.price * p.stock), 0);
}

// 6. Tạo mảng chỉ chứa { name, formattedPrice }
function formatProductList(arr) {
    return arr.map(p => ({
        name: p.name,
        formattedPrice: p.price.toLocaleString('vi-VN') + "đ"
    }));
}

// 7. Tính rating trung bình toàn bộ
function averageRating(arr) {
    const totalRating = arr.reduce((sum, p) => sum + p.rating, 0);
    return (totalRating / arr.length).toFixed(2); // Giữ 2 số thập phân
}

// 8. Tìm sản phẩm theo keyword (không phân biệt hoa thường)
function searchProducts(arr, keyword) {
    const kw = keyword.toLowerCase();
    return arr.filter(p => p.name.toLowerCase().includes(kw));
}

// === TEST KẾT QUẢ ===
console.log("=== IN-STOCK PRODUCTS ===");
console.log(getInStock(products));

console.log("\n=== PHONES 15-25 TRIỆU ===");
console.log(filterProducts(products, "phone", 15000000, 25000000));

console.log("\n=== CHEAPEST BY CATEGORY ===");
console.log(cheapestByCategory(products));

console.log("\n=== TOTAL INVENTORY VALUE ===");
console.log(totalInventoryValue(products).toLocaleString('vi-VN') + "đ");