// 1. Nhập dữ liệu
let toan = Number(prompt("Nhập điểm Toán:"));
let van = Number(prompt("Nhập điểm Văn:"));
let anh = Number(prompt("Nhập điểm Anh:"));

// 2. Tính điểm trung bình
let diemTrungBinh = (toan + van + anh) / 3;

// 3. In kết quả
console.log("Điểm Toán:", toan);
console.log("Điểm Văn:", van);
console.log("Điểm Anh:", anh);
console.log("Điểm trung bình:", diemTrungBinh);

// 4. Kiểm tra kết quả
if (diemTrungBinh >= 5) {
    console.log("Bạn ĐẠT");
} else {
    console.log("Bạn KHÔNG ĐẠT");
}