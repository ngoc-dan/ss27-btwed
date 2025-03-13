let array = []
let n = +prompt("nhap kinh thuoc mang")
function check(arr, n) {
    for (let i = 1; i < n; i++) {
            if (arr[i + 1] - arr[i] !== 1) {
                return arr[i + 1] - 1
        }
    }
}
if (n > 2) {
    for (let i = 0; i < n; i++) {
        let newElement = +prompt("Mời bạn nhập phần tử muốn thêm vào mảng")
        if (Number.isInteger(newElement)) {
            array.push(newElement);
        } else {
            alert("du lieu khong hop le")
            i--
        }
    }
    alert(check(array, n))
}