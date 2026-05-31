function formatMoney(amount) {
    return amount.toLocaleString('vi-VN') + "đ";
}

function calculateBill(items, isWednesday = false) {
    let total = 0;
    
    // Tính tổng ban đầu
    items.forEach(item => { total += item.price * item.quantity; });

    // Tính % giảm giá (Discount)
    let discountPercent = 0;
    if (total > 1000000) discountPercent += 15;
    else if (total > 500000) discountPercent += 10;
    
    if (isWednesday) discountPercent += 5; // Giảm thêm ngày thứ 3 (Wednesday)

    let discountAmount = (total * discountPercent) / 100;
    let afterDiscount = total - discountAmount;
    
    let vatAmount = (afterDiscount * 8) / 100;
    let tipAmount = (afterDiscount * 5) / 100; // Tip tính trên số tiền đã giảm
    
    let finalAmount = afterDiscount + vatAmount + tipAmount;

    // IN RA KHUNG HÓA ĐƠN
    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG              ║");
    console.log("╠══════════════════════════════════════╣");
    
    items.forEach((item, index) => {
        let stt = `${index + 1}.`;
        let name = item.name.padEnd(12);
        let qty = `x${item.quantity}`.padEnd(5);
        let price = `@${(item.price/1000)}k`.padEnd(5);
        let lineTotal = `= ${(item.price * item.quantity)/1000}k`;
        console.log(`║ ${stt} ${name} ${qty} ${price} ${lineTotal.padEnd(8)} ║`);
    });

    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:       ${formatMoney(total).padStart(19)} ║`);
    console.log(`║ Giảm giá (${discountPercent}%):   ${formatMoney(discountAmount).padStart(19)} ║`);
    console.log(`║ VAT (8%):        ${formatMoney(vatAmount).padStart(19)} ║`);
    console.log(`║ Tip (5%):        ${formatMoney(tipAmount).padStart(19)} ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:      ${formatMoney(finalAmount).padStart(19)} ║`);
    console.log("╚══════════════════════════════════════╝");
}

// Chạy test thử với danh sách món ăn
const order = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

// Để isWednesday = false để ra kết quả giảm giá 0% như đề minh họa
calculateBill(order, false);