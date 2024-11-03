import { GridItem, Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeCurrentTodo } from 'reduxTodo/toDosSlice';

export const Todo = ({ text, count, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleChangeText = () => {
    dispatch(changeCurrentTodo({ id, text }));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {count}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          onClick={handleChangeText}
          type="button"
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
