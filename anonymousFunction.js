//>>>>>>>>>Print odd numbers in an array<<<<<<<<<<

let oddnumber = function(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !=0){
            console.log(arr[i])
        }
    } 
}
let numbers = [1,2,3,4,5,6,7,8,9]
oddnumber(numbers)


//>>>>>>>>>Convert all the strings to title caps in a string array<<<<<<<<<<



let convertString = function(str) {
    
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



let add = function(sum){
    let total = 0
    for(i in sum){
        total = total + sum[i] 
    }
    return total
}
let num = [1,2,3,4]
console.log(add(num));



//>>>>>>>>>Return all the prime numbers in an array<<<<<<<<<<



let prime = function(check){

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



const isPalindrome = function(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   
    return cleanStr === cleanStr.split('').reverse().join('');
  };
  
  const array = ["racecar", "hello", "level", "world", "deified", "abcba"];
  
  const palindromes = array.filter((word) => isPalindrome(word));
  
  console.log(palindromes);





//Return median of two sorted arrays of the same size.


  const findMedian = (arr1, arr2) => {
    const combinedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(combinedArray.length / 2);
  
    if (combinedArray.length % 2 === 0) {
      
      return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
    } else {
     
      return combinedArray[mid];
    }
  };
  
  const arr1 = [1, 3, 8];
  const arr2 = [7, 9, 10];
  
  const median = findMedian(arr1, arr2);
  console.log(median);



//Remove duplicates from an array


let array1 = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = array.filter(function(item, index, self) {
  return self.indexOf(item) === index;
});

console.log(uniqueArray);



//Rotate an array by k times



let rotateArray = (arr, k) => {
    if (k < 0) {
      k = k + arr.length;
    }
    
    k = k % arr.length;
    
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    return rotatedArray;
  };
  
  const originalArray = [1, 2, 3, 4, 5];
  const k = 2;
  
  const rotatedArray = rotateArray(originalArray, k);
  console.log(rotatedArray);