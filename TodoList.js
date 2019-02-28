const { TodoItem } = window.App;

class TodoList extends React.Component {
  render() {
    return (
        <ul>
            <ui>
                <TodoItem />
            </ui>
            <ui>
                <TodoItem />
            </ui>
            <ui>
                <TodoItem />
            </ui>
        </ul>
    );
  }
}

window.App.TodoList = TodoList;
