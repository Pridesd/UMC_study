import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../store/todoReducer";
import { GrCheckbox, GrCheckboxSelected, GrTrash } from "react-icons/gr";
import { Container, Stack, TextField } from "@mui/material";

function TodoList() {
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
    <Container>
      <TextField
        id="standard-basic"
        label="할 일 목록을 입력해주세요"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={submitTodo}
        variant="standard"
      />
      <h1>할 일 목록</h1>
      <Stack spacing={1}>
        {todos.length > 0 ? (
          todos.map((todo, idx) => (
            <div key={todo.id}>
              {todo.done ? (
                <GrCheckboxSelected onClick={toggleTodos(todo.id)} />
              ) : (
                <GrCheckbox onClick={toggleTodos(todo.id)} />
              )}
              <TextField
                error={todo.done ? true : false}
                id="outlined-read-only-input"
                label={idx}
                defaultValue={todo.todo}
                InputProps={{
                  readOnly: true,
                }}
              />
              <GrTrash className="trash" onClick={removeTodo(todo.id)} />
            </div>
          ))
        ) : (
          <h1>데이터가 존재하지 않습니다. </h1>
        )}
      </Stack>
    </Container>
  );
}

export default TodoList;
