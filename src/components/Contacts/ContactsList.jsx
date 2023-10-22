
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../store/selectors';
import { List } from './ContactsList.styled';

import { ContactItem } from './ContactItem';

import { selectVisibleContacts } from '../store/selectors';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect } from 'react';
import { fetchContacts } from 'components/store/operations';


export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts)
  const dispatch = useDispatch();
  const {items} = useSelector(getContacts);
  

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch])



// const visibleContacts = filtered(items, filter);

  return (
    <List>
      {contacts.map(state => {
        
        return (
          <ContactItem
            name={state.name}
            key={state.id}
            number={state.phone}
            id={state.id}
          />
        );
      })}{' '}
    </List>
  );

};
