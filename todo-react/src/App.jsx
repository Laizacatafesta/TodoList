import { useState } from "react"

import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

import "./App.css"

function App() {
  const [todos, setTodos] = useState([ //onde armazena os dados iniciais
    {
      id:1, //objetos
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]) 

  return (
  <div className="app">
    <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => ( //percorre a lista to-do
          <Todo  key={todo.id} todo={todo}/>
        ))} 
      </div>
      <TodoForm />
  </div> 
  )
}
  
export default App
