import React from 'react';

function AdvnDisAdv() {
  const sectionStyle = {
    margin: '20px auto',
    maxWidth: '800px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  const headerStyle = {
    marginBottom: '10px',
  };

  const listStyle = {
    textAlign: 'left',
    marginTop: '10px',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headerStyle}>Advantages</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Predictable State Management:</strong> The state is predictable due to strict rules of reducers.
        </li>
        <li style={listItemStyle}>
          <strong>Maintainable:</strong> With a strict structure, code is easier to maintain and scale.
        </li>
        <li style={listItemStyle}>
          <strong>Debuggable:</strong> Tools like Redux DevTools make it easier to track changes and debug applications.
        </li>
        <li style={listItemStyle}>
          <strong>Centralized State:</strong> All state is managed in one place, which is easier to control and debug.
        </li>
        <li style={listItemStyle}>
          <strong>Server Rendering:</strong> Redux can manage state for server-side rendering applications.
        </li>
      </ul>

      <h2 style={headerStyle}>Disadvantages</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Boilerplate Code:</strong> Redux requires a lot of boilerplate code, which can be cumbersome.
        </li>
        <li style={listItemStyle}>
          <strong>Learning Curve:</strong> The concepts of Redux can be difficult for beginners to grasp.
        </li>
        <li style={listItemStyle}>
          <strong>Complexity:</strong> For small applications, Redux can add unnecessary complexity.
        </li>
        <li style={listItemStyle}>
          <strong>Performance Overhead:</strong> Frequent state updates can lead to performance issues if not managed properly.
        </li>
      </ul>
    </div>
  );
}

export default AdvnDisAdv;
