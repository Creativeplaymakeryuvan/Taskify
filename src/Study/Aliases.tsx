import React from 'react';

const AliasesTypeAndInterface = () => {

    type User = { // Type alias
        name: string;
        age: number;
    }

    type Admin = User & { // Intersection type
        role: string;
    }

    interface IUser {  // Interface
        name: string;
        age: number;
    }


    // Differences between Type Aliases and Interfaces:
    
        // 1. Declaration Merging: Interfaces can be merged, while type aliases cannot.

        //eg:
        interface IUser {
            email: string;
        }
        // Now IUser has both name, age and email properties, while type aliases would throw an error if we try to redeclare them.

        // 2. Extending: Interfaces can extend other interfaces, while type aliases cannot extend other types.
        //eg:
        interface IEmployee extends IUser {
            employeeId: number;
        }
        

        // 3. Use Cases: Type aliases are often used for union types, intersection types, and primitive types, while interfaces are typically used for defining object shapes and class contracts.
        // eg:
        type ID = string | number; // Type alias for a union type
        type Point = { x: number; y: number }; // Type alias for an object type

        interface IShape { // Interface for a shape
            area(): number;
        }


    // type: type 
    
    return (
        <div>
            
        </div>
    );
}

export default AliasesTypeAndInterface;
