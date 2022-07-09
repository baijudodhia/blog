---
layout: post
title: "Javascript Basics"
date: 2022-07-05 12:00:00 +0530
author: Baiju Dodhia
category: technology
tags: javascript js-basics js-functions js-closure -js-settimeout
excerpt: Basic concepts in Javascript.
---

![Wallpaper](https://source.unsplash.com/1600x600/?javascript)

### #1 - Execution Context
- Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs. It is an abstract concept that hold info about the env. within the current code is being executed.
- In the container the first component is memory component and the 2nd one is code component
- Memory component has all the variables and functions in key value pairs. It is also called Variable environment. Code component is the place where code is executed one line at a time. It is also called the Thread of Execution. JS is a synchronous, single-threaded language
    - Synchronous: One command at a time.
    - Single-threaded: In a specific synchronous order.


### #2: How JS is executed & Call Stack ?

- When a JS program is ran, a global execution context is created. The execution context is created in two phases.
    - Memory creation phase - JS will allocate memory to variables and functions. 
    - Code execution phase - Let's consider the below example and its code execution steps:

{% highlight javascript linenos %}
var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);
{% endhighlight %}

- Javascript manages code execution context creation and deletion with the the help of Call Stack. Call Stack is a mechanism to keep track of its place in script that calls multiple function.
- Call Stack maintains the order of execution of execution contexts. It is also known as Program Stack, Control Stack, Runtime stack, Machine Stack, Execution context stack.


### #3: Hoisting in JavaScript (Variables & Functions)

- Let's observe the below code and it's explaination:

{% highlight javascript linenos %}
getName(); // Hello World console.log(x); // undefined
var x = 7;

function getName() {
    console.log("Hello World");
}
{% endhighlight %}

- It should have been an outright error in many other languages, as it is not possible to even access something which is not even created (defined) yet but in JS we know that in memory creation phase it assigns undefined and puts the content of function to function's memory. And in execution, it then executes whatever is asked. Here, as execution goes line by line and not after compiling, it could only print undefined and nothing else. This phenomenon, is not an error. However, if we remove var x = 7; then it gives error. Uncaught ReferenceError: x is not defined
- Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.
- So in previous part, we learnt that execution context gets created in two phase, so even before code execution, memory is created so in case of variable, it will be initialized as undefined while in case of function the whole function code is placed in the memory. 

Example:

{% highlight javascript linenos %}
getName(); // Hello World
console.log(x); // Uncaught Reference: x is not defined.
console.log(getName); // function getName(){ console.log("Hello World); }
function getName() {
  console.log("Hello World");
}
{% endhighlight %}

- Now let's observe a different example and try to understand the output.

{% highlight javascript linenos %}
getName(); // Uncaught TypeError: getName is not a function console.log(getName);
var getName = function() {
    console.log("Hello World");
}
// The code won't execute as the first line itself throws an TypeError.
{% endhighlight %}

### #4: Functions and Variable Environments

{% highlight javascript linenos %}
var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
console.log(x);

function a() {
    var x = 10; // local scope because of separate execution context console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}
{% endhighlight %}

Outputs:
10
100
1

### #5: Shortest JS Program, window & this keyword

- The shortest JS program is empty file. Because even then, JS engine does a lot of things. As always, even in this case, it creates the GEC which has memory space and the execution context.
- JS engine creates something known as 'window'. It is an object, which is created in the global space. It contains lots of functions and variables. These functions and variables can be accessed from anywhere in the program. JS engine also creates a this keyword, which points to the window object at the global level. So, in summary, along with GEC, a global object (window) and a this variable are created.
- In different engines, the name of global object changes. Window in browsers, but in nodeJS it is called something else.
- At global level, this === window
- If we create any variable in the global scope, then the variables get attached to the global object.

{% highlight javascript linenos %}
var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10
{% endhighlight %}

### #6: undefined vs not defined in JS

- In first phase (memory allocation) JS assigns each variable a placeholder called undefined.
- undefined is when memory is allocated for the variable, but no value is assigned yet.
- If an object/variable is not even declared/found in memory allocation phase, and tried to access it then it is Not defined
- Not Defined !== Undefined
- When variable is declared but not assigned value, its current value is undefined. But when the variable itself is not declared but called in code, then it is not defined.

{% highlight javascript linenos %}
console.log(x); // undefined var x = 25;
console.log(x); // 25
console.log(a); // Uncaught ReferenceError: a is not defined
{% endhighlight %}

- JS is a loosely typed / weakly typed language. It doesn't attach variables to any datatype. We can say var a = 5, and then change the value to boolean a = true or string a = 'hello' later on.
- Never assign undefined to a variable manually. Let it happen on it's own accord.

### #7: The Scope Chain, Scope & Lexical Environment

- Scope in Javascript is directly related to Lexical Environment. 

Let's observe the below examples:

{% highlight javascript linenos %}
// CASE 1
function a() {
    console.log(b); // 10
    // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
}
var b = 10;
a();

// CASE 2
function a() {
    c();

    function c() {
        console.log(b); // 10
    }
}
var b = 10;
a();

// CASE 3
function a() {
    c();

    function c() {
        var b = 100;
        console.log(b); // 100
    }
}
var b = 10;
a();

// CASE 4
function a() {
    var b = 10;
    c();

    function c() {
        console.log(b); // 10
    }
}
a();
console.log(b); // Error, Not Defined
{% endhighlight %}

- Let's try to understand the output in each of the cases above.
    - In case 1: function a is able to access variable b from Global scope.
    - In case 2: 10 is printed. It means that within nested function too, the global scope variable can be accessed.
    - In case 3: 100 is printed meaning local variable of the same name took precedence over a global variable.
    - In case 4: A function can access a global variable, but the global execution context can't access any local variable.
- So, Lexical Environment = local memory + lexical env of its parent. Hence, Lexical Environement is the local memory along with the lexical environment of its parent
- Lexical: In hierarchy, In order
- Whenever an Execution Context is created, a Lexical environment(LE) is also created and is referenced in the local Execution Context(in memory space). The process of going one by one to parent and checking for values is called scope chain or Lexcial environment chain.

{% highlight javascript linenos %}
function a() {
    function c() {
        // logic here
    }
    c(); // c is lexically inside a
} // a is lexically inside global execution
{% endhighlight %}

- Lexical or Static scope refers to the accessibility of variables, functions and object based on phylical location in source code.

{% highlight bash linenos %}
Global {
    Outer {
        Inner
    }
}
// Inner is surrounded by lexical scope of Outer
{% endhighlight %}

- TLDR; An inner function can access variables which are in outer functions even if inner function is nested deep. In any other case, a function can't access variables not in its scope.

### #8: let & const in JS, Temporal Dead Zone

- let and const declarations are hoisted. But its different from var

{% highlight javascript linenos %}
console.log(a); // ReferenceError: Cannot access 'a' before initialization console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10 var b = 15;
console.log(window.a); // undefined console.log(window.b); // 15
{% endhighlight %}

- It looks like let isn't hoisted, but it is, let's understand
- Both a and b are actually initialized as undefined in hoisting stage. But var b is inside the storage space of GLOBAL, and a is in a separate memory object called script, where it can be accessed only after assigning some value to it first ie. one can access 'a' only if it is assigned. Thus, it throws error.
- Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value.
    - So any line till before "let a = 10" is the TDZ for a
    - Since a is not accessible on global, its not accessible in window/this also. window.b or this.b -> 15; But window.a or this.a ->undefined, just like window.x->undefined (x isn't declared anywhere)
- Reference Error are thrown when variables are in temporal dead zone.
- Syntax Error doesn't even let us run single line of code.

{% highlight javascript linenos %}
let a = 10;
let a = 100; //this code is rejected upfront as SyntaxError. (duplicate declaration)
{% endhighlight %}

{% highlight javascript linenos %}
let a = 10;
var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)
{% endhighlight %}

- Let is a stricter version of var. Now, const is even more stricter than let.

{% highlight javascript linenos %}
let a;
a = 10;
console.log(a) // 10. Note declaration and assigning of a is in different lines.

const b;
b = 10;
console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)

const b = 100;
b = 1000; //this gives us TypeError: Assignment to constant variable.
{% endhighlight %}

- Types of Error: Syntax, Reference, and Type.
    - Uncaught ReferenceError: x is not defined at ...
        - This Error signifies that x has never been in the scope of the program. This literally means that x was never defined/declared and is being tried to be accesed.
    - Uncaught ReferenceError: cannot access 'a' before initialization
        - This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.
    - Uncaught SyntaxError: Identifier 'a' has already been declared
        - This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.
    - Uncaught SyntaxError: Missing initializer in const declaration
        - This Error signifies that we haven't initialized or assigned value to a const declaration.
    - Uncaught TypeError: Assignment to constant variable
        - This Error signifies that we are reassigning to a const variable.

SOME GOOD PRACTICES:
- Try using const wherever possible. If not, use let, Avoid var.
- Declare and initialize all variables with let to the top to avoid errors to shrink temporal dead zone window to zero.

### #9: Functions in JS

Q: What is Function statement?
Below way of creating function are function statement.

{% highlight javascript linenos %}
function a() {
    console.log("Hello");
}
a(); // Hello
{% endhighlight %}

Q: What is Function Expression?
Assigning a function to a variable. Function acts like a value.

{% highlight javascript linenos %}
var b = function() {
    console.log("Hello");
}
b();
{% endhighlight %}

Q: Difference between function statement and expression
The major difference between these two lies in Hoisting.

{% highlight javascript linenos %}
a(); // "Hello A"
b(); // TypeError
function a() {
  console.log("Hello A");
}
var b = function () {
  console.log("Hello B");
};
{% endhighlight %}

Why did this happen? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function() part, it is still undefined. So it cannot be called.

Q: What is Function Declaration?
Other name for function statement.

Q: What is Anonymous Function?
A function without a name.

{% highlight javascript linenos %}
function () {

} // this is going to throw Syntax Error - Function Statement requires function name.
{% endhighlight %}

They don't have their own identity. So an anonymous function without code inside it results in an error.
Anonymous functions are used when functions are used as values eg. the code sample for function expression above.

### #10: Closures in JS

- Function bundled along with it's lexical scope is closure.
- JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent.
- See Below code, Over here function y along with its lexical scope i.e. (function x) would be called a closure.

{% highlight javascript linenos %}
function x() {
    var a = 7;

    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z); // value of z is entire code of function y.
{% endhighlight %}

- In above code, When y is returned, not only is the function returned but the entire closure (fun y + its lexical scope) is returned and put inside z. So when z is used somewhere else in program, it still remembers var a inside x()
- Thus In simple words, we can say:
    - A closure is a function that has access to its outer function scope even after the function has returned. Meaning, A closure can remember and access variables and arguments reference of its outer function even after the function has returned.
- Advantages of Closure: Module Design, Pattern Currying, Memoize, Data hiding and encapsulation setTimeouts etc.
- Disadvantages of Closure: Over consumption of memory , Memory Leak & Freeze Browser

### #10 (A) setTimeout

{% highlight javascript linenos %}
function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000);
    console.log("Hello World");
}
x();
// Output:
// Hello World
// 1 // after waiting 3 seconds
{% endhighlight %}

- We expect JS to wait 3 sec, print 1 and then go down and print the string. But JS prints string immediately, waits 3 sec and then prints 1.
- The function inside setTimeout forms a closure (remembers reference to i). So wherever function goes it carries this ref along with it.
- setTimeout takes this callback function & attaches timer of 3000ms and stores it. Goes to next line without waiting and prints string.
- After 3000ms runs out, JS takes function, puts it into call stack and runs it. Q: Print 1 after 1 sec, 2 after 2 sec till 5
- We assume this has a simple approach as below

{% highlight javascript linenos %}
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Hello World");
}
x();
// Output:
// Hello World
// 6
// 6
// 6
// 6
// 6
{% endhighlight %}

Reason?
- This happens because of closures. When setTimeout stores the function somewhere and attaches timer to it, the function remembers its reference to i, not value of i. All 5 copies of function point to same reference of i. JS stores these 5 functions, prints string and then comes back to the functions. By then the timer has run fully. And due to looping, the i value became 6. And when the callback fun runs the variable i = 6. So same 6 is printed in each log.
- To avoid this, we can use let instead of var as let has Block scope. For each iteration, the i is a new variable altogether(new copy of i). Everytime setTimeout is run, the inside function forms closure with new variable i
- But what if you have to implement using var?

{% highlight javascript linenos %}
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
            // put the setT function inside new function close()
        }
        close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
    }
    console.log("Hello World");
}
x();
{% endhighlight %}

### #11 – Web APIs

Stuff which is not a part of JS but provided by the Browsers.
E.g. setTimeout(), DOM APIs, fetch(), localstorage, console, location and so many
more.
a.	setTimeout() : Timer function
b.	DOM APIs : eg.Document.xxxx ; Used to access HTML DOM tree. (Document Object Manipulation)
c.	fetch() : Used to make connection with external servers eg. Netflix servers etc. 
