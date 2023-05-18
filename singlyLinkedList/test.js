let arr = [1,2,3,4,5,6,7,8,9]

function binarySearch(arr,value,left,right){
  
  while(left<right){
    let mid = Math.floor((left+right)/2)
    if(arr[mid]==value){
      return mid
    }else if(value < arr[mid]){
      return binarySearch(arr,value,mid-1,right)
    }else{
      return binarySearch(arr,value,left,mid+1)
      
    }
  }
  console.log("not found");
}

console.log(binarySearch(arr,7,0,arr.length-1));