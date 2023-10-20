
import { getContacts, getFilter } from '../store/selectors';
import { List } from './ContactsList.styled';

import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const filtered = (contacts, filter) => {
  let filterContacts = null;
  if (filter === '') {
    filterContacts = contacts;
    return filterContacts;
  }
  const normalizedFilter = filter.toLowerCase();

  filterContacts = contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(normalizedFilter)
  );
  if (filterContacts.length < 1) {
    Notify.warning('No matches =(');
  }
  return filterContacts;
};

export const ContactsList = () => {
  const states = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = filtered(states.contacts, filter.filter);

  return (
    <List>
      {visibleContacts.map(state => {
        
        return (
          <ContactItem
            name={state.text.name}
            key={state.id}
            number={state.text.number}
            id={state.id}
          />
        );
      })}{' '}
    </List>
  );

};
