const { TodoItem } = window.App;

class TodoList extends React.Component {
  render() {
    const { todos, onDeleteTodo, onToggleTodo } = this.props;

    const todoElements = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
          onToggle={completed =>
            onToggleTodo && onToggleTodo(todo.id, completed)
          }
        />
      </li>
    ));
    return <ul>{todoElements}</ul>;
  }
}

TodoList.proptypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func
};

TodoList.defaultProps = {
  todo: {
    id: 1,
    title: "Todo Item",
    completed: false
  }
};

window.App.TodoList = TodoList;
