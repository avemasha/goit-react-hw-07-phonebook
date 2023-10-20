import {PhonebookForm} from './PhonebookForm/PhonebookForm'
import { HeaderTitle } from './Header/Header';

import { ContactsList } from './Contacts/ContactsList';
import { FilterForm } from './Filter/FilterForm'



export default function App() {

  return (
    <div
      style={{
        width: '1000px',
        margin: '0 auto',
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <HeaderTitle />
      <PhonebookForm />
      <FilterForm />
   
        <ContactsList />
      
    </div>
  );

}
