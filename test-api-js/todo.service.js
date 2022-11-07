class todoservice{
    todo_data = {
        "todo":[{
            "id":7,
            "title": "T1",
            "description": "D1",
            "done": false
        },{ "id":17,
            "title": "T1",
            "description": "D1",
            "done": false
        },{ "id":27,
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){ 
        todo={
            "id": 6,
            "title": "T1",
            "description": "D1",
            "done": false
        }
        this.todos.todo.push(todo)
        return(this.todos)
    }

    delete_todo(todo){
        todo=this.todos.todo.splice(1)
        return(this.todos)
    }

    update_todo(id, todo){
        todo = this.todos.todo.map(obj => {
            if(obj.id == 7){
                return{...obj, "title":"T69", "description":"Hello"};
            }
            return obj;
        })
        console.log(todo)
        return todo[0]
    }
}



module.exports= todoservice;