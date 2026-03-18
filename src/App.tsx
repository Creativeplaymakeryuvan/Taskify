import React, { useState } from 'react';
// import Aliases from './Study/Aliases.tsx';
import './App.css';
import InputFeild from './Components/InputFeild.tsx';
import type { Todo } from './model.ts';
import TodoList from './Components/TodoList.tsx';
import { DragDropContext, type DropResult } from '@hello-pangea/dnd';

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

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Array<Todo>>([])
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);



  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos([...todos, { id: Date.now(), todo, isDone: false }])
    setTodo("");
  }

  console.log(todo);
  console.log(todos);

 const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        {/* <h1>Hello {name}</h1> */}
        {/* <Aliases /> */}

        <span className="heading">Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
      </div>
    </DragDropContext>
  );
}

export default App;
