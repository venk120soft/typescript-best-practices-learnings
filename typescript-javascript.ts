## Using Type script

```javascript
interface ICounter {
    value: number;
}

enum Colors {
    Orange = 'orange',
    Blue = 'blue',
    Red = 'red'
}

class Counter {
    private a: number = 0
    private b: number = 0;
    protected result: number = 0;

    static raj = 'Hello';
    constructor() {
        this.a = 0;
    }

    get getResult() {
        return this.result;
    }

    set setResutlt(value: number) {
        this.result = value;
    }

    public test: ICounter = {
        value: 0
    }
}

type IPerson = {
    name: string,
    age: string,
    dob: Date,
    startDate: Date,
}

interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (empCode: number) => number; // arrow function
    setEmployeeSalary: (empCode: number) => void;
    getEmpDetails(): IPerson; // calling normal function    
}

// The class which implements an abstract class must call super() in the constructor.
abstract class Person {
    private name: string;
    protected age: number;
    static companyName: string = 'Accenture';
    constructor(name: string) {
        this.name = name;
        this.age = 1;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(name: string): Person;
    abstract getAge(name: string): number;
}

// The class which implements an abstract class must call super() in the constructor.
// All the abstracted memebrs needs to impplemented
class Employee extends Person {
    private empCode: number;
    constructor(name: string, code: number) {
        super(name); // must call super() to get the 
        this.empCode = code;
    }

    // Implementing the abstract method
    find(name: string): Person {
        // execute AJAX request to find an employee from a db
        // return new Employee(name, 1);
        const emp = new Employee(name, 1);
        return emp;
    }

    getAge(name: string) {
        // const emp = this.find(name);
        // return emp.age; // protected variable is not accessible
        const emp1 = new Employee(name, 1);
        return emp1.age;
    }

    get getComppanyName(){
        return Person.companyName;
    }

    set createEmployee(value: number) {

    }
}

```
Compiler will convert the Typescript file to the Javascript file

```javascript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Colors;
(function (Colors) {
    Colors["Orange"] = "orange";
    Colors["Blue"] = "blue";
    Colors["Red"] = "red";
})(Colors || (Colors = {}));
var Counter = /** @class */ (function () {
    function Counter() {
        this.a = 0;
        this.b = 0;
        this.result = 0;
        this.test = {
            value: 0
        };
        this.a = 0;
    }
    Object.defineProperty(Counter.prototype, "getResult", {
        get: function () {
            return this.result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "setResutlt", {
        set: function (value) {
            this.result = value;
        },
        enumerable: false,
        configurable: true
    });
    Counter.raj = 'Hello';
    return Counter;
}());
// The class which implements an abstract class must call super() in the constructor.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 1;
    }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    Person.companyName = 'Accenture';
    return Person;
}());
// The class which implements an abstract class must call super() in the constructor.
// All the abstracted memebrs needs to impplemented
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    // Implementing the abstract method
    Employee.prototype.find = function (name) {
        // execute AJAX request to find an employee from a db
        // return new Employee(name, 1);
        var emp = new Employee(name, 1);
        return emp;
    };
    Employee.prototype.getAge = function (name) {
        // const emp = this.find(name);
        // return emp.age; // protected variable is not accessible
        var emp1 = new Employee(name, 1);
        return emp1.age;
    };
    Object.defineProperty(Employee.prototype, "getComppanyName", {
        get: function () {
            return Person.companyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "createEmployee", {
        set: function (value) {
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}(Person));

```
