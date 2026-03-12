import React, { useState } from 'react'
import type { Todo } from '../model'
import { MdModeEdit, MdDelete, MdOutlineDone } from "react-icons/md";
import './styles.css';

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)));
        setEdit(false);
    }

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>

            {
                edit ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className='todos_single_text' />

                ) : (
                    todo.isDone ? (
                        <s className="todos_single--text">{todo.todo}</s>
                    ) : (
                        <span className='todos_single--text'>{todo.todo}</span>
                    )
                )
            }



            <div>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                }
                >

                    <MdModeEdit />
                </span>
                <span className='icon'><MdDelete onClick={() => handleDelete(todo.id)} /></span>
                <span className='icon'><MdOutlineDone onClick={() => handleDone(todo.id)} /></span>
            </div>
        </form>
    )
}

export default SingleTodo
