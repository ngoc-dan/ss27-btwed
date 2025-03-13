let number = prompt("nhap so")
function check(str){
    let arr = str.split("")
    let array = arr.sort()
    arr = array.reverse()
    str = arr.join("")
    return str
}
if(number>0){
    alert(check(number))
}else{
    alert("du lieu khong hop le")
}