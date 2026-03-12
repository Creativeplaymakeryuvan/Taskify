import React from 'react'
import type { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList= ({ todos, setTodos}: Props) => {
  return (
    <div className='container'>
      <div className="todos">
        <span className='todos_heading'>Active Tasks</span>
        {
          todos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        }
      </div>
      <div className="todos remove">
        <span className='todos_heading'>Compleated Tasks</span>
                {
          todos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
