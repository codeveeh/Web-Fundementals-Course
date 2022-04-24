var arr = ["a", "b", "c", "d", "e"] // this line shows the array 
// we have an array of 5 different letters here


console.log(arr); // this line will log in the array

function reverse(){ // this line sets the function
    for (var x = 0; x < arr.length/2; x++){
        var y = arr.length - 1 - x; 
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
}

reverse(arr);
console.log(arr);

var arr2 = ["a", "b", "c", "d", "e"];
var temp = []

function reverse(arr){
    counter = arr.length-1;
    while(counter >= 0){
        temp.push(arr[counter]);
        counter--;
    }
}
reverse(arr2);
console.log(temp);
arr2 = temp;
console.log(arr2)








