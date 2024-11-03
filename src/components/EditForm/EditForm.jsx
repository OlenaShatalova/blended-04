import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useSelector } from 'react-redux';
import {
  changeCurrentTodo,
  editTodo,
  selectCurrentTodo,
} from 'reduxTodo/toDosSlice';
import { useDispatch } from 'react-redux';

import style from './EditForm.module.css';

export const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.target.elements.text.value.trim();
    dispatch(editTodo(input));
  };

  const handleCloseForm = () => {
    dispatch(changeCurrentTodo(null));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={handleCloseForm}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
