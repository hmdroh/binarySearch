//Binary Search Example:

function binSearch(arr, data){
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound){
        var mid = Math.floor((upperBound + lowerBound) / 2 );
        if(arr[mid] < data){
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data){
            upperBound = mid - 1;
        }
        else {
            return mid;
        }

    }
    return -1;
}
//note the data should be sorted:
var nums = [1, 3, 4, 10, 22, 33, 55, 100, 123, 300];

var val = 10;
var retVal = binSearch(nums, val);

if(retVal >= 0){
    console.log("Found " + val + " at position " + retVal);
} else {
    console.log("Value " + val +  " Not found.")
}
