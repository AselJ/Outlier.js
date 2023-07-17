// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

function largeOutlier(arr) {

  let evenCount = 0;
  let oddCount = 0;
  let lastEven;
  let lastOdd;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenCount++;
      lastEven = num;
    } else {
      oddCount++;
      lastOdd = num;
    }

    if (evenCount > 1 && oddCount > 1) {
      break;
    }
  }

  if (evenCount === 1) {
    return lastEven;
  } else {
    return lastOdd;
  }
}

const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]; 
console.log(largeOutlier(arr1))//Should return: 11 (the only odd number)

const arr2 = [160, 3, 1719, 19, 11, 13, -21];
console.log(largeOutlier(arr2))// Should return: 160 (the only even number)