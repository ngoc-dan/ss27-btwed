let array = []
let n = +prompt("nhap kinh thuoc mang")
function check(arr, n) {
    let m = arr[1] - arr[0]
    for (let i = 1; i < n; i++) {
        if (arr[i + 1] - arr[i] == m) {
            if (arr[i + 1] - arr[i] !== m) {
                return "FALSE";
            }
        }
    }
        return "TRUE"
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
