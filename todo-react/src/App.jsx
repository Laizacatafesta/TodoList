import { useState } from "react"

import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

import "./App.css"
import Search from "./components/search"

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

  const addTodo = (text,category) => { 
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }  
    ]

    setTodos(newTodos); //atualiza os estados dos todos controlados pelo react
  } 
  //função que trata da remoção
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
      setTodos(filteredTodos);
  }

  //função que trata da check(complete)
  const completeTodo = (id) => {
    const newTodos = [...todos]  
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos); 
  }

  return (
  <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search />
      <div className="todo-list">
        {todos.map((todo) => ( //percorre a lista to-do
          <Todo  key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))} 
      </div>
      <TodoForm addTodo={addTodo}/>
  </div> 
  )
}
  
export default App
