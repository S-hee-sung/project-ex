import { createGlobalStyle } from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';

const GloblalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 공부하기',
      checked: true
    },
    {
      id: 2,
      text: '리액트 게임 만들기',
      checked: true
    },
    {
      id: 3,
      text: '리액트 접기?',
      checked: false
    }
  ]);

  const handleInsert = useCallback((text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false
    };

    setTodos(todos.concat(todo)); 
  },[todos]);

  return (
    <>
      <GloblalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
      </TodoTemplate>
    </>
  );
}

export default App;
