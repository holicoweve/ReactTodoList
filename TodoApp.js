const { InputField, TodoHeader, TodoList } = window.App;

class TodoApp extends React.Component {
  render() {
    //const {name, username, todoCount} = this.props;
    return (
      <div>
        <TodoHeader title="Todo List" username="Stephen" todoCount={99} />
        <InputField placeholder='Add Todo item'/>
        <TodoList />
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
