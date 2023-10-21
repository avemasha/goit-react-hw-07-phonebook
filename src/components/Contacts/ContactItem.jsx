import { Item, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../store/operations';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
      <Item>
       <span>{name}</span>:<span>{number}</span>
        <Button onClick={() => dispatch(deleteContact(id))} type="button">
          Delete
        </Button>
      </Item>
    );
  };