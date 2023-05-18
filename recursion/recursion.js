function sum(n){
  if(n<=1){
    return n;
  }
  return n + sum(n-1)
}

console.log(sum(4));


function print(n){
  if(n>=1){
    print(n-1)
    console.log(n)
  }
}

print(5)


function factorial(n){
  if(n<=1){
    return n;
  }
  return n * factorial (n-1)
}

console.log(factorial(5));



