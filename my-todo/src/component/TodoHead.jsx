import styled from "styled-components";

const TodoHeadWrapper = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  
  h1 {
    margin-top: 10px;
    font-size: 36px;
    font-weight: 700;
    color: #9c88ff;
  }
  .day {
    color: #9c88ff;
    font-size: 24px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const Tasks = styled.div`
  color: #9c88ff;
  font-size: 18px;
  font-weight: bold;
  text-align: end;
`;
  

function TodoHead({todos}) {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  const weekday = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = weekday[today.getDay()];

  const checkedTasks = todos.filter(todo => !todo.checked);
  
  return ( 
    <TodoHeadWrapper>
      <h1>{dateString}</h1>
      <div className="day">{dayName}요일</div>
      <Tasks>{checkedTasks.length} left items</Tasks>
    </TodoHeadWrapper>
  );
}

export default TodoHead;