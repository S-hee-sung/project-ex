import styled from "styled-components";

const TodoTempalateBlock = styled.div`
  width: 600px;
  height: 800px;

  background: white;
  border-radius: 16px;

  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;


function TodoTemplate({children}) {
  return (  
    <TodoTempalateBlock>{children}</TodoTempalateBlock>
  );
}

export default TodoTemplate;