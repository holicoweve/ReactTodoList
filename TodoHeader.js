//import React from 'react';
//import PropTypes from 'prop-types';

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

TodoHeader.proptypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  todoCount: PropTypes.number
};

TodoHeader.defaultProps = {
  title: "My Todo List",
  username: "Guest",
  todoCount: 0
};

window.App.TodoHeader = TodoHeader;
