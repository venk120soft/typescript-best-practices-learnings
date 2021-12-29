Resource: [Difference between Arrow functions vs Regular](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)

Auto-binding is not available by default in ES6.
FatArrowFunction is a new feature in ES6, which Helps to bind the functions with out hassle and it uses the Immidiate parent scope.

```
// Normal functions
function myFunction(number){
    return number*number;
}
// can be replaced with below arrow function
const myFunction=(number)=>number*number;
```
## What is the differnce between fat arrow functions and normal functions.
1) The main difference is, In normal functions we will have internal scope and external scope and while using 'this', it refers to internal scope.
where as for arrow functions we dont have internal scope, so it uses the lexical scope, on calling this referes to lexical(immediate parent) scope.
2) By default if we dont pass anything to normal functions, we can access the arguments in it. Due to Javascript nature of accessing the elements from current object **this**
3) For arrow functions if you want to access params we must pass args, since auto-binding is not available by default in ES6.
```
Ex: function test(){                           
  console.log(arguments[0] );
}
const test1=()=>{
  console.log(arguments[0]);
}
// test("Hello") // o/p: Hello
// test1("Hello") // o/p: 
to make arrow function print this o/p
we can make use 
const test1=(...something)=>{
console.log(something[0])
}
// test1("Hello") // o/p: Hello
```
## 1) Why do we use arrow functions in react? and what is the advantage of using arrow functions?
Ans: Arrow functions does not have its own 'this', so it takes from its lexical scope(immediate class scope).
functions have its own 'this' that is the reason we are going for arrow functions and implemnting the properties.
i.e it allows to bind the context of components properly since auto-binding is not available by default in ES6. 
So when we use arrow functions, the scope points to the lexical hence binding the functions is not necessary
.
### Explanation:
In react, we can have onClick handles, which is actually a properties of a class. If you want to access **this** keyword inside the function then that would points to within the scope not the global scope.
so the solution is we can create arrow functions and use **this** keywords which points to the class scope.
also we can bind **this** property inside the constructor.

### Key-Factors:
By default Auto-Binding is not available in ES6, So on handling the events, if we use functions we need to bind the functions.
As FatArrowFunctions does not have its own **this** and uses its immediate class scope then we no need to bind this arrow function 

Ex:
```
function clickDropDown(){
    console.log("dropdown is clicked");
}

const clickDdlArrow=()=>{
    console.log("dropdown is cliked using arrow functions");
}
<Dropdown
  onClick={this.clickDropDown().bind(this)}>
</DropDown>

// Using Arrow functions
Ex:<Dropdown
  onClick={clickDdlArrow()}>
</DropDown>
```
