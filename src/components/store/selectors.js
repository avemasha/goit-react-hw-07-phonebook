import { createSelector } from 'reselect';

export const getContacts = state => state.contacts;
// export const getFilter = state => state.filter;
export const getIsLoading = state => state.contactsisLoading;
export const getError = state => state.contactserror;

export const selectFilter = (state) => state.filter;
export const selectContacts = (state) => state.contacts.items;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
    );