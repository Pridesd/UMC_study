import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { addTodo, deleteTodo, toggleTodo } from "./store/todoReducer";
import { GrCheckbox, GrCheckboxSelected, GrTrash } from "react-icons/gr";

const TodoContainer = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1.5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoInput = styled.input`
  font-size: 1.25rem;
  padding: 0.5rem;
`;
const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const Todo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.25rem;
  opacity: ${({ done }) => (done === "true" ? "0.5" : "1")};

  .trash:hover {
    opacity: 0.3;
  }
`;

const TodoBlock = styled.span`
  width: 250px;
  padding: 0.4rem 0.8rem;
  overflow-x: scroll;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    if (e.key !== "Enter") return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  const removeTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };

  const toggleTodos = (id) => () => {
    dispatch(toggleTodo(id));
  };
  return (
    <TodoContainer>
      <TodoInput
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={submitTodo}
        placeholder="할 일 목록을 입력해주세요"
      />
      <h1>할 일 목록</h1>
      <TodoListContainer>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo done={todo.done.toString()} key={todo.id}>
              {todo.done ? (
                <GrCheckboxSelected onClick={toggleTodos(todo.id)} />
              ) : (
                <GrCheckbox onClick={toggleTodos(todo.id)} />
              )}
              <TodoBlock>{todo.todo}</TodoBlock>
              <GrTrash className="trash" onClick={removeTodo(todo.id)} />
            </Todo>
          ))
        ) : (
          <h1>데이터가 존재하지 않습니다. </h1>
        )}
      </TodoListContainer>
    </TodoContainer>
  );
}

export default App;
