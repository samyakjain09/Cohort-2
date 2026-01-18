(function (){
    console.log("hello world")
})()

let arr=[421534,564,23,56,423]
let b=[...arr]
// console.log(a)
console.log(b)

let arr2=arr.filter(function(val){
    return val >422
})
console.log(arr2);


arr.forEach(function(val){
    console.log(val)
})

let obj={name:"samyak",
    course:"btech"
};
delete obj.name;
console.log(obj)

// function unlimitedsum(...number){
//     let sum=0
//     number.forEach (function(val){
//         sum=sum+val
//     })
//     console.log(sum)
// }
unlimitedsum(213,3,5543,4,6,42,44,65,234)
function unlimitedsum(...number){
    let ans=number.reduce(function(acc,val){
        return acc+val
    },0);
    console.log(ans)
}