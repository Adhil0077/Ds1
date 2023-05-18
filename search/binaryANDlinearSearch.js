// function binarySearch(arr, value) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (value === arr[mid]) {
//       return mid;
//     } else if (value < arr[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   console.log("not found");
// }

// let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(arry, 8));

// let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function linearSearch(arr,value){
//   for(let i=0;i<arr.length;i++){
//     if(arry[i]==value)
//     return i
//   }
// }

// console.log(linearSearch(arry,4));


// function binarySearch(arr,l,r,value)
// {
//   while(l<=r)
//   {
//     let mid = Math.floor((l+r)/2)
//     if(arr[mid]==value){
//       return mid
//     }else if(arr[mid]<value){
//       return binarySearch(arr,l,mid-1,value)
   
//     }else{
//       return binarySearch(arr,mid+1,r,value)
//     }
//   }
//   return null
// }

// let arr = [1,2,3,4,5,6,7,8,9]

// console.log(binarySearch(arr,0,arr.length-1,5));



// let arr = [1,2,3,4,5,6,7,8,9]
// function binarySearch(arr,value){
//   let left =0;
//   let right =arr.length-1;
//   while(left<=right){
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid]==value){
//       return mid;

//     }else if(value <arr[mid]){
//       right = mid-1;
//     }else{
//       left = mid+1
//     }
//   }
//   console.log("not found");
// }

// console.log(binarySearch(arr,5));


let arr = [1,2,3,5,6]
function sum(arr){
  if(arr.length == 0){
    return 0;
  }
    return arr[0]+sum(arr.slice(1))
  
}

console.log(sum(arr));