import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const homeStyle = {
    backgroundColor: darkMode ? '#333' : '#FFF',
    color: darkMode ? '#FFF' : '#000',
    minHeight: '100vh',
    padding: '20px',
  };

  const contentStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const imageStyle = {
    width: '20%',
    height: '20%',
    margin: '20px auto',
    borderRadius: '10px',
  };

  const listStyle = {
    textAlign: 'left',
    marginTop: '20px',
    maxWidth: '600px',
    margin: '20px auto',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={homeStyle}>
      <div style={contentStyle}>
        <h1>Welcome to Redux Home</h1>
        <p>
          Redux is a powerful tool for managing application state. It ensures that your application behaves consistently and can be tested easily.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKIdDVXhydpKijCM4jvDT9c5RorRpXq0Qvg&s"
          alt="Redux Diagram"
          style={imageStyle}
        />
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>Single Source of Truth:</strong> The application's state is stored in a single object, making it easy to understand and debug.
          </li>
          <li style={listItemStyle}>
            <strong>State is Read-Only:</strong> The only way to change the state is by dispatching actions, ensuring that state transitions are predictable.
          </li>
          <li style={listItemStyle}>
            <strong>Changes are Made with Pure Functions:</strong> Reducers are pure functions that take the current state and an action, and return the next state.
          </li>
          <li style={listItemStyle}>
            <strong>Middleware:</strong> Redux allows for extensibility with middleware, enabling powerful capabilities like asynchronous actions and logging.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
