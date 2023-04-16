import styled  from "styled-components";
import { useEffect, useState } from 'react';


const TodoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
`;

const TodoInsert = styled.form` 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  h2 {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 8px;
    background-color: #9c88ff;
    color: white;
    font-weight: 500;
  }
  input {
    margin: 16px 0;
    padding: 4px;
    border: none;
    outline: none;
    border-bottom: 1px solid #9c88ff;
  }
  button {
    cursor: pointer;
    background-color: #9c88ff;
    border: none;
    color: white;
    padding: 8px 16px;
    margin-bottom: 16px;
  }
`;


function TodoEdit({ selectedTodo, handleUpdate }) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    handleUpdate(selectedTodo.id, value);
    setValue(''); 
    e.preventDefault();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  
  return (  
    <>
      <TodoWrapper>
        <TodoInsert onSubmit={handleSubmit}>
          <h2>수정하기</h2>
          <input
            onChange={handleChange}
            value={value}
            placeholder="할 일을 입력하세요"
          />
          <button type="submit">Modify</button>
        </TodoInsert>
      </TodoWrapper>
    </>
  );
}

export default TodoEdit;