export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODOS = 'GET_TODOS';

const handleAdd = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}

const handleRemove = (id) => {
    return{
        type: REMOVE_TODO,
        id
    };
}

const handleTodos = (data) => {
    return {
        type: GET_TODOS,
        data
    }
}

export const getTodos = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/todos')
            .then( res => res.json())
            .then( data => dispatch( handleTodos(data) ))
            .catch(err =>  console.log('Something went wrong', err));
    }
}

export const addTodo = (task) => {
    return dispatch => {
        return fetch('http://localhost:3001/api/todos', {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({task})
        })
        .then(res => res.json())
        .then( data => dispatch(handleAdd(data)))
        .catch( err => console.log("Something went wrong",err));
    };
}

export const removeTodo = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/todos/${id}`, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => dispatch(handleRemove(id)))
        .catch( err => console.log(err));
    }
}