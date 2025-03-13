let array = [5, 8, 6, 3, 4, 2, 9]
function sortEvenNumbers(arr) {// Lọc và sắp xếp các số chẵn
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    return arr.map(num => (num % 2 === 0 ? evenNumbers.shift() : num));
}
alert(sortEvenNumbers(array))