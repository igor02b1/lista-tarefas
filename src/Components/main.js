import React, { Component }from  "react";

import { FaPlus} from 'react-icons/fa'
import './main.css';
import { FaEdit, FaWindowClose } from "react-icons/fa";

class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1)return; 

        const novasTarefa = [...tarefas];

        this.setState({
            tarefas: [...novasTarefa, novaTarefa]
        })
    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }

    handleEdit = (e, index) => {

    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefa = [...tarefas];
        novasTarefa.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefa],
        });
    }


    render() {
        const { novaTarefa, tarefas } = this.state;

        return ( 
        <div className="Main">
            <h1>Lista de tarefas</h1>

            
            <form onSubmit={this.handleSubmit} action='#' className="form">
                <input 
                onChange={this.handleChange} 
                type="text"
                value={novaTarefa}
                />
                <button type="submit">
                    <FaPlus />
                </button>
            </form>

            <ul className="tarefas">
                {tarefas.map((tarefa, index) => (
                    <li key={tarefa}> 
                    {tarefa}
                    <span>
                        <FaEdit className="edit"
                        onClick={(e) => this.handleEdit(e, index)}
                        />
                        <FaWindowClose 
                        onClick={(e) => this.handleDelete(e, index)}
                         className="delete"
                         />
                    </span>
                    </li>
            ))}
            </ul>
        </div>
        );
    }
}

export default Main;
