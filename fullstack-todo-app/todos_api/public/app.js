$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(addTodos)
	.catch(function(err){
		console.log(err);
	})
	$("#todoInput").keypress(function(event){
		if(event.which === 13){
			createTodo();
		}
	})
	$('.list').on('click','li',function(){
		updateTodo($(this));
	})
	$('.list').on('click', 'span', function(event){ 
		//adding event listener to ul but adding second parameter in callback to specify the span (event delegation problem);
		event.stopPropagation();
		removeTodo($(this).parent());
	});
	
});
function addTodos(todos){
	//adding todos to the page
	todos.forEach(function(todo){
		addTodo(todo);
	})
}
function addTodo(todo){
	var newTodo = $('<li class="task">'+todo.name+' <span>X</span></li>');
	newTodo.data('id',todo._id);
	newTodo.data('completed', todo.completed);
		if(todo.completed){
			newTodo.addClass("done");
		}
		$(".list").append(newTodo);
}
function createTodo(){
	//send request to Create New Todo
	// /api/todos
	var usrInput = $("#todoInput").val();
	$.post('/api/todos', {name: usrInput})
	.then(function(newTodo){
		$("#todoInput").val('');
		addTodo(newTodo);
	})
	.catch(function(err){
		console.log(err);
	})
}
function removeTodo(todo){
	var clickedId = todo.data('id');
	var deleteUrl = '/api/todos/' + clickedId;
	$.ajax({
		method: 'DELETE',
		url: deleteUrl
	})
	.then(function(data){
		todo.remove();
	})
	.catch(function(err){
		console.log(err);
	})
}
function updateTodo(todo){
	var updateUrl = '/api/todos/' + todo.data('id');
	var isDone = !todo.data('completed');
	var updateData = {completed: isDone};
	console.log(updateData);
	$.ajax({
		method: 'PUT',
		url: updateUrl,
		data: updateData
	})
	.then(function(updatedTodo){
		todo.toggleClass('done');
		todo.data('completed', isDone);
	})
}