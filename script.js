//1 Make a program to reverse the array without using the built-in array function.
let arr = [1, 2, 3, 4, 5];
function reverseArr(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArr(arr));

//2 Make a program to sort an array without using the built-in array function.

let arr1 = [5, 3, 7, 4, 2, 9];
function sortArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortArr(arr1));

//3 Make a program to remove elements at a given position in an array without using a built-in array function.
let arr2 = [10, 20, 30, 40, 50];

function removeArr(arr2, position) {
  if (position < 0 || position >= arr2.length) {
    return arr2;
  }
  let newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (i !== position) {
      newArr[newArr.length] = arr2[i];
    }
  }

  return newArr;
}

console.log(removeArr(arr2, 2));

//4 Make a program to add elements at a given position and value in an array without using a built-in array function.
let arr3 = [10, 20, 30, 40, 50];

function addElement(arr, position, value) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === position) {
      newArr[newArr.length] = value;
    }
    newArr[newArr.length] = arr[i];
  }

  return newArr;
}

console.log(addElement(arr3, 2, 25));

// 5 check given string is a palindrome or not.
function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

console.log(isPalindrome("racecar"));

//6 check given number is an Armstrong number or not.
function isArmstrongNumber(num) {
  const numStr = num.toString();
  const numDigits = numStr.length;

  let sum = 0;
  for (let digit of numStr) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === num;
}

console.log(isArmstrongNumber(153));

//7 Program to find out the prime factor of a given number.
function primeFactors(n) {
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

console.log(primeFactors(56));

//8 Find out the largest number from the array.
const arr7 = [10, 20, 30, 40, 50, 60];
const newArr7 = Math.max(...arr7);
console.log(newArr7);

//9 Find out the second largest number of given unsorted arrays.
const arr8 = [7, 8, 4, 5, 3, 10];

const newArr8 = arr8.sort((a, b) => b - a);
let secondLargest = newArr8[1];

if (newArr8[0] === newArr8[1]) {
  for (let i = 2; i < newArr8.length; i++) {
    if (newArr8[i] !== newArr8[0]) {
      secondLargest = newArr8[i];
      break;
    }
  }
}

console.log(secondLargest);

//10 Insert and delete the element at the given desired position in the array.
function insert(arr, index, element) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }

  arr[index] = element;
  return arr;
}

arr = insert([1, 2, 3, 4, 5], 2, 99);
console.log(arr);

//11 Program to swap two strings and two arrays.
function swapArrays(arr1, arr2) {
  return ([arr1, arr2] = [arr2, arr1]);
}

function swapStrings(str1, str2) {
  let temp = str1;
  str1 = str2;
  str2 = temp;
  return [str1, str2];
}

console.log(swapStrings("Hello", "world"));
console.log(swapArrays([1, 2, 3], [4, 5, 6]));

//12 Program to swap two numbers without using a third variable.
let a = 5;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a}, b = ${b}`);

//13 Make a program to merge two arrays, sort and reverse arrays without using the built-in array function.
function mergeSortReverse(arr1, arr2) {
  let mergedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i]);
  }

  for (let i = 0; i < mergedArray.length - 1; i++) {
    for (let j = 0; j < mergedArray.length - 1 - i; j++) {
      if (mergedArray[j] > mergedArray[j + 1]) {
        let temp = mergedArray[j];
        mergedArray[j] = mergedArray[j + 1];
        mergedArray[j + 1] = temp;
      }
    }
  }
  let reversedArray = [];
  for (let i = mergedArray.length - 1; i >= 0; i--) {
    reversedArray.push(mergedArray[i]);
  }

  return reversedArray;
}

console.log(mergeSortReverse([3, 1, 4], [5, 9, 2]));

//14 Make a program to remove duplicate numbers from the array and Print a sorted array without using any built-in function.
function removeDuplicatesAndSort(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }

  for (let i = 0; i < uniqueArr.length; i++) {
    for (let j = i + 1; j < uniqueArr.length; j++) {
      if (uniqueArr[i] > uniqueArr[j]) {
        let temp = uniqueArr[i];
        uniqueArr[i] = uniqueArr[j];
        uniqueArr[j] = temp;
      }
    }
  }

  return uniqueArr;
}

console.log(removeDuplicatesAndSort([5, 3, 8, 3, 1, 5, 7, 8, 2]));

//15 Write a JavaScript program to reverse a given string without built-in.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Hello, World!"));

//16 Make a program to print the Fibonacci Series.
let n = 10;
function fibonacciSeries(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacciSeries(n));

//17 Implement Binary Search Algorithm.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));

//18 program for Floyd’s triangle.
function floydsTriangle(rows) {
  let num = 1;
  for (let i = 1; i <= rows; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(row);
  }
}

floydsTriangle(5);

//19 check given number is a strong number or not
function isStrongNumber(num) {
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  let numStr = num.toString();
  let sum = 0;

  for (let digit of numStr) {
    sum += factorial(parseInt(digit));
  }

  return sum === num;
}

console.log(isStrongNumber(145));

//20 Factorial of numbers using recursion.
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

//21 implement sorting algorithm
let arr14 = [10, 20, 30, 40, 50];

function bubbleSort(arr14) {
  let n = arr14.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr14[j] > arr14[j + 1]) {
        [arr14[j], arr14[j + 1]] = [arr14[j + 1], arr14[j]];
      }
    }
  }
  return arr14;
}

console.log(bubbleSort(arr14));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
}

const array = [12, 11, 13, 5, 6];
console.log(insertionSort(array));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

console.log(heapSort([12, 11, 13, 5, 6, 7]));

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([12, 11, 13, 5, 6, 7]));


function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

     
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) { 
              minIndex = j; 
          }
      }

      
      if (minIndex !== i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
  }

  return arr;
}


console.log(selectionSort( [64, 25, 12, 22, 11]));

