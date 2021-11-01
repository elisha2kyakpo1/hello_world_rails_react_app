import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button } from 'semantic-ui-react';
import { getMessages } from '../redux/Messages';
import './App.css';

const Greeting = () => {
  const messages = useSelector((state) => state.messageReducer);

  const [message, setMessage] = useState({});
  const { greeting, id } = message;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!messages.length) {
      dispatch(getMessages());
    }
  }, []);

  const shuffle = () => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <List.Item>
      <Button primary onClick={shuffle}>Load Messages</Button>
      <List.Description key={id}>
        <h4>{greeting}</h4>
      </List.Description>
    </List.Item>
  );
};

export default Greeting;
