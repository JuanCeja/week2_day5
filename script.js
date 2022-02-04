// Always Hungry

function alwaysHungry(arr) {
    var foodCount = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            foodCount++;
            console.log("yummy");
        }
    }
    if (foodCount == 0){
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);


// High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Better than average

function betterThanAverage(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }

    var count = 0
    var avg = sum / arr.length

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > avg){
            count++
        }
    }
    
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Array Reverse

function reverse(arr) {
    for(var i = 0; i < arr.length / 2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i -1] = temp;
    }// your code here
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Fibonazzi Array

function fibonacciArray(n) {
   
    var fibArr = [0, 1];

    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
        }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);
