var numberArr = [];
function themSo() {
  var number = document.querySelector("#number").value * 1;
  if (number == 0) {
    number = Math.floor(Math.random() * 100);
  }
  numberArr.push(number);
  //   show thông báo
  Swal.fire({
    title: "Kết quả",
    text: `Array: ${numberArr}`,
    icon: "success",
    confirmButtonText: "Tiếp tục",
  });
}
// 1. Tính tổng số dương
var result1 = 0;
function tinhTongSoDuong() {
  numberArr.forEach(function (item) {
    if (item > 0) result1 = result1 + item;
  });
  Swal.fire({
    title: "Kết quả",
    text: `Tổng số dương: ${result1}`,
    icon: "success",
    confirmButtonText: "Tiếp tục",
  });
}
// 2. Đếm số dương
var result2 = 0;
function demSoDuong() {
  numberArr.forEach(function (item) {
    if (item > 0) result2++;
  });
  Swal.fire({
    title: "Kết quả",
    text: `Số lượng số dương: ${result2} số`,
    icon: "success",
    confirmButtonText: "Tiếp tục",
  });
}
// 3. Tìm số nhỏ nhất
function timSoNhoNhat() {
  var soNhoNhat = numberArr[0];
  numberArr.forEach(function (item) {
    if (item < soNhoNhat) soNhoNhat = item;
  });
  Swal.fire({
    title: "Kết quả",
    text: `Số nhỏ nhất: ${soNhoNhat}`,
    icon: "success",
    confirmButtonText: "Tiếp tục",
  });
}
// 4. Tìm số dương nhỏ nhất

function timSoDuongNhoNhat() {
  var soDuongNhoNhat = null;
  numberArr.forEach(function (item) {
    if (item > 0 && (soDuongNhoNhat == null || item < soDuongNhoNhat)) {
      soDuongNhoNhat = item;
    }
  });
  if (soDuongNhoNhat > 0) {
    Swal.fire({
      title: "Kết quả",
      text: `Số dương nhỏ nhất là: ${soDuongNhoNhat}`,
      icon: "success",
      confirmButtonText: "Tiếp tục",
    });
  } else {
    Swal.fire({
      title: "Kết quả",
      text: `Không có số dương trong chuỗi`,
      icon: "success",
      confirmButtonText: "Tiếp tục",
    });
  }
}
// Bài 5. Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
  var soChanCuoiCung = null;
  for (var i = numberArr.length; i >= 0; i--) {
    if (numberArr[i] % 2 == 0) {
      soChanCuoiCung = numberArr[i];
      break;
    }
  }
  if (soChanCuoiCung == null) {
    Swal.fire({
      title: "Kết quả",
      text: `Không có số chẵn trong chuỗi`,
      icon: "success",
      confirmButtonText: "Tiếp tục",
    });
  } else {
    Swal.fire({
      title: "Kết quả",
      text: `Số chẵn cuối cùng trong chuỗi là ${soChanCuoiCung}`,
      icon: "success",
      confirmButtonText: "Tiếp tục",
    });
  }
}
// Bài 6.  Đổi chỗ
function doiCho() {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;
  if (
    viTri1 < 0 ||
    viTri1 >= numberArr.length ||
    viTri2 < 0 ||
    viTri2 >= numberArr.length
  ) {
    Swal.fire({
      title: "Kết quả",
      text: `Vị trí không hợp lệ`,
      icon: "success",
      confirmButtonText: "Tiếp tục",
    });
  } else {
    const temp = numberArr[viTri1];
    numberArr[viTri1] = numberArr[viTri2];
    numberArr[viTri2] = temp;
    Swal.fire({
      title: "Kết quả",
      text: `Kết quả: ${numberArr}`,
      icon: "success",
      confirmButtonText: "Tiếp tục",
    });
  }
}
// Bài 7. Sắp xếp tăng dần
function sapXepTangDan() {
  numberArr.sort();
  Swal.fire({
    title: "Kết quả",
    text: `Kết quả: ${numberArr}`,
    icon: "success",
    confirmButtonText: "Tiếp tục",
  });
}
// Bài 8 tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
  function isPrimeNumber() {
    if (number <= 1) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
  function findFirstPrimeNumber(numberArr) {
    for (const number of numberArr) {
      if (isPrimeNumber(number)) {
        return number;
      }
    }
    return null;
  }
  if (findFirstPrimeNumber == null) {
    Swal.fire({
      title: "Kết quả",
      text: `Không có số nguyên tố trong chuỗi`,
      icon: "success",
      confirmButtonText: "Tiếp tục",
    });
  } else {
    Swal.fire({
      title: "Kết quả",
      text: `Số nguyên tố đầu tiên là ${findFirstPrimeNumber()}`,
      icon: "success",
      confirmButtonText: "Tiếp tục",
    });
  }
}
