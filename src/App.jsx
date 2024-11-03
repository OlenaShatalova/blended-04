import { Section, Container, Header, Text, TodoList, Filter } from 'components';
import { Form } from './components/Form/Form';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          <Form />
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
