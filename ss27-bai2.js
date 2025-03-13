let students = [];
let n;

let menu = `
    1.Nhập danh sách sinh viên
    2. Hiển thị danh sách sinh viên
    3. Tìm sinh viên theo tên
    4. Xóa sinh viên khỏi danh sách
    5. Thoát
    Nhập lựa chọn kủa bạn:
`

let choice;
do{
    choice = +prompt(menu);
    switch(choice){
        case 1:
            n = +prompt("Nhập số lượng sinh viên");
            if(n > 0){
                addSt(students, n);    
            }else{
                alert("Không hợp lệ");
            }
            break;
        case 2:
            if(n > 0){
                displaySt(students, n);    
            }else{
                alert("chua tao danh sach sv");
            }
            break;
        case 3:
            if(n > 0){
                searchSt(students);
            }else{
                alert("chua tao danh sach sv");
            }
            break;
        case 4:
            if(n > 0){
                deleteSt(students, n);   
            }else{
                alert("chua tao danh sach sv");
            }
            break;
        case 5:
            alert("Thoát khỏi menu");
            break;
        default:
            break;
    }
}while(choice !== 5);


function addSt(arr, length){
    for(let i = 0; i < length; i++){
        arr.push(prompt(`Nhập tên sinh viên thứ ${i + 1}: `));
    }
};
function displaySt(arr, length){
    for(let i = 0; i < length; i++){
        console.log(`${i + 1}: ${arr[i]}`);
    }
};
function searchSt(arr){
    var search = prompt("Nhập sinh viên muốn tìm");
    let result = arr.filter((value) => value === search);
    if(result.length > 0){
        return console.log(...result);
    }else{
        return console.log("Không tìm thấy");
    }
};
function deleteSt(arr, length){
    var nameDelete = prompt("Nhập sinh viên muốn xóa");
    for(let i = 0; i < length; i++){
        if(nameDelete === arr[i]){
            arr.splice(i, 1);
            length--;
            break;
        }
    }
};