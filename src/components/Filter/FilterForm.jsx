import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../store/selectors';

import { changeFilter } from '../store/filterSlice';
import { Input, Label } from './FilterForm.styled';

export const FilterForm = () => {
  const value = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Label>
      Enter contact name
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
};
