import { addFilter } from 'redux/filterSlice';
import { Form, Input, Label } from './filter.styled';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Form>
      <Label htmlFor="search">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </Form>
  );
};
