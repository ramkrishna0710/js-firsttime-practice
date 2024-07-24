// FOR LOOP

// for (let i = 0; i < 10; i++) {
//     // console.log(i);
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${j}`);
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// let myArray = ["Dhoni", "Virat", "Sachin"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }


//  break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5 || i == 13) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}