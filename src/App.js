/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import './App.css';
import ToDoList from './components/ToDoList.js'
import Typography from '@material-ui/core/Typography';
import useTodoState from './components/useTodoState';
import TodoForm from './components/TodoForm';
import Container from '@material-ui/core/Container';
import styled from "styled-components"



const CenterContainer = styled(Container)`
align-content:center;
padding: 100px;
`;

function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (

    <div className={App}>
      <CenterContainer maxWidth="sm">
        <Typography component="h1" variant="h2">
          Todos
        </Typography>
        <TodoForm
          saveTodo={(todoText) => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              addTodo(trimmedText);
            }
          }}
        />
        <ToDoList todos={todos} deleteTodo={deleteTodo} />
      </CenterContainer></div>

  );
}

export default App;
