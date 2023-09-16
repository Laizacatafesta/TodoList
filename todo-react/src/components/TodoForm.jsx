import {useState} from "react"; //gerenciando dados de titulo e categoria

const TodoForm = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) 
        return;
        //adicionar todo
        setValue("");
        setCategory("");  
    };

    return (
        <div className="todo-form">
            <h2>Criar nova tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título da tarefa" value = {value} onChange={(e) => setValue(e.target.value)} /> {/* Aqui funciona quando o usuário digita*/ }
                <select value = {category} onChange={(e) => setCategory(e.target.value)}> {/*Aqui funciona quando o usuário muda uma option*/}
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