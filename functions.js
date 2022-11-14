function factorial(x){
    result = 1
    for(let i=1; i<= x; i++){
        result *= i;
    }
    return(result);
}

console.log(factorial(4));


function gcd(a, b) {
    var R;
    while ((a % b) > 0)  {
      R = a % b;
      a = b;
      b = R;
    }
    return b;
  }

  console.log(gcd(12,9));

// Euchlidean Algorithm 12 9
//12 = 9*1 + 3 
//9 = 3 * 3 + 0 

 function hcf(a, b){
  return gcd(a, b);
}

console.log(hcf(12,9));

 function toHexadecimal(num){
  const digits = '0123456789ABCDEF';

  let result = '';
  let final= '';
  
  while (num > 0) {
    result += digits[num % 16];
    num = Math.floor(num / 16);
  }

  
  for(let i = result.length -1; i >= 0 ; i--){
    final = final +  result[i];
  }
  return final;

} 
console.log(toHexadecimal(45));

module.exports = {
  factorial:factorial,
  gcd: gcd,
  hcf: hcf,
  toHexadecimal: toHexadecimal
};
