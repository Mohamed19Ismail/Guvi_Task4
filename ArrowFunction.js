//>>>>>>>>>Print odd numbers in an array<<<<<<<<<<

let oddnumber = (arr) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !=0){
            console.log(arr[i])
        }
    } 
}
let numbers = [1,2,3,4,5,6,7,8,9]
oddnumber(numbers)



//>>>>>>>>>Convert all the strings to title caps in a string array<<<<<<<<<<



let convertString = (str) => {
    
    let uppercaseStr = [];
    
    for(var i =0; i < str.length ; i++){
        let modifiedstr = str[i].toUpperCase();
        uppercaseStr.push(modifiedstr)
        
    }
    
    return uppercaseStr;
}

let str = ["india", "bangalore"]
console.log(uppercaseStr = convertString(str))




//>>>>>>>>>Sum of all numbers in an array<<<<<<<<<<

let add = (sum)=>{
    let total = 0
    for(i in sum){
        total = total + sum[i] 
    }
    return total
}
let num = [1,2,3,4]
console.log(add(num));


//>>>>>>>>>Return all the prime numbers in an array<<<<<<<<<<

let prime = (check)=>{

    primenumbers = [];

    for(var i = 2; i<check.length;i++){

        if(check[i] % 2 == 0){
          
        }else{
            primenumbers.push(check[i])
            
        }
        
    }
    console.log(primenumbers)
}

numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
prime(numbers)



// Return all the palindromes in an array

const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   
    return cleanStr === cleanStr.split('').reverse().join('');
  };
  
  const array = ["racecar", "hello", "level", "world", "deified", "abcba"];
  
  const palindromes = array.filter((word) => isPalindrome(word));
  
  console.log(palindromes);