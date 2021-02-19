## Classes and Interfaces.

Interfaces usually help us to define the type of model like what properties does it contain.
It restricts the values to be passed in. 

```javascript
interface IPerson{
  firstName: string;
  lastName: string;
  age: number;
}

// Extending the Interfaces in other interface.
interface IPersonFullState extends IPerson{
   flag: boolean;
}

// Extending the Interfaces in other interface.
interface IPersonFullProps extends IPerson{
  'full-name': string; // different way of creating the prop
  phoneNumber?: string; // this is an optional 
  address?: string; 
}

class MyComponent extends React.Component<IPersonFullProps,IPersonFullState>{
  constructor(props){
    super(props);
    this.state={flag:false};
  }
  public render(){
    return (
    <div>
    {this.state.flag? 
        this.props['full-name'] // accessing the differnt way of props
        : this.props.phoneNumber}
    </div>
    )
  }
}

interface IShip extends IPerson{
  takeOff(): void;
  name:string;
}

// Extending the Interfaces in Class.
class Ship implements IShip{
  private shipName: string;
  
  public get name(){
  return this.shipName;
  }
  public takeOff(): void{
  //implement something
  }
}

//creating the variable of type IPerson
const myVariable: IPerson = {
  firstName: 'Venkatesh',
  lastName:'CH',
  age:'29'
}
```
While you are using the type as Interface, then It should have same number of properties(should not be less or more of required params)
'?' is used to create an optional params

In the same way type also help us to create the model but it cannot extend other types

```javascript
type myNotebook ={
  name:string,
  price:string,
  noOfPages:number
}
```

