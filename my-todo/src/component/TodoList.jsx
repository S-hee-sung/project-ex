import React from 'react';
import styled from "styled-components";
import TodoListItem from './TodoListItem';


const TodoListWrapper = styled.div`
  padding: 20px 30px;
  overflow-y: scroll;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #889d3e;
  }
`;


function TodoList({todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) {
  return (
    <TodoListWrapper>
      <h1>[Check List]</h1>
      {todos.map((todo) =>{
        return(
          <TodoListItem 
            key={todo.id} 
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
          />
        );
      })}
    </TodoListWrapper>
  );
}

export default TodoList;