import React,{Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {addTodo,removeTodo, getTodos} from './actionCreators';
import {Route} from 'react-router-dom';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""
        };
    }
    componentDidMount() {
        this.props.getTodos();
    }
    handleAdd = (val) => {
        this.props.addTodo(val);
    }
    removeTodo = (id) => {
        this.props.removeTodo(id);
    }
    render() {
        let todos = this.props.todos.map( val => (
            <Todo removeTodo={this.removeTodo.bind(this, val._id)} task={val.task} key={val._id} />
        ));
        return (
            <div>
                <Route path="/todos/new" component={props => (
                    <NewTodoForm {...props} handleSubmit={this.handleAdd} />
                )} />
                <Route exact path="/todos" component={ () => <div>{todos}</div> } />
            </div>
        )
    }
}
const mapStateToProps =  (reduxState) => {
    return {
        todos: reduxState.todos
    };
}

export default connect(mapStateToProps,{addTodo,removeTodo, getTodos})(TodoList);