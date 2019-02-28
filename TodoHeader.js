class TodoHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <span>You have xx items to do!</span>
      </div>
    );
  }
}

window.App.TodoHeader = TodoHeader;
