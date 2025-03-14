let arr = [];
let n = +prompt("Mời bạn nhập kích thước của mảng:");
if(!Number.isInteger(n) || n<1 || isNaN(n)){
    alert("Không hợp lệ");
}else{
    for(let i = 0 ; i < n ; i++){
        let number = +prompt(`Nhập phần tử thứ ${i + 1}`);
        if(!isNaN(arr[i])){
            alert("Không hợp lệ")
        }else{
            arr.push(number);
        }
    }
    let a = +prompt("Nhập số phần tử của mảng con:");
    if(!Number.isInteger(a) || a < 1 || isNaN(a)){
        alert("Không hợp lệ");
    }else if(a>n){
        alert("Không hợp lệ");
    }else{
        let str = [];
        for(let i=0 ;i<arr.length ; i += a){
            str.push(arr.slice(i , i + a));
        }
        console.log("Mảng sau khi chia là:" ,str);
    }
}

