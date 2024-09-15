// //BT.1
// alert("Xin Chào");

// //BT.2
// let i = 10;
// let f = 20.5;
// let b = true;
// let s = "Hà Nội";

// console.log(i);
// console.log(f);
// console.log(b);
// console.log(s);

//BT.3
// var a = 10;
// var b = 20;
// var c = a * b;
// document.write("Diện tích hình chữ nhật là: " + c);

// //BT.4
// var a = confirm("Bạn đã đủ 18 tuổi chưa?");
// console.log(a);

// //BT.5
// let vatLy = Number(prompt("Nhập điểm Vật lý:"));
// let hoaHoc = Number(prompt("Nhập điểm Hóa học:"));
// let sinhHoc = Number(prompt("Nhập điểm Sinh học:"));

// // Tính tổng điểm
// let tongDiem = vatLy + hoaHoc + sinhHoc;

// // Tính điểm trung bình
// let diemTrungBinh = tongDiem / 3;

// // In kết quả ra console
// console.log("Tổng điểm: " + tongDiem);
// console.log("Điểm Trung Bình: " + diemTrungBinh);

//BT.6
// let a = +prompt("Nhập giá tri C:");
// let b = (a * 9) / 5 + 32;
// console.log("Giá trị F là: " + b);

//BT.7
// let a = +prompt("Chiều dài hình chữ nhật");
// let b = +prompt("Chiều rộng hình chữ nhật");
// //Chu vi hình chữ nhật
// let cv = (a + b) * 2;
// //Diện tích hình chữ nhật
// let dt = a * b;
// //
// console.log("Chu vi hình chữ nhật: " + cv.toFixed(2));
// console.log("Diện tích hình chữ nhật: " + dt.toFixed(2));

//BT.8
// const PI = Math.PI;
// let a = +prompt("Bán kính hình tròn:");
// //diện tích hình tròn
// let b = PI * Math.pow(a, 2);
// //chu vi hình tròn
// let c = 2 * PI * a;
// //
// console.log("Chu vi hình tròn:" + c.toFixed(2));
// console.log("Diện tích hình tròn: " + b.toFixed(2));
// toFixed(2): Định dạng kết quả với 2 chữ số sau dấu thập phân để kết quả dễ đọc hơn.

//BT.9
// let a = 5;
// let b = "5";
// // == [so sánh trù tượng]
// // === [so sánh nghiêm ngặt]
// console.log(a == b);
// console.log(a === b);
// // != [không bằng ( no equal )]
// // !== [không bằng chính xác ( Strictly not equal )]
// console.log(a != b);
// console.log(a !== b);

//BT.10
let a = 6;
let result = ++a + a + a++ + ++a + a;
