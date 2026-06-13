let arr = [1,-2,-5,-67,-4,678]
console.log(arr);
// arr=arr.sort((a,b)=>b-a);// reverce order me sort krta hai b-a
// console.log(arr);

arr=arr.sort((a,b)=>Math.abs(a)-Math.abs(b));// reverce order me sort krta hai b-a
console.log(arr);



// let brr = [13,45,6,7,-8,-2,-9];
//  console.log(brr.sort()); // negative ke liye galt sorting krta hai
  // isko thik krne ke liye 

  let brr = [13,45,6,7,-8,-2,-9];
  brr=brr.sort((a,b)=>a-b)
  console.log(brr);
  