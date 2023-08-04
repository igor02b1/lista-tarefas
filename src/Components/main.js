import React, { Component }from  "react";

import { FaPlus} from 'react-icons/fa'
import './main.css';
import { FaEdit, FaWindowClose } from "react-icons/fa";

class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    };

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) return;

        this.setState({ tarefas });
    }

    componentDidUpdate(prevProps, prevStates) {
        const { tarefas } = this.state;

        if (tarefas === prevStates.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1)return; 

        const novasTarefa = [...tarefas];

        if(index === -1) { 
            this.setState({
                tarefas: [...novasTarefa, novaTarefa],
                novaTarefa: '',
            });
        } else {
        novasTarefa[index] = novaTarefa;    

        this.setState({
            tarefas: [...novasTarefa],
            index: -1,
        })
        }

    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }

    handleEdit = (e, index) => {
        const { tarefas  } = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index],
        })
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
