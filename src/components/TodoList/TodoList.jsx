import { Text, Grid, Todo } from 'components';
import { selectTodos } from '../../reduxTodo/toDosSlice';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  console.log('todos: ', todos);

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              text={todo.text}
              count={index + 1}
              id={todo.id}
            />
          );
        })}
      </Grid>
    </>
  );
};
