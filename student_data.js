const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let classTotalMath = 0, classTotalPhysics = 0, classTotalCS = 0;
let highestAvg = 0, lowestAvg = 10;
let highestStudent = "", lowestStudent = "";
const gradeCounts = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    const st = students[i];
    
    // 1. Tính TB
    const avg = (st.math * 0.4) + (st.physics * 0.3) + (st.cs * 0.3);
    const avgFixed = avg.toFixed(1);
    
    // Cộng dồn điểm lớp
    classTotalMath += st.math;
    classTotalPhysics += st.physics;
    classTotalCS += st.cs;
    
    // Tìm Min/Max
    if (avg > highestAvg) { highestAvg = avg; highestStudent = st.name; }
    if (avg < lowestAvg) { lowestAvg = avg; lowestStudent = st.name; }

    // 2. Xếp loại & 4. Đếm
    let grade = "";
    if (avg >= 8.0) { grade = "Giỏi"; gradeCounts["Giỏi"]++; }
    else if (avg >= 6.5) { grade = "Khá"; gradeCounts["Khá"]++; }
    else if (avg >= 5.0) { grade = "Trung bình"; gradeCounts["Trung bình"]++; }
    else { grade = "Yếu"; gradeCounts["Yếu"]++; }

    // 3. In bảng
    console.log(`| ${(i+1).toString().padEnd(3)} | ${st.name.padEnd(6)} | ${avgFixed.padEnd(4)} | ${grade.padEnd(11)} |`);
}

// 5. In kết quả tổng hợp
console.log("\n--- THỐNG KÊ ---");
console.log("Số lượng xếp loại:", gradeCounts);
console.log(`Cao nhất: ${highestStudent} (${highestAvg.toFixed(1)})`);
console.log(`Thấp nhất: ${lowestStudent} (${lowestAvg.toFixed(1)})`);

// 6. Trung bình từng môn
const len = students.length;
console.log(`\nTB Toán: ${(classTotalMath/len).toFixed(1)} | TB Lý: ${(classTotalPhysics/len).toFixed(1)} | TB CS: ${(classTotalCS/len).toFixed(1)}`);