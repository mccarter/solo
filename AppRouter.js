// var TodoRouter = Backbone.Router.extend({
// 	routes: {
// 		"": 'index',//defines root route
// 		'todos/:id' "show"},

// 	initialize: function(options) {
// 		this.todoList = new TodoList();
// 		this.todosView = new TodoListView({collection: this.todoList});
// 		this.todoList = options.todoList;//assigns the todlist to the router from the options
// 	},

// 	start: function(){
// 		Backbone.history.start({pushState: true});
// 	},

// 	index: function(){
//     this.todoList.fetch();//grabs all todos from server and displays it to the user at the root route
// 	},	

// 	show: function(id) {
// 		this.todoList.focusOnTodoItem(id); //resets collection to show only the todo item that matches the id
// 	}

// });


// $(function(){

// 	TodoApp.start();

// })