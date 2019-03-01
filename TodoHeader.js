class TodoHeader extends React.Component {
  render() {
    const { title, username, todoCount } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <span>
          Hi {username}, You have {todoCount} items to do!
        </span>
      </div>
    );
  }
}

window.App.TodoHeader = TodoHeader;
