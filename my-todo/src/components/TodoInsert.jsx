import styled from "styled-components";
import { useState } from "react";

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  line-height: 1.5;
  color: white;
  flex: 1; //버튼을 제외한 영역을 모두 차지하기

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyleButton = styled.button`
  border: none;
  background-color: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function TodoInsert({onInsert}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); 

    e.preventDefault();
  };


  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput 
        type="text" 
        placeholder="할 일을 입력하세요" 
        value={value}
        onChange={handleChange}
      />
      <StyleButton type="submit">
      </StyleButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;