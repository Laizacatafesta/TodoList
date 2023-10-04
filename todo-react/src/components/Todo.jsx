import React from "react";

const Todo = ({todo, removeTodo}) => {
    return (
        <div className="todo">
            <div className="content">
              <p>{todo.text}</p> 
              <p className="category">({todo.category})</p>
            </div>
            <div>
              <button className="complete">Check</button>
              <button className="remove" onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;