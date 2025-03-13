let a = +prompt("nhap so thu nhat")
let b = +prompt("nhap so thu hai")
function checksum(m,n){
    return m+n
}
function checktru(m,n){
    return m-n
}
function checknhan(m,n){
    return m*n
}
function checkchia(m,n){
    return m/n
}
let choice
let menu = `
	================== MENU ===================

    1. Cộng hai số.
    2. Trừ hai số.
    3. Nhân hai số.
    4. Chia hai số.
    5. Thoát.
 	============================================
    Lựa chọn của bạn: 
`

while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
        alert(checksum(a,b))
        break
        case 2:
            alert(checktru(a,b))
            break
        case 3:
            alert(checknhan(a,b))
            break
        case 4:
            alert(checkchia(a,b))
            break
        case 5:
            alert("thoat chuong trinh")
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}