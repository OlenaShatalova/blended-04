import { Text, Grid, Todo } from 'components';
import { selectTodos } from '../../reduxTodo/toDosSlice';
import { useSelector } from 'react-redux';
import { selectFilterWord } from 'reduxTodo/filterSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filterTerm = useSelector(selectFilterWord);
  const filteredList = todos.filter(todo => {
    return todo.text.toLowerCase().includes(filterTerm.toLowerCase());
  });

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {filteredList.map((todo, index) => {
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
