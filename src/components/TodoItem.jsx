/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CrossIcon from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import React from "react";


const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {
    TodoItem.displayName = 'TodoItem';
    const { id, title, completed } = todo;

    return (
        <article {...props} ref={ref} className="flex gap-4 border-b-gray-400 border-b-[1.5px]  ">
            {/* <button className="rounded-full border-2 w-5 h-5 inline-block">
                    
                </button> */}

            <button className={`h-5 w-5 flex-none rounded-full border-2
                ${completed ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : " inline-block"}`}
                onClick={() => updateTodo(id)}>
                {
                    completed && <IconCheck />
                }
            </button>
            <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}>
                {title}</p>
            <button className="flex-none" onClick={() => removeTodo(id)}><CrossIcon /></button>
        </article >
    )
}

)

export default TodoItem;