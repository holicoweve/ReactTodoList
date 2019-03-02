class InputField extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const { onKeyDown, onSubmitEditing } = this.props;
    const { value } = e.target;
    switch (e.keyCode) {
      case 13:
        if (value.trim()) {
          onSubmitEditing && onSubmitEditing(value);
        }
        e.target.value = "";
        break;
    }
    onKeyDown && onKeyDown(e);
  }

  render() {
    return <input {...this.props} type="text" onKeyDown={this.handleKeyDown} />;
  }
}

InputField.proptypes = {
  onKeyDown: PropTypes.func,
  onSubmitEditing: PropTypes.func
}

window.App.InputField = InputField;
