import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdModeEditOutline } from 'react-icons/md';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;


const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
    
  ${props =>
    props.checked &&
    css`
      border: 1px solid #9c88ff;
      color: #9c88ff;
  `}

  &:hover {
    background: #ede2f0;
  }      
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #000;
  
  ${props =>
    props.checked &&
    css`
      color: #00000073;
      /* color: #38d9a9; */
      text-decoration: line-through;
  `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;


const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
  color: #dee2e6;

  &:hover {
    color: #9c88ff;
  }
  `; 

function TodoListItem({todo, onRemove, onToggle, onChangeSelectedTodo,onInsertToggle}) {
  
  const { id, text, checked } = todo;
  
  return (
    <TodoItemWrapper>
      <CheckCircle
        checked={checked} 
        onClick={() => {onToggle(id)}}>
        {checked && <MdDone />}
      </CheckCircle>
      <Text checked={checked}>{text}</Text>
      <Remove onClick={() => {onRemove(id);}}>
        <MdDelete />
      </Remove>
      <EditWrapper
        onClick={() => {
          onChangeSelectedTodo(todo);
          onInsertToggle();
        }}
      >
        <MdModeEditOutline />
      </EditWrapper>
    </TodoItemWrapper>
  );
}

export default TodoListItem;