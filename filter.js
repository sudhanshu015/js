

let arr = [1,3,45,6,7,8,9,5,4,7,3,5];

console.log(arr);

// arr = arr.filter(function fun(ele){

//     if(ele%2!=0) return true;
//     else return false;
// });
// console.log(arr);

arr = arr.filter(function fun(ele){

    if(ele<5) return true;
    else return false;
});
console.log(arr);
