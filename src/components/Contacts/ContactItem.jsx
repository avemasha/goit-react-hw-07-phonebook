import { Item, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../store/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
      <Item>
        {name}:{number}
        <Button onClick={() => dispatch(deleteContact(id))} type="button">
          Delete
        </Button>
      </Item>
    );
  };