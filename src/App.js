import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';





class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ],
      todo: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    const newTodo = { 
      task: this.state.todo, 
      completed: false,
      id: Date.now()
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };
  
  changeTodo = event => this.setState({
    [event.target.name]: event.target.value });

    toggleTodoComplete = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            return {...todo, completed: !todo.completed}
        }else {
          return todo
        }})
      })
    };

    clearCompletedTodos = event => {
      event.preventDefault();
      this.setState({
        todos: this.state.todos.filter(todo => todo.completed === false)
      })
      // let todos = this.state.todos.filter(todo => !todo.completed);
      // this.state({ todos });
    };

    render() {
     return (
        <div className = "wrapper">
          <TodoForm
            value = {this.state.todo}
            handleTodoChange = {this.changeTodo}
            handleAddTodo = {this.addTodo}
            handleClearTodos = {this.clearCompletedTodos}
          />
          <TodoList
            handleToggleComplete = {this.toggleTodoComplete}
            todos = {this.state.todos}
          />
        </div>
      );
    }
  }

  export default App;