# Implements vs Extends
#### Difference b/w extends vs implements, extend(all members are available to derived class), implements (only abstract members are available to derived class)
- We can only implement interfaces as it having only unimplemented members alone.
- We can extend and implement the classes, when ever we have unimplemented/abstract members only needs to be implemented in derived class then use the impmenets keyword
- If we want all the members including abstract/unimpmented mebers to be available in derived class then go for extends
- extends keyword help us to do the polymorphism/method overloading/overriding

```javascript
abstract class A {
    abstract m(): void;
	otherM() {
		console.log("otherm");
	}
}

// this is like method method overloading/overriding polymorphism
class B extends A { // this will inherit all the members of A and implement the abstract members
    m(): void { 
        console.log('extebds A');
    }
}

// this is like interface
class C implements A { // implements is only used for implementing the interface/abstract/un implemented members to implement
    m(): void { 
        console.log('implements A');
    }
}

const test= new B();
test.otherM();
test.m();

const test1 = new C();
test1.otherM();// this will throw compile time error
test1.m();
```

## Using interfaces
We can only implement interfaces, extend functionality can only be applied to the classes

```javascript
interface IMyTest{
    myAge:number;
    test:()=>void;
}

class D implements IMyTest{
    test(){
        console.log("I'm pure implements from the interface");
    }
}
const test2= new D();
test2.test();

class E extends IMyTest{ // we can't extend the interface
    test(){
        console.log("I'm pure implements from the interface",);
    }
}
```
