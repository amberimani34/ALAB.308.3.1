
console.log('Part 1');
for (let i=1; i<=100; i++) {
    // console.log(i);
 if (i%3 === 0 && i%5 === 0) {
    console.log('Fizz Buzz');
} else if (i%3 === 0) {
    console.log('Fizz');
} else if (i%5 === 0) {
    console.log('Buzz');
} else {
    console.log(i);
}
}

console.log('Part 2');
let n = 50
while (n >= 2) {
    if (n === 2 || n === 3 || n === 5 || n === 7 || n === 11 || n === 13 || n === 17 || n === 19 || n === 23 || n === 29 || n === 31 || n === 37 || n === 41 || n === 43 || n === 47 || n === 53) {
        console.log(n);
    }   n--;
}

console.log('Part 2 Continued')
n = 5;
let nextNum = n+1
while (true) {
let isPrime = true;
for (let i = 2; i < nextNum; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(n);
    break;
}
n++;
}


console.log('Part 3')
// const cell1 = 'ID, Name, Occupation, Age'
// const cell2 = '42, Bruce, Knight, 41'
// const cell3 = '57, Bob, Fry Cook, 19'
// const cell4 = '63, Blaine, Quiz Master, 58'
// const cell5 = "98, Bill, Doctor’s Assistant, 26"
// console.log(cell1, cell2, cell3, cell4, cell5)

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let cellNum = 1;

for (let i = 0; i < csvData.length; i++) {
    let char = csvData[i];

    if (char == "," || char == "\n") {
      switch (cellNum) {
          case 1:
              cell1 = cell;
              break;
          case 2:
              cell2 = cell;
              break;
          case 3:
              cell3 = cell;
              break;
          case 4:
              cell4 = cell;
              break;
      }
      if (cellNum == 4){
          cellNum = 1;
      }
      else {
          cellNum += 1;
      }
      cell = "";
  } else {
      cell += char;
  }
    if (char == "\n"){
        console.log(cell1, cell2, cell3, cell4);
        cell = "";
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    }
}
