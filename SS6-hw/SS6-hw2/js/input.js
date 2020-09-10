let n = parseInt(prompt("nhập số phần tử mảng: "));
while (n == 0 || n == 1) {
    alert('bạn phải nhập lại')
    n = parseInt(prompt("nhập số phần tử mảng: "))
}
let arrNumb = [];
for (i = 0; i < n; i++) {
    let numbers = (prompt("nhập số nguyên dương :"));
    arrNumb.push(numbers);
}
console.log(arrNumb);
let divideNumb = parseInt(prompt("nhập số bị chia: "));
while (divideNumb == 0 || divideNumb == 1) {
    divideNumb = parseInt(prompt("nhập số bị chia: "));
}
let total = 0;
for (let i = 0; i < arrNumb.length; i++) {
    for (let j = i + 1; j < arrNumb.length; j++) {
        if ((parseInt(arrNumb[i]) + parseInt(arrNumb[j])) % divideNumb == 0) {
            console.log(arrNumb[i] + "," + arrNumb[j])
            total++
        }
    }
}
if (total == 0) {
    console.log("không tồn tại cặp số chia hết cho:" + divideNumb)
}