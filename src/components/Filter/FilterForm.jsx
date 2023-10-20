import { useSelector } from 'react-redux';
import { getFilter } from '../store/selectors';
import { useDispatch } from 'react-redux';
import { addFilter } from '../store/filterSlice';
import { Input, Label,  } from './FilterForm.styled';


export const FilterForm = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };
  return (
 <Label>
  Enter contact name
   <Input type="text" value={filter.filter} onChange={changeFilter}></Input>
 </Label>
 
   
  );
}

