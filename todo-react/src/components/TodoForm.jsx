import React from "react";

const TodoForm = () => {
    return (
        <div className="todo-form">
            <h2>Criar nova tarefa:</h2>
            <form>
                <input type="text" placeholder="Digite o título da tarefa" />
                <select>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Ok</button>
            </form>
        </div>
    )
}

export default TodoForm