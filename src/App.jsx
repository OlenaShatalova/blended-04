import {
  Section,
  Container,
  Header,
  Text,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { Form } from './components/Form/Form';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from 'reduxTodo/toDosSlice';

export const App = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {currentTodo ? <EditForm /> : <Form />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
