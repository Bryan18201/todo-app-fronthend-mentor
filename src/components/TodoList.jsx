/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Droppable, Draggable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {
                (droppableProvided) => (
                    <div ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                        className="bg-white rounded-t-md overflow-hidden dark:bg-gray-800 transition-all duration-1000 [&>article]:p-4 mt-8">

                        {todos.map((todo, index) => (
                            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                                {
                                    (draggableProvided) => (
                                        <TodoItem
                                            todo={todo}
                                            removeTodo={removeTodo}
                                            updateTodo={updateTodo}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            {...draggableProvided.draggableProps} />

                                    )
                                }
                            </Draggable>
                        ))}

                        {droppableProvided.placeholder}
                    </div>

                )
            }

        </Droppable>
    )
}

export default TodoList;