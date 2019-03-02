const { TodoItem } = window.App;

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    const { onDeleteTodo } = this.props;

    const todoElements = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
        />
      </li>
    ));
    return <ul>{todoElements}</ul>;
  }
}

TodoList.proptypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
};

TodoList.defaultProps = {
  todo: {
    id: 1,
    title: "Todo Item",
    completed: false
  }
};

window.App.TodoList = TodoList;
