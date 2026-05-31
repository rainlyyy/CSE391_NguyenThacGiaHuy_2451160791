const targetNumber = Math.floor(Math.random() * 100) + 1;
const maxTries = 7;
let attempts = 0;
let guessedNumbers = [];

alert("Chào mừng đến với game Đoán Số!\nMáy đã chọn một số từ 1 đến 100. Bạn có 7 lần đoán.");

while (attempts < maxTries) {
    let input = prompt(`Lần đoán thứ ${attempts + 1}/${maxTries}.\nNhập một số từ 1 - 100:`);
    
    // Handle cancel
    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    let guess = Number(input);

    // Validate
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Vui lòng nhập một SỐ hợp lệ từ 1 đến 100!");
        continue;
    }

    if (guessedNumbers.includes(guess)) {
        alert(`Bạn đã đoán số ${guess} này rồi! Hãy thử số khác.`);
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    // Logic
    if (guess === targetNumber) {
        alert(`🎉 Chính xác! Bạn đoán đúng số ${targetNumber} sau ${attempts} lần!`);
        break;
    } else if (guess > targetNumber) {
        alert("Thấp hơn! Hãy thử số nhỏ hơn.");
    } else {
        alert("Cao hơn! Hãy thử số lớn hơn.");
    }

    if (attempts === maxTries) {
        alert(`💀 Bạn đã hết lượt! Số chính xác là ${targetNumber}. Game Over.`);
    }
}