import React from 'react';
import Aliases from './Study/Aliases.tsx';

const App: React.FC = () => {


  // let name : string = "John Doe"; // String

  // let any : any = 42; // Any type

  // let unKnownVar : unknown = "Hello"; // Unknown type

  // let age : number | string = 30; // Number or String (Union type)
  // age = "thirty"; // Valid because age can be a number or a string

  // let isStudent : boolean = true; // Boolean

  // let hobbies : string[]; // Array of strings

  // let roles : [string, number];  // Tuple
  // roles = ["admin", 1];

  // type Person ={
  //   name: string;
  //   age: number;
  //   isStudent?: boolean; // Optional property
  // }
  // let person: Person // Object with specific properties
  // person = {
  //   name: "Jane Doe",
  //   age: 25
  // }


  // let printName = (name: string): void => { // Function with void return type
  // }

  // let nevrerReturns: () => Number// Function with never return type
  

  return (
    <div className='app-container'>
      {/* <h1>Hello {name}</h1> */}
      {/* <Aliases /> */}

      <span className="heading"></span>
    </div>
  );
}

export default App;
