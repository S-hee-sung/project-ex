import styled from "styled-components";

const TodoTemplateWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  /* 컴포넌트를 따로 만들어도 되고 아니면 Sass처럼 내부에 class로 만들어도 됨 */
  /* 자손을 의미 */
  .app-title {
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background: white;
  }
`;

function TodoTemplate(props) {
  const { Children } = props;

  return (
    <TodoTemplateWrapper>
      <div>일정관리</div>
      <div>{Children}</div>
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;