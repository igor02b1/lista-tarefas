import React, { Component }from  "react";

import { FaPlus} from 'react-icons/fa'
import './main.css';


class Main extends Component {
    state = {
        novaTarefa: '', 
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }


    render() {
        const { novaTarefa } = this.state;

        return ( 
        <div className="Main">
            <h2>Lista de tarefas</h2>

            <h1>{novaTarefa}</h1>

            <form action='#' >
                <input onChange={this.handleChange} type="text" />
                <button type="submit">
                    <FaPlus />
                </button>
            </form>
        </div>
        );
    }
}

export default Main;
