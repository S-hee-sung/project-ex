import { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from 'react-icons/md';

const TodoInsertWrapper = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 40px 30px 40px; 

  border-radius : 20px;
  border-top: 1px solid #e9ecef;
`;

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const CircleButton = styled.button`
  background: #9c88ff;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #9c88ff;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 200px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      
      &:hover {
        background: #ff8787;
      }
      
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const onToggleAdd = () => setOpen(!open);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); 
    
    e.preventDefault();
  };

  return (  
    <>
      {open && (
        <TodoInsertWrapper>
          <InsertForm  onSubmit={handleSubmit}>
            <StyledInput
              value={value}
              onChange={handleChange}
              placeholder="할 일을 입력 후, Enter 를 누르세요"
            />
          </InsertForm>    
        </TodoInsertWrapper>
      )}
      <CircleButton onClick={onToggleAdd} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoInsert;