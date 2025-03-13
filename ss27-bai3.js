let r = +prompt("nhap ban kinh")
let a = +prompt("nhap chieu dai")
let b = +prompt("nhap nhap chieu rong")
function circularArea(n){
    return 3.14 * n * n
}
function circularCircumference(n){
    return 2* 3.14 *n
}
function areaOfRectangle(m,n){
    return m*n
}
function perimeterOfRectangle(m,n){
    return 2*(m+n)
}
let choice
let menu = `
	================== MENU ===================

    1. Tính diện tích hình tròn.
    2. Tính chu vi hình tròn.
    3. Tính diện tích hình chữ nhật.
    4. Tính chu vi hình chữ nhật.
    5. Thoát.
 	============================================
    Lựa chọn của bạn: 
`

while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
        alert(circularArea(r))
        break
        case 2:
            alert(circularCircumference(r))
            break
        case 3:
            alert(areaOfRectangle(a,b))
            break
        case 4:
            alert(perimeterOfRectangle(a,b))
            break
        case 5:
            alert("thoat chuong trinh")
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}