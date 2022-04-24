//Lesson 1 - Predict the output
// variable here is 25
var a = 25;
// this turns to 25-13
a = a - 13;
// 
console.log(a/2);
    // by 
a = "hello";
console.log(a + " hello");


//Lesson 2 - Predict Loops
// ++ this is known as an incrementer
// incrementer will always add plus 1
// first log is zero then i + 3
// greater than zero making it 1 
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);




//Lesson 3 - Predict what the code does
function getTotal(arrayOfNumbers) {
    // variable is the array of numbers
    // value is 1, 3, 5
    // sum  = 1
    // declare the loop, i = to 0 
    // += this is the same as saying +1 
    // that permanently adds to it 
    var sum = arrayOfNumbers[0];
      
    for(var i=0; i<arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
      console.log("the current sum is: " + sum); 
    }
      
    console.log("the total is: " + sum);
      
  }
      
  getTotal([1, 3, 5]); // this is the array here
  // 



  