/* eslint-disable react/jsx-no-undef */
import './App.css';
import ToDoList from './components/ToDoList.js'
import Typography from '@material-ui/core/Typography';
import useTodoState from './components/useTodoState';
import TodoForm from './components/TodoForm';
import Container from '@material-ui/core/Container';

function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div>
      <Container maxWidth="sm">
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
      </Container>
    </div>
  );
}

export default App;
