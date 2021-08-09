import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
const ToDoList = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default ToDoList;

// type Todo = Readonly<{
//   id: Number;
//   text: String;
//   done: boolean;
// }>;

// const foo: Todo = {
//   id: 1,
//   text: "clean up room",
//   done: true,
// };

// type CompletedTodo = Readonly<{
//   id: number;
//   text: string;
//   done: true;
//   //literal type (can use exact values)
// }>;

// type CompletedTodoIntersect = Todo & {
//   readonly done: true;
// };
// function toggleTodo(todo: Todo): Todo {
//   return {
//     id: todo.id,
//     text: todo.text,
//     done: !todo.done,
//   };
// }

// function completeAll(todos: readonly Todo[]): CompletedTodo[] {
//   return todos.map((todo) => ({
//     ...todo,
//     done: true,
//   }));
// }
