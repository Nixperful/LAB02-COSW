import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority:'',dueDate:'' };
    this.handleChangeTODO = this.handleChangeTODO.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  


  render() {

    

    const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];

    return (
      < div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO React App</h1>
        </header>
          <h3>TODO APLICATION:</h3>
          
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
                Name new TODO:
            </label>
            <input
                id="TODOText-todo"
                type="text"
                onChange={this.handleChangeTODO}
                value={this.state.text}        
            />
            <p></p>
            <label htmlFor="new-todo">
                Priority new TODO:
            </label>
            <input
                id="TODOPriority-todo"
                onChange={this.handleChangePriority}
                value={this.state.priority}  
                type="number"      
            />
            <p></p>
            <label htmlFor="new-todo">
                DATE :
            </label>
            <input
                id="dueDate-todo"
                type="Date"
                onChange={this.handleChangeDate}
                value={this.state.dueDate}
            />

            <button>
                Add #{this.state.items.length + 1}
            </button>
            
          </form>
          <TodoList todoList={this.state.items}></TodoList>
        
        </div>
  
    );
  }


  handleChangeTODO(e) {
    this.setState({ text: e.target.value});
  }
  handleChangePriority(e) {
    this.setState({ priority: e.target.value});
  }
  handleChangeDate(e) {
    this.setState({ dueDate:e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newTODOItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newTODOItem),
      text: ''
    }));
  }

}

export default App;
