/*
    ========== TYPES OF LOOPS THAT WE WILL COVER ===========
            - for
            - for .. in
            - for .. of
            - while
            - do .. while
            - labeled statements
*/

/*
    ========== for loops ==========
*/
// ***** General Syntax:
//      for (initialization; condition; afterthought) {
//          statements to execute
//      }
// ***** intialization - have a starting condition using a variable
// ***** condition - value of that variable that causes us to consider this complete
// ***** afterthought - changing the value of the variable to step through the iterations

// start with i = 0
// check if i < 10
// if it is, then go into the loop statements {}
//      after those are executed, increment by 1
// if it is not less than 10, you are done

for (let i=0; i<5; i++) {
    // console.log(i);
}

// you can have any intial condition, any condition to end, and you can change the variable however you want
for (let i=7; i>3; i--) {
    // console.log(i);
}

for (let i=26; i>0; i -= 3) {
    // console.log(i);
    if (i < 10) {
        // console.log('less than 10');
    } else if (i < 20) {
        // console.log('less than 20');
    }
}

for (i=10; i>0; i--) {
    // console.log(i);
}

for (i=1; i<=10; i+=2) {
    // console.log(i);
}

for (i=2; i<=10; i+=2) {
    // console.log(i);
}

for (i=6; i<=60; i+=3) {
    // console.log(i);
}

for (let i=1; i<=10; i++) {
    if (i%2 === 1) {
        // console.log(i);
    }
}

for (let i=1; i<=10; i++) {
    if (i%2 === 0) {
        // console.log(i);
    }
}

let outString = '';
for (let i=0; i<7; i++) {
    outString = outString + '#'
    // console.log(outString);
}

for (i=1; i<20; i++) {
    // print out prime for all prime numbers
    // 5, 7, 11, 13, 17, 19
    if (i===5 || i===7 || i===11 || i===13 || i===17 || i===19) {
        // console.log(i, "is prime")
    }
}

for (i=1; i<20; i++) {
    // print out prime for all prime numbers
    // 5, 7, 11, 13, 17, 19
    if (i===5 || i===7 || i===11 || i===13 || i===17 || i===19) {
        // console.log("prime")
    }
}

for (i=1; i<20; i++) {
    // print out prime for all prime numbers
    // 5, 7, 11, 13, 17, 19
    if (i===5 || i===7 || i===11 || i===13 || i===17 || i===19) {
        // console.log("prime")
    } else if (i%2 === 0) {
        // console.log("even")
    } else if (i%2 === 1) {
        // console.log("odd")
    }

}

/*
    ========= Looping through iterables =========
    for .. in
    for .. of
*/
// what is iterable?
//  something where you can go through each element individually
//      examples are strings, arrays, objects...


// ***** str.length this length property is part of string, and it is also a part of arrays
//          it is useful because we don't always know the length of the array
//          so we can use this property
const testStr = 'this will work for any length string';
// console.log(`__${testStr}__ has a length of ${testStr.length}`);

const str = "Hello World";
for (let i=0; i<str.length; i++) {
    // console.log(str[i]);
}

// for .. in
// like a for loop from above, where the built in condition is the length of the string (or iterable we are)
// and we go up by one each time
for (const i in str) {
    // console.log(str[i]);
}


