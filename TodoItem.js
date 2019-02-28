class TodoItem extends React.Component{
    render(){
        return (
            <div>
                <input type='checkbox' />
                <span>Todo Item</span>
                <button>x</button>
            </div>
        );
    }
}

window.App.TodoItem = TodoItem;
