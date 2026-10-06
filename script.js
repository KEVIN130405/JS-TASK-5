// Currying & Uncurrying — 5 Questions
// Based on the currying/uncurrying examples in your notes. Pasted markdown
// 1.Create a curried function that accepts 3 numbers one by one and prints their sum.
function a(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
            
        }
    }
}
a(10)(20)(10)

// 2.Create a curried function that accepts name, department, and salary and prints all three values.
function b(name) {
    return function (department) {
        return function (salary) {
            console.log(name, department, salary);
            
        };
    };
}
b("kevin")("fullstack")(37000);

// 3.Create a curried function that accepts 3 numbers and prints their multiplication.
function multiply(a){
    return function (b){
        return function(c){
            console.log(a*b*c);
            
        }
    }
}
multiply(2)(2)(2)

// 4.Convert a curried function that accepts a, b, and c into an uncurried function.
function check (a, b, c){
    console.log(a + b + c);

    
}
check(2,3,1)

// 5.Write both curried and uncurried versions of a function that adds 4 numbers.
function curried(a){
    return function(b){
        return function(c){
            return function(d){
                console.log(a+b+c+d);

            }
            
        }
    }
}
curried(2)(2)(2)(2)

function uncurried(a,b,c,d){
    console.log(a+b+c+d);
    
}
uncurried(2,2,2,2)



// Spread Operator — 7 Questions
// 6.Create two arrays of 5 numbers and merge them using the array spread operator.
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]
let totalarray = [...array1,...array2]
console.log(totalarray);

// 7.Create two arrays containing student names and merge them into one array using spread.
let sname1 = ["kevin","yusuf"]
let sname2 = ["roshan","bala"]
let totalstudents = [...sname1,...sname2]
console.log(totalstudents);

// 8.Create an array and create another array containing the original values plus 3 new values using spread.
let a1 = [10,20,30,40]
let a2 = [10,20,30,40,50,60,70]
let totala = [...a1,...a2]
console.log(totala);

// 9.Create two objects containing employee details and merge them using the object spread operator.
let object1 = {
    name1 : "kevin",
    role1 : "software developer",
    salary1 : 42000
}
let object2 = {
    name : "yusuf",
    role : "AIML",
    salary : 37000

}
let totalobject = {...object1,...object2}
console.log(totalobject);

// 10.Create an employee object and create a new object by copying it and adding a salary property using spread.
let obj = {
    company : "stackly",
    role : "developer",
    name : "freakyy"
}
let obj2 = {
    company : "stackly",
    role : "developer",
    name : "rosy",
    salary : 22000

}
let merge = {...obj,...obj2}
console.log(merge);



// 11.Create two objects with different properties and combine them into one object using spread.
let property1 = {
    department : "CSE",
    cgpa : 7.94
    

}
let property2 = {
    role : "tester",
    passedout : 2026
}
let combine = {...property1,...property2}
console.log(combine);

// 12.Create two arrays and use spread to create one array in reverse order.
let arrayone = [1,2,3,4,5]
let arraytwo = [6,7,8,9,10]
let merged = [...arrayone,...arraytwo]
let reverse = [...merged].reverse()
console.log(merged);
console.log(reverse);



// Rest Operator in Functions — 6 Questions
//Your notes specifically use rest with function parameters. Pasted markdown
// 13.Create a function that accepts two fixed values and stores all remaining values using the rest operator.
function rest(a,b,...c){
    console.log(a,b,...c);
    
}
rest(1,2,3,4,5,6,7,8)

// 14.Create a function student(name, department, ...marks) and print the name, department, and marks.
function student(name,department,...marks){
    console.log(name,department,...marks);
    
}
student("kevin","cse",7.94,"developer",42000)

// 15.Create a function that accepts two numbers and any number of additional numbers using rest.
function adding(a,b,...c){
    console.log(a,b,...c);
    
}
adding(10,20,30,40,50,60,70,80)

// 16.Create a function that prints the 5th value from the rest parameter.
function parameter(a,b,c,d,...e){
    console.log(...e);
    
}
parameter(1,2,3,4,5,6,7,8,9)

// 17.Create a function that accepts product, price, and remaining values using rest and prints them.
function accepts(product,price,...model){
    console.log(product,price,...model);
    
}
accepts("Iphone",200000,2026,"18promax")

// 18.Create a function that receives 10 numbers and uses rest to store all values after the first two.
function receives(...a){
    console.log(...a);
    
}
receives(10,9,8,7,6,5,4,3,2,1)



// Array Destructuring — 5 Questions
//Based on the array and nested-array destructuring in your notes. Pasted markdown
// 19.Create an array of 4 values and extract all four values using array destructuring.
let array = [1,2,3,4];
let [j1,j2,j3,j4] = array;
console.log(j1,j2,j3,j4);

// 20.Create an array of student details and extract the first, second, and third values using destructuring.
let studentdetails = ["kevin","cse",7.94,2026]
let [name,department,cgpa,passedout] = studentdetails
console.log(name,department,cgpa);

// 21.Create an array of 5 numbers and extract only the first and fourth values using destructuring.
let arrayfive = [1,2,3,4,5]
let [b1,b2,b3,b4,b5] = arrayfive
console.log(b1,b4);

// 22.Create a nested array and extract its values using nested destructuring.
let nestedarray = [1,2,[3,4]]
let [c1,c2,[c3,c4]] = nestedarray
console.log(c1,c2,c3,c4);

// 23.Given a nested array containing numbers inside 3 levels, extract the required values using nested destructuring.
let nestedarray1 = [1,2,[3,4],[5,6]]
let [z1,z2,[z3,z4],[z5,z6]] = nestedarray1
console.log(z1,z2,z3,z4,z5,z6);

// Object Destructuring — 5 Questions
// 24.Create an employee object with name, designation, and salary. Extract all values using object destructuring.
let objdestruct = {
    namex : "kevin",
    designation : "developer",
    salary : 42000
}
let {namex,designation,salary} = objdestruct
console.log(namex,designation,salary);

// 25.Create a student object with name, department, and cgpa. Extract all values using destructuring.
let studentobject = {
    name2 : "kevin",
    department : "CSE",
    cgpa : 7.94
}
let {name2, departmenty, cgpay} = studentobject
console.log(name2,department,cgpa);

// 26.Create an object with 5 properties and extract only 3 properties using object destructuring.
let objproperty = {
    role : "software developer",
    company : "Stackly",
    salary1 : 42000,
    team : 2,
    ID : "STK-12"
}
let {role,company,salary1,team,ID} = objproperty
console.log(company,team,ID);

// 27.Create a nested object containing employee and team details. Extract the employee name and team member names using nested destructuring.
let employee = {
    Empname : "kevin",
    Empdesignation : "App developer",
    Team : {
        team1 : "yusuf",
        team2 : "rizviq"
    }
}
let {Empname,Empdesignation,Team} = employee
console.log(Empname,Team);

// 28.Create a nested object containing company → department → employee and extract the employee name using nested destructuring.
let nesteddestruct = {
    company1 : "STACKLY",
        department1 :{
             name : "development",
             employee1 :{
                name : "kevin",
                role : "developer"
             }

        }
    }

let {department1 : {employee1}} = nesteddestruct
console.log(employee1.name);


/// Array Manipulation — 10 Questions
// Your latest notes cover push, pop, shift, unshift, and splice. Pasted markdown
// 29.Create an array of 5 fruits and add 3 more fruits at the end using push().
let fruits = ["apple","orange","banana","pomogranate","grapes"]
fruits.push("kiwi","pineapple")
console.log(fruits);

// 30.Create an array of 5 numbers and remove the last value using pop().
let numbers = [1,2,3,4,5]
numbers.pop()
console.log(numbers);

// 31.Create an array of 5 student names and remove the first student using shift().
let studentnames = ["kevin","yusuf","mugil","louis","prince"]
studentnames.shift()
console.log(studentnames);

// 32.Create an array of 4 numbers and add 2 numbers at the beginning using unshift().
let numberfour = [30,,40,50,60]
numberfour.unshift(10,20)
console.log(numberfour);

// 33.Create an array [10,20,30,40,50] and replace 30 with 100 using splice().
let splice = [10,20,30,40,50,60]
splice.splice(2,1,100)
console.log(splice);

// 34.Create an array of 6 values and remove 2 values from the middle using splice().
let splice2 = [6,5,4,3,2,1]
splice2.splice(2,2)
console.log(splice2);

// 35.Create an array and add 3 new values in the middle using splice().
let splice3 = [10,20,30,40,50,60,70]
splice3.splice(2,3,3,4,5)
console.log(splice3);

// 36.Create an array and remove 2 values and add 3 new values at the same position using splice().
let splice4 = [1,2,3,4,5,6,7,8]
splice4.splice(1,2,20,30,40)
console.log(splice4);

// 37.Create a student list and remove one student from the middle using splice().
let studentlist = ["kevin","yusuf","rizviq","roshan","mugil"]
studentlist.splice(2,1)
console.log(studentlist);

// 38.Create a shopping cart array and perform push, pop, shift, and unshift operations on it.
let shoppingcart = ["shirt","shoes","watch"]
shoppingcart.push("Tshirt")
shoppingcart.pop()
shoppingcart.shift()
shoppingcart.unshift("sandals","jeans")
console.log(shoppingcart);



///Array Merge & Extraction Methods — 7 Questions
// Based on concat, slice, and flat. Pasted markdown
// 39.Create two arrays and merge them using concat().
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let totalarr = arr1.concat(arr2)
console.log(totalarr);

// 40.Create three arrays and merge all three using concat().
let one = [1,2]
let two = [3,4]
let three = [5,6]
let mergeall = one.concat(two,three)
console.log(mergeall);

// 41.Create an array of 8 values and extract values from index 2 to index 5 using slice().
let eight = [8,7,6,5,4,3,2,1]
let slice = eight.slice(2,6)
console.log(slice);

// 42.Create an array of student names and extract the first 3 students using slice().
let studentnames2 = ["kevin","mugil","louis","rithik","rizviq"]
let slice2 = studentnames2.slice(0,3)
console.log(slice2);

// 43.Create a nested array with 3 levels and convert it into a single-level array using flat().
let nestedarray2 = [1,2,3,[4,5],[6]]
let avoidnested = nestedarray2.flat(Infinity)
console.log(avoidnested);

// 44.Create a nested array with 4 levels and use flat() to remove the nesting.
let nestedarr = [9,8,7,[6,5],[4,3],[2]]
let avoidnested2 = nestedarr.flat(Infinity)
console.log(avoidnested2);

// 45.Explain through code the difference between slice() and splice() by performing an operation with both.
let slicing = [1,2,3,4,5,6,7,8]
let seperate = slicing.slice(1,6)
console.log(seperate);

slicing.splice(1,6)
console.log(slicing);



/// Search & Other Array Methods — 5 Questions
// 46.Create an array of numbers and check whether 50 exists using includes().
let numberarr = [1,20,3,40,50]
let checking = numberarr.includes(50)
console.log(checking);

// 47.Create an array containing duplicate values and find the first occurrence of a value using indexOf().
let values = [2,3,4,5,6,7]
let indexOf = values.indexOf(2)
console.log(indexOf);

// 48.Create an array containing duplicate values and find the last occurrence using lastIndexOf().
let values2 = [10,20,30,40,50,60]
let lastIndexOf = values2.lastIndexOf(60)
console.log(lastIndexOf);

// 49.Create an array of numbers and sort it using sort().
let no = [6,9,4,8,2,5,1,0,2]
let sortvalue = no.sort()
console.log(sortvalue);

// 50.Create an array of numbers and reverse its order using reverse(). Pasted markdown
let no2 = [1,2,3,4,5,6,7,8,9]
let reverseval = no2.reverse()
console.log(reverseval);




