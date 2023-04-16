import { createGlobalStyle } from "styled-components";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoInsert from "./component/TodoInsert";
import TodoTemplate from "./component/TodoTemplate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoEdit from "./component/TodoEdit";



const GlobalStyle = createGlobalStyle`

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
      text: '자바스크립트 공부하기',
      checked: false
    }
  ]);
  
  const [selectedTodo, setSelectedTodo] = useState(null); 
  const [insertToggle, setInsertToggle] = useState(false); 


  const handleInsert = useCallback((text) => { //추가
    const todo = {
      id: uuidv4(),
      text,
      checked: false
    };

    setTodos(todos.concat(todo)); 
  },[todos]);

  const handleRemove = useCallback((id) => { //삭제
    setTodos(todos.filter((todo) => todo.id !== id));
  } ,[todos])

  const handleToggle = useCallback((id) => { //체크
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
  ));
  },[todos]); 



  const onInsertToggle = useCallback(() => { //새창
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);

  const onChangeSelectedTodo = (todo) => { //현재상태 
    setSelectedTodo((selectedTodo) => todo);
  };

  const handleUpdate = useCallback((id, text) => { //새로운 텍스트 값
    onInsertToggle();

    setTodos((todos) => todos.map((todo) =>
      (todo.id === id ? { ...todo, text } : todo)),
    );
  },[onInsertToggle]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList 
          todos={todos} 
          onRemove={handleRemove} 
          onToggle={handleToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        {insertToggle && (
          <TodoEdit
            selectedTodo={selectedTodo}
            insertToggle={insertToggle}
            onInsert={handleInsert}
            onInsertToggle={onInsertToggle}
            handleUpdate={handleUpdate}
          />
        )}
        <TodoInsert onInsert={handleInsert} />
      </TodoTemplate>
    </>  
  );
}

export default App;
