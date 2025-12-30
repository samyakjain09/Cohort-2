// let passward = 'samyak';

// let first = prompt("phela passward")
// if (first == passward) {
//     console.log("done");
// }
// else {
//     let second = prompt("second passward")
//     if (second == passward) {
//         console.log("done");
//     }
//     else {
//         let third = prompt("third passward")
//         if (third == passward) {
//             console.log("done");
//         }
//         else {
//             let third = prompt("third passward")
//             if (third == passward) {
//                 console.log("done");
//             }
//             else {
//                 console.error("acess denied");
//             }
//         }
//     }
// }
let passward="samyak";
let first = prompt("passward bta bhai");
attempt=1;
while (first !== passward){
    if (attempt==3){
        console.error("account blocked");
        break;
    }
    prompt("passward bta bhai");
    attempt++
}

