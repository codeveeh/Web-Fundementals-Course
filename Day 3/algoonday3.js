// conditional
// is anything that resolves (turns into or becomes)
// true or false 
// true and false are boolien values
// < > these are known as conditionals 
// var is happy = true is just a variable
// for (vari=0; is happy; i++) would be a forever statement
// if (i>5) is happy is false 
// would stop the forever statement 
// so we say if (some conditional){
    //code in between 10 and 12
//}
// and if that condition is true it runs the statement
// an addition to the if portion we can also have a
// }else portion
// also from an if statement you may see an else if 
//statement. 
// You can combine your previous if statement with that as well

var age = 10
var ishappy = true


function checkAge(age){
    if(age>16){
        console.log('you can borrow my keys')
        if(age > 75){
            console.log('lets get more insurance')
        }
        
    }else if (age==16){
        console.log('you can drive ill come with')
    }else if(age<10){
        console.log('sorry my trike is broken')
    
    }else{
        console.log('you can borrow my bike')
    }
}

checkAge(age)

checkAge(17)

// in addition to all this we can flip the result of a boolian
// by adding an exclamation mark to it
// for example
!ishappy 
if(age != 5){

}