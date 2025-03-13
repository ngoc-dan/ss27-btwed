let array = []
let n = +prompt("Mời bạn nhập vào số lượng phần tử muốn thêm vào mảng");
function curvedAverage(arr,n) {
    let tbc =0;
    for(let i=0;i<n;i++){
        tbc =tbc + arr[i]
    }
    tbc =tbc/n
    return tbc
}
function checkMax(arr, n) {
    let max=0
    for(let i=0;i<n;i++){
        if(arr[i]%2==0 && max<arr[i]){
            max=arr[i]
        }
    }
    return max
}
function checkMin(arr, n) {
    let max=arr[0]
    for(let i=1;i<n;i++){
        if(arr[i]%2!=0 && min>arr[i]){
            min=arr[i]
        }
    }
    return max
}
let choice
let menu = `
	================== MENU ===================

    1. Nhập danh sách số nguyên.
    2. Tính trung bình các số.
    3. Tìm số chẵn lớn nhất.
    4. Tìm số lẻ nhỏ nhất.
    5. Thoát.
 	============================================
    Lựa chọn của bạn: 
`

while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            for (let i = 0; i < number; i++) {
                let newElement = +prompt("Mời bạn nhập phần tử muốn thêm vào mảng");
                arr.push(newElement);
            }
            console.log(arr);
            break;
        case 2:
            alert(curvedAverage(array,n))
            break
        case 3:
            alert(checkMax(array, n))
            break
        case 4:
            alert(checkMin(array, n))
            break
        case 5:
            alert("thoat chuong trinh")
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}