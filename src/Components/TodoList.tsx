import React from 'react'
import type { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from '@hello-pangea/dnd';

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {
          (provided, snapshot) => (
            <div
              className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className='todos_heading'>Active Tasks</span>
              {
                todos.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                ))
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {
          (provided,  snapshot) => (
            <div
              className={`todos remove ${snapshot.isDraggingOver ? 'dragComplete' : ''}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className='todos_heading'>Completed Tasks</span>
              {
                completedTodos.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    key={todo.id}
                    todo={todo}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                  />
                ))
              }
              {provided.placeholder}
            </div>
          )
        }

      </Droppable>

    </div>
  )
}

export default TodoList
