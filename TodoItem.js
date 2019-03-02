const { InputField } = window.App;
class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { editable: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState({ editable: !this.state.editable });
  }

  renderViewMode() {
    const { title, completed } = this.props;
    const { onDelete } = this.props;

    return (
      <div>
        <input type="checkbox" checked={completed} />
        <span onDoubleClick={this.toggleEditMode}>{title}</span>
        <button onClick={() => onDelete && onDelete()}>x</button>
      </div>
    );
  }

  renderEditMode() {
    return (
      <InputField
        autoFocus
        placeholder="Edit Todo Item"
        value={this.props.title}
        onBlue={this.toggleEditMode}
        onKeyDown={e => {
          if (e.keyCode === 27) {
            e.preventDefault();
            this.toggleEditMode();
          }
        }}
      />
    );
  }

  render() {
    return this.state.editable ? this.renderEditMode() : this.renderViewMode();
  }
}

TodoItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  onDelete: PropTypes.func
};

window.App.TodoItem = TodoItem;
